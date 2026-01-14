import { Metadata } from 'next'
import TopicCard from '@/components/TopicCard'
import { Filter, Search } from 'lucide-react'
import { getAllTopics } from '@/lib/content'

export const metadata: Metadata = {
  title: 'All Topics | AI Engineering Learning Platform',
  description: 'Browse all AI engineering topics organized by difficulty level and category.',
}

export default function TopicsPage() {
  const topics = getAllTopics()
  const categories = ['All', 'framework', 'tool', 'database']
  const levels = ['All', 'beginner', 'intermediate', 'advanced']

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Learning Topics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive curriculum covering essential AI engineering technologies and concepts.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="inline h-4 w-4 mr-1" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    level === 'beginner'
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : level === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      : level === 'advanced'
                      ? 'bg-red-100 text-red-800 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="inline h-4 w-4 mr-1" />
              Search Topics
            </label>
            <input
              type="search"
              placeholder="Search topics..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">{topics.length}</div>
            <div className="text-gray-600">Total Topics</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {topics.filter(t => t.level === 'beginner').length}
            </div>
            <div className="text-gray-600">Beginner Topics</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {topics.filter(t => t.level === 'intermediate').length}
            </div>
            <div className="text-gray-600">Intermediate Topics</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">
              {topics.filter(t => t.level === 'advanced').length}
            </div>
            <div className="text-gray-600">Advanced Topics</div>
          </div>
        </div>
      </div>
    </div>
  )
}