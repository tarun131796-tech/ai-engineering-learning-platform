import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getTopicBySlug, getAllTopics } from '@/lib/content'
import { ArrowLeft, Clock, BookOpen, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface TopicPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const topic = await getTopicBySlug(params.slug)
  if (!topic) {
    return {
      title: 'Topic Not Found',
    }
  }
  return {
    title: `${topic.title} | AI Engineering Learning Platform`,
    description: topic.description,
  }
}

export async function generateStaticParams() {
  const topics = getAllTopics()
  return topics.map((topic) => ({
    slug: topic.slug,
  }))
}

export default async function TopicPage({ params }: TopicPageProps) {
  const topic = await getTopicBySlug(params.slug)
  
  if (!topic) {
    notFound()
  }

  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/topics"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all topics
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{topic.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full font-medium ${levelColors[topic.level]}`}>
                {topic.level ? topic.level.charAt(0).toUpperCase() + topic.level.slice(1) : 'Beginner'}
              </span>
              <span className="text-gray-600">•</span>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>{topic.estimatedTime}</span>
              </div>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {topic.category}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-primary-50 rounded-lg">
              {topic.category === 'framework' && <Target className="h-6 w-6 text-primary-600" />}
              {topic.category === 'tool' && <BookOpen className="h-6 w-6 text-primary-600" />}
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-600">{topic.description}</p>
      </div>

      {/* Prerequisites */}
      {topic.prerequisites && topic.prerequisites.length > 0 && (
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
            Prerequisites
          </h3>
          <div className="flex flex-wrap gap-2">
            {topic.prerequisites.map((prereq) => (
              <Link
                key={prereq}
                href={`/topics/${prereq.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {prereq}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <MarkdownRenderer content={topic.content} />
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topic.nextTopics && topic.nextTopics.map((nextTopic) => (
            <Link
              key={nextTopic}
              href={`/topics/${nextTopic.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                  {nextTopic}
                </h4>
                <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-primary-600 rotate-180" />
              </div>
              <p className="text-sm text-gray-600">
                Continue your learning journey with this next topic
              </p>
            </Link>
          ))}
          <Link
            href="/projects"
            className="bg-primary-50 p-6 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-primary-900">
                Practical Projects
              </h4>
              <Target className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-sm text-primary-700">
              Apply what you&apos;ve learned with hands-on projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}