import OpenAI from "openai";

// Initialize the OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function generateChatCompletion(
  messages: ChatMessage[],
  options: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  } = {}
) {
  const {
    model = "gpt-4o",
    temperature = 0.7,
    maxTokens = 1000,
  } = options;

  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating chat completion:", error);
    throw error;
  }
}

export async function createEmbedding(text: string) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error("Error creating embedding:", error);
    throw error;
  }
}

export async function createAssistant(
  name: string,
  instructions: string,
  tools: OpenAI.Beta.Assistant.AssistantCreateParams.Tool[] = []
) {
  try {
    const assistant = await openai.beta.assistants.create({
      name,
      instructions,
      tools,
      model: "gpt-4o",
    });

    return assistant;
  } catch (error) {
    console.error("Error creating assistant:", error);
    throw error;
  }
}

export async function createThread() {
  try {
    const thread = await openai.beta.threads.create();
    return thread;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
}

export async function addMessageToThread(threadId: string, content: string, role: "user" = "user") {
  try {
    const message = await openai.beta.threads.messages.create(threadId, {
      role,
      content,
    });
    return message;
  } catch (error) {
    console.error("Error adding message to thread:", error);
    throw error;
  }
}

export async function runAssistant(threadId: string, assistantId: string) {
  try {
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
    return run;
  } catch (error) {
    console.error("Error running assistant:", error);
    throw error;
  }
}

export async function getRunStatus(threadId: string, runId: string) {
  try {
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);
    return run;
  } catch (error) {
    console.error("Error getting run status:", error);
    throw error;
  }
}

export async function getThreadMessages(threadId: string) {
  try {
    const messages = await openai.beta.threads.messages.list(threadId);
    return messages.data;
  } catch (error) {
    console.error("Error getting thread messages:", error);
    throw error;
  }
}