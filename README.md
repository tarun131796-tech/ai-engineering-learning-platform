# AI Engineering Learning Platform

A comprehensive learning platform for AI Engineering, from Zero to Pro. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Structured Learning Paths**: From beginner to advanced topics
- 🗺️ **Interactive Learning Map**: Visual knowledge graph with dependencies
- 📚 **Comprehensive Content**: In-depth tutorials on all major AI engineering topics
- 🛠️ **Hands-on Projects**: Real-world projects with detailed instructions
- 🚀 **Production Ready**: Fully functional, deployable platform
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Visualization**: React Flow
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-engineering-learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run setup script** (optional but recommended)
   ```bash
   npm run setup
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
project/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── learning-map/      # Interactive learning map
│   ├── topics/           # Topic listings and details
│   ├── projects/         # Projects page
│   └── not-found.tsx     # 404 page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── LearningMapGraph.tsx # Interactive graph
│   ├── TopicCard.tsx     # Topic listing card
│   ├── ProjectCard.tsx   # Project card
│   ├── MarkdownRenderer.tsx # MDX renderer
│   └── ClientProviders.tsx # Client-side providers
├── content/              # Learning content
│   ├── topics/          # Markdown topic files
│   └── projects.json    # Project definitions
├── lib/                  # Utility functions
│   ├── content.ts       # Content loading utilities
│   ├── learningMapData.ts # Graph data
│   └── utils.ts         # Helper functions
├── types/               # TypeScript definitions
├── styles/              # Custom styles
├── public/              # Static assets
└── scripts/             # Build and setup scripts
```

## Content Management

### Adding New Topics
Create a new `.mdx` file in `content/topics/`

Use the following frontmatter structure:

```yaml
---
title: "Topic Title"
description: "Brief description"
level: "beginner|intermediate|advanced"
category: "framework|tool|database"
estimatedTime: "X-Y hours"
prerequisites: ["prereq1", "prereq2"]
nextTopics: ["next-topic1", "next-topic2"]
---
```
Write content using Markdown with code examples.

### Adding New Projects
Add a new project object to `content/projects.json`

Follow the existing structure:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "difficulty": "beginner|intermediate|advanced",
  "category": "Category",
  "estimatedTime": "X-Y hours",
  "teamSize": "X-Y people",
  "learningGoals": ["Goal 1", "Goal 2"],
  "techStack": ["Tech 1", "Tech 2"],
  "prerequisites": ["prereq1", "prereq2"],
  "githubUrl": "https://github.com/..."
}
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run setup` - Run setup and verification script

### Development Guidelines

- **Type Safety**: Always use TypeScript with proper types
- **Component Design**: Use functional components with hooks
- **Styling**: Use Tailwind CSS utility classes
- **Performance**: Use Next.js optimizations (Image, Link, etc.)
- **Accessibility**: Follow WCAG guidelines
- **SEO**: Use semantic HTML and proper meta tags

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure everything
4. Your site will be deployed and live

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- **Netlify**: Use `next build` and deploy the output
- **AWS**: Use Amplify or deploy to EC2/ECS
- **Docker**: Build using the included Docker configuration

## Environment Variables

Create a `.env.local` file for local development:

```bash
# API Keys (optional for local development)
# OPENAI_API_KEY=your-openai-api-key
# LANGCHAIN_API_KEY=your-langsmith-api-key

# Application Settings
NEXT_PUBLIC_APP_NAME="AI Engineering Learning Platform"
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Development
NODE_ENV=development
```

## Content Topics Covered

- **LangChain** - Building LLM applications
- **LangGraph** - Stateful multi-actor applications
- **LangSmith** - Debugging, testing, and monitoring
- **FastAPI** - Modern Python web framework
- **Streamlit** - Rapid web apps for ML
- **Vector Databases** - Overview and concepts
- **Chroma** - Open-source embedding database
- **Pinecone** - Managed vector database
- **FAISS** - Facebook AI Similarity Search

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
