import { Calendar, Clock, Target, Users } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const difficultyColors = {
    beginner: 'border-green-300',
    intermediate: 'border-yellow-300',
    advanced: 'border-red-300',
  }

  const difficultyTextColors = {
    beginner: 'text-green-700',
    intermediate: 'text-yellow-700',
    advanced: 'text-red-700',
  }

  return (
    <div className={`card border-t-4 ${difficultyColors[project.difficulty]} hover:shadow-xl transition-shadow`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <div className="flex items-center space-x-2">
            <span className={`font-medium ${difficultyTextColors[project.difficulty]}`}>
              {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-600">{project.category}</span>
          </div>
        </div>
        <div className="p-2 bg-primary-50 rounded-lg">
          <Target className="h-6 w-6 text-primary-600" />
        </div>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Learning Goals</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {project.learningGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{project.estimatedTime}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">{project.teamSize}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {project.prerequisites.length} prerequisites
          </div>
          <button
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="btn-primary text-sm"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}