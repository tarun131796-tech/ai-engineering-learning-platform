import { Metadata } from 'next'
import { getAllProjects } from '@/lib/content'
import { Rocket } from 'lucide-react'
import ProjectsList from '@/components/ProjectsList'

export const metadata: Metadata = {
  title: 'Projects | AI Engineering Learning Platform',
  description: 'Hands-on projects to apply AI engineering skills from beginner to advanced levels.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6">
          <Rocket className="h-8 w-8 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hands-on Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Apply your knowledge with real-world projects. Build portfolio pieces that demonstrate your AI engineering skills.
        </p>
      </div>

      <ProjectsList initialProjects={projects} />

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Start with a beginner project and work your way up to advanced AI engineering challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#beginner"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Beginner Project
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}