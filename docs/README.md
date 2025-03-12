# Schoolgle AI Agent Platform Documentation

## Overview

The Schoolgle AI Agent Platform is an advanced AI assistant designed specifically for school operations. It leverages OpenAI's latest agent development tools and vector database integrations to provide intelligent, context-aware assistance across various school management domains.

## Features

### AI Agent Capabilities

The AI agent is designed to assist with the following areas of school operations:

- **Estates Management**: Building maintenance, facility scheduling, resource allocation
- **HR**: Staff recruitment, onboarding, policy guidance, absence management
- **GDPR**: Data protection compliance, privacy policies, data breach protocols
- **Finance**: Budget planning, expense tracking, financial reporting
- **Compliance**: Regulatory requirements, inspection preparation, policy management
- **Teaching & Learning**: Curriculum resources, assessment strategies, lesson planning
- **SEND**: Special Educational Needs support, IEP guidance, accommodation strategies

### Branding & Customization

The platform offers extensive branding and customization options:

- **Schoolgle Branding**: The platform maintains Schoolgle branding while allowing for organization customization
- **Organization Branding**: Schools can add their own logo, name, and brand colors
- **UI Customization**: The interface can be tailored to match the organization's visual identity

### Vector Database Integration

The platform uses vector databases for efficient knowledge retrieval:

- **Embeddings**: Content is converted to vector embeddings for semantic search
- **Context-Aware Responses**: The AI agent can reference school-specific information
- **Knowledge Management**: Easy updating and maintenance of the knowledge base

## Technical Architecture

### Frontend

- **Framework**: Next.js with TypeScript
- **UI Components**: Custom components built with ShadCN/UI
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for interactive elements

### Backend

- **API Routes**: Next.js API routes for server-side logic
- **AI Integration**: OpenAI API for natural language processing
- **Vector Database**: Supabase with pgvector for storing embeddings

### Authentication & Security

- **User Authentication**: Secure login system
- **Role-Based Access**: Different permission levels for administrators and users
- **Data Protection**: Encryption and secure handling of sensitive information

## Setup Guide

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- OpenAI API key
- Supabase account (for vector database)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DSumm18/schoolgle-ai-agent-platform.git
cd schoolgle-ai-agent-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your OpenAI API key and Supabase credentials

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Deployment

For production deployment:

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Customization Guide

### Organization Branding

1. Navigate to the Settings page
2. Under the "Branding" tab:
   - Set your organization name
   - Add your logo URL
   - Customize primary and secondary colors
3. Preview changes in real-time
4. Save to apply the changes across the platform

### Module Configuration

1. Access the Settings page
2. Under the "Modules" tab:
   - Enable/disable specific modules
   - Configure module-specific settings
3. Save changes to update the AI agent's capabilities

## API Reference

The platform provides API endpoints for integration with other systems:

### `/api/agent`

- **POST**: Send a message to the AI agent
  - Request body: `{ messages: [{ role: "user", content: "Your question" }] }`
  - Response: `{ response: "AI response text" }`

- **PUT**: Advanced agent operations
  - Create assistants, threads, and manage conversations
  - See code documentation for detailed parameters

## Troubleshooting

### Common Issues

- **API Key Issues**: Ensure your OpenAI API key is valid and has sufficient credits
- **Vector Database Connection**: Check Supabase credentials and database configuration
- **Performance Issues**: Consider optimizing vector search parameters for large knowledge bases

### Support

For additional support:
- Check the GitHub repository issues
- Contact Schoolgle support at support@schoolgle.com