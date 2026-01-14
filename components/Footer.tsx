import { Brain, Github, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">AI Engineering</span>
            </div>
            <p className="text-gray-400">
              Master AI Engineering from Zero to Pro. Structured learning paths, real-world projects, and expert guidance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li><Link href="/topics?level=beginner" className="hover:text-primary-400 transition-colors">Beginner</Link></li>
              <li><Link href="/topics?level=intermediate" className="hover:text-primary-400 transition-colors">Intermediate</Link></li>
              <li><Link href="/topics?level=advanced" className="hover:text-primary-400 transition-colors">Advanced</Link></li>
              <li><Link href="/projects" className="hover:text-primary-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Topics</h3>
            <ul className="space-y-2">
              <li><Link href="/topics/langchain" className="hover:text-primary-400 transition-colors">LangChain</Link></li>
              <li><Link href="/topics/fastapi" className="hover:text-primary-400 transition-colors">FastAPI</Link></li>
              <li><Link href="/topics/vector-databases" className="hover:text-primary-400 transition-colors">Vector Databases</Link></li>
              <li><Link href="/topics/langsmith" className="hover:text-primary-400 transition-colors">LangSmith</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:contact@learn-ai-engineering.com" className="hover:text-primary-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Engineering Learning Platform. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            {' · '}
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}