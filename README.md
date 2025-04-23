# Notion AI Clone

A modern web application that combines Notion's page rendering capabilities with AI-powered features. This project is built using Next.js, React, and integrates with OpenAI's GPT-3.5 for AI summarization.

## Features

- 📝 Notion page rendering with full support for Notion's rich content
- 🤖 AI-powered page summarization using OpenAI's GPT-3.5
- 🎥 Beautiful YouTube background video integration
- 🌙 Dark mode support
- 📱 Responsive design
- 🔄 Real-time AI processing

## Tech Stack

- **Frontend:**
  - Next.js 13.5.6
  - React 18.2.0
  - TypeScript
  - Tailwind CSS
  - react-notion-x for Notion rendering

- **Backend:**
  - Next.js API routes
  - OpenAI API (GPT-3.5)
  - Notion API integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key
- Notion API key

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
NOTION_API_KEY=your_notion_api_key
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/notion-ai-clone-patched.git
cd notion-ai-clone-patched
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/         # React components
├── pages/             # Next.js pages and API routes
│   ├── api/          # API endpoints
│   └── index.tsx     # Main page
├── styles/           # Global styles
├── public/           # Static assets
└── package.json      # Project dependencies
```

## API Endpoints

- `/api/ai` - Handles AI summarization requests
- `/api/notion-page` - Fetches Notion page content
- `/api/page` - General page data endpoint

## Docker Support

The project includes Docker configuration for containerized deployment:

```bash
# Build the Docker image
docker build -t notion-ai-clone .

# Run the container
docker run -p 3000:3000 notion-ai-clone
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Notion for their amazing platform
- OpenAI for their powerful AI capabilities
- The Next.js team for their excellent framework 