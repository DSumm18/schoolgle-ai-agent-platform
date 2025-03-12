import { NextRequest, NextResponse } from "next/server";
import {
  generateChatCompletion,
  ChatMessage,
  createAssistant,
  createThread,
  addMessageToThread,
  runAssistant,
  getRunStatus,
  getThreadMessages,
} from "@/lib/openai";

// System prompt for the AI agent
const SYSTEM_PROMPT = `You are an AI assistant for Schoolgle, specialized in helping with school operations including Estates Management, HR, GDPR, Finance, Compliance, Teaching & Learning, and SEND (Special Educational Needs and Disabilities).

Provide helpful, accurate, and concise information related to these areas. When you don't know something, admit it rather than making up information.

Always maintain a professional, friendly tone and follow these guidelines:
1. Prioritize data privacy and GDPR compliance in your responses
2. Provide actionable advice when possible
3. Reference relevant policies or regulations when appropriate
4. Offer step-by-step guidance for complex processes
5. Suggest resources for further information when relevant`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body. 'messages' array is required." },
        { status: 400 }
      );
    }

    // Format messages for OpenAI API
    const formattedMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((msg: any) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
    ];

    // Generate response using OpenAI
    const response = await generateChatCompletion(formattedMessages);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in agent API route:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

// For more advanced agent functionality using Assistants API
export async function PUT(request: NextRequest) {
  try {
    const { action, threadId, assistantId, message, runId } = await request.json();

    switch (action) {
      case "createAssistant":
        const assistant = await createAssistant(
          "Schoolgle AI Agent",
          SYSTEM_PROMPT,
          [{ type: "code_interpreter" }, { type: "retrieval" }]
        );
        return NextResponse.json({ assistantId: assistant.id });

      case "createThread":
        const thread = await createThread();
        return NextResponse.json({ threadId: thread.id });

      case "sendMessage":
        if (!threadId || !message) {
          return NextResponse.json(
            { error: "threadId and message are required" },
            { status: 400 }
          );
        }
        await addMessageToThread(threadId, message);
        return NextResponse.json({ success: true });

      case "runAssistant":
        if (!threadId || !assistantId) {
          return NextResponse.json(
            { error: "threadId and assistantId are required" },
            { status: 400 }
          );
        }
        const run = await runAssistant(threadId, assistantId);
        return NextResponse.json({ runId: run.id });

      case "getStatus":
        if (!threadId || !runId) {
          return NextResponse.json(
            { error: "threadId and runId are required" },
            { status: 400 }
          );
        }
        const status = await getRunStatus(threadId, runId);
        return NextResponse.json({ status: status.status });

      case "getMessages":
        if (!threadId) {
          return NextResponse.json(
            { error: "threadId is required" },
            { status: 400 }
          );
        }
        const messages = await getThreadMessages(threadId);
        return NextResponse.json({ messages });

      default:
        return NextResponse.json(
          { error: "Invalid action" },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Error in assistant API route:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}