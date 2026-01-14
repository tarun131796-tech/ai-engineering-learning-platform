'use client'

import { useState } from 'react'
import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import { Filter, Rocket, Target, TrendingUp } from 'lucide-react'

interface ProjectsListProps {
  initialProjects: Project[]
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced']

  const filteredProjects = selectedDifficulty === 'All'
    ? initialProjects
    : initialProjects.filter(p => p.difficulty === 'beginner' || p.difficulty === 'intermediate' || p.difficulty === 'advanced' ? p.difficulty === selectedDifficulty : false)

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-50 rounded-lg mr-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {initialProjects.filter(p => p.difficulty === 'beginner').length}
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
                {initialProjects.filter(p => p.difficulty === 'intermediate').length}
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
                {initialProjects.filter(p => p.difficulty === 'advanced').length}
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
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === difficulty
                      ? 'ring-2 ring-offset-2 ring-primary-500'
                      : ''
                  } ${
                    difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      : difficulty === 'advanced'
                      ? 'bg-red-100 text-red-800 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Showing {filteredProjects.length} projects
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}