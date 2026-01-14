import { Metadata } from 'next'
import LearningMapGraph from '@/components/LearningMapGraph'
import { BookOpen, Compass, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interactive Learning Map | AI Engineering Learning Platform',
  description: 'Explore the complete learning path with interactive knowledge graph showing dependencies between topics.',
}

export default function LearningMapPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6">
          <Compass className="h-8 w-8 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interactive Learning Map
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Navigate through topics, visualize dependencies, and plan your learning journey with our interactive knowledge graph.
        </p>
      </div>

      <div className="mb-8 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Begin with Basics</h3>
              <p className="text-sm text-gray-600">Start with green nodes (Beginner level)</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Target className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Follow Connections</h3>
              <p className="text-sm text-gray-600">Edges show learning dependencies</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Compass className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Click to Explore</h3>
              <p className="text-sm text-gray-600">Click any node to view topic details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <LearningMapGraph />
      </div>

      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          How to Use This Map
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learning Strategies</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Start with beginner topics (green nodes)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Follow edges to connected intermediate topics</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Progress to advanced topics (red nodes)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Map Controls</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Zoom:</span>
                Scroll or use controls
              </li>
              <li className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Pan:</span>
                Drag anywhere on the map
              </li>
              <li className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Select:</span>
                Click on any node
              </li>
              <li className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Reset View:</span>
                Use the home button in controls
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}