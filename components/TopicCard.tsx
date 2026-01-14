import Link from 'next/link'
import { ArrowRight, BookOpen, Target, Zap } from 'lucide-react'
import { Topic } from '@/types'

interface TopicCardProps {
  topic: Topic
}

export default function TopicCard({ topic }: TopicCardProps) {
  const levelColors = {
    beginner: 'border-green-200 bg-green-50',
    intermediate: 'border-yellow-200 bg-yellow-50',
    advanced: 'border-red-200 bg-red-50',
  }

  const levelBadgeColors = {
    beginner: 'badge-beginner',
    intermediate: 'badge-intermediate',
    advanced: 'badge-advanced',
  }

  return (
    <div className={`card border-l-4 ${levelColors[topic.level]} hover:shadow-xl transition-all duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
          <div className="flex items-center space-x-3">
            <span className={`${levelBadgeColors[topic.level]}`}>
              {topic.level ? topic.level.charAt(0).toUpperCase() + topic.level.slice(1) : 'Beginner'}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {topic.category}
            </span>
          </div>
        </div>
        <div className="p-2 bg-primary-50 rounded-lg">
          {topic.category === 'framework' && <Zap className="h-6 w-6 text-primary-600" />}
          {topic.category === 'tool' && <Target className="h-6 w-6 text-primary-600" />}
          {topic.category === 'database' && <BookOpen className="h-6 w-6 text-primary-600" />}
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{topic.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {topic.prerequisites?.map((prereq) => (
          <span
            key={prereq}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {prereq}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Est. {topic.estimatedTime}
        </div>
        <Link
          href={`/topics/${topic.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
        >
          Learn Topic
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}