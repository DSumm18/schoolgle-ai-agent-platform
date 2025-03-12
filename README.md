# Schoolgle AI Agent Platform

An advanced AI agent platform tailored specifically for Schoolgle, leveraging OpenAI's latest agent development tools and vector database integrations.

## Features

### Branding & Whitelabelling
- Fully branded in the distinct Schoolgle style
- Reflects Schoolgle colors, typography, animations, and UI elements
- Subtle but visible Schoolgle branding

### Customisable Organisation Branding
- Prominent but adaptable area for client organisations to insert their own logo and branding
- Allows clients to present the agent as part of their internal systems

### Comprehensive School Operations Functionality
- Estates Management
- HR
- GDPR
- Finance
- Compliance
- Teaching & Learning
- SEND (Special Educational Needs and Disabilities)

### Vector Database Integration
- Utilizes OpenAI's vector database for efficient data retrieval
- Optimized data storage and query processes for cost management

### Modern UI/UX
- Aligned with Monday.com and Sneat-style aesthetics
- Built with ShadCN/UI components
- Interactive animations via Framer Motion

### Scalability and Adaptability
- Modular design for easy feature addition or removal
- Customizable to meet specific organizational needs

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn

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
Create a `.env.local` file in the root directory with the following variables:
```
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Customization Guide

### Organization Branding
1. Navigate to the Admin Dashboard
2. Select "Branding Settings"
3. Upload your organization logo and set brand colors
4. Preview and save changes

### Module Configuration
1. Access the Admin Dashboard
2. Go to "Module Settings"
3. Enable/disable specific modules based on your organization's needs
4. Configure permissions for each module

## Documentation

For detailed documentation on all features and customization options, please refer to the [Documentation](docs/README.md).

## License

This project is proprietary software owned by Schoolgle.