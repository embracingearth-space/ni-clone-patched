



✅ App Summary: Notion Overlay AI Workspace
This project is a custom Notion viewer and AI-powered overlay interface, deployed as a web app that:

Loads and renders public Notion pages in your own branded environment

Uses a YouTube video background to turn the app into a visually immersive “watch + read” experience

Offers AI-powered summarization and future plans for waveform + voice interaction

Dynamically supports page navigation, breadcrumb hierarchy, and Notion-style linking

⚙️ Features

Feature	Description
Public Notion Page Renderer	Uses react-notion-x to fetch and render Notion pages by URL
Custom Layout	Overlays Notion on top of a fullscreen YouTube video
Dynamic Routing	Supports clean URLs like /watch-it-1d7e0f65f3...
Breadcrumbs	Shows Notion-style hierarchy (Parent / Page)
AI Summarization	Uses OpenAI API to summarize page content
Stage 2 Ready	Designed to add waveform overlays, audio analysis, voice agents


🧱 Tech Stack

Layer	Tech
Frontend	React + Next.js 15
UI Components	TailwindCSS
Notion Rendering	react-notion-x
Video Background	YouTube iframe (via YouTubeBackground.tsx with IFrame API)
AI Integration	OpenAI (GPT-4) via API
API Routes	Next.js /api/page using notion-client
Deployment Ready	Dockerized with CI/CD automation
Routing	Dynamic [id].tsx route with custom slug/ID handling

🐳 DevOps / Deployment

System	Setup
Docker	Dockerfile and docker-compose.yml wrap the whole app
CI/CD	GitHub Actions workflow pushes code to server and redeploys
Hosting	Built for cPanel with SSH access, or deployable on Render, Railway, or VPS
Persistence	Static YouTube player mounts outside React to avoid reloads

✅ Next Capabilities You Can Add

Feature	Stack
Voice input	Whisper / Web Speech API
Voice output	ElevenLabs / Google TTS
Visual analysis	GPT-4 Vision or CLIP
Memory/context	Pinecone / Weaviate / ChromaDB
Task agents	LangChain / CrewAI / AutoGen
Offline support	Bun + Ollama + Whisper locally



# Notion AI Clone

A modern web application that combines Notion's page rendering capabilities with AI-powered features. This project is built using Next.js, React, and integrates with OpenAI's GPT-3.5 for AI summarization.

## Features

- 📝 Notion page rendering with full support for Notion's rich content
- 🤖 AI-powered page summarization using OpenAI's GPT-3.5
- 🎥 Configurable YouTube background video (currently set to a specific video)
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
YOUTUBE_BACKGROUND_ID=your_youtube_video_id  # Optional: Change the background video
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
│   └── YouTubeBackground.tsx  # YouTube background component
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

## Customizing the YouTube Background

The project currently uses a hardcoded YouTube video as the background. To change it:

1. Find your desired YouTube video ID (the part after `v=` in the URL)
2. Add it to your `.env.local` file:
   ```env
   YOUTUBE_BACKGROUND_ID=your_video_id
   ```
3. Or modify the video ID directly in `pages/index.tsx`

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