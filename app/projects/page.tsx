import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/lib/content'
import { Filter, Rocket, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | AI Engineering Learning Platform',
  description: 'Hands-on projects to apply AI engineering skills from beginner to advanced levels.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced']

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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-50 rounded-lg mr-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.difficulty === 'beginner').length}
              </div>
              <div className="text-gray-600">Beginner Projects</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-50 rounded-lg mr-4">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.difficulty === 'intermediate').length}
              </div>
              <div className="text-gray-600">Intermediate Projects</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-red-50 rounded-lg mr-4">
              <Rocket className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.difficulty === 'advanced').length}
              </div>
              <div className="text-gray-600">Advanced Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Difficulty
            </h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      : difficulty === 'advanced'
                      ? 'bg-red-100 text-red-800 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Showing {projects.length} projects
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

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