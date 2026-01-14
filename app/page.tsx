import Link from 'next/link'
import { ArrowRight, BookOpen, Code, Rocket, Users, Target } from 'lucide-react'
import TopicCard from '@/components/TopicCard'
import { getAllTopics } from '@/lib/content'

export default function Home() {
  const topics = getAllTopics().slice(0, 3)

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Structured Learning',
      description: 'Follow curated paths from beginner to advanced concepts',
    },
    {
      icon: <Code className="h-8 w-8 text-primary-600" />,
      title: 'Hands-on Projects',
      description: 'Build real-world applications with step-by-step guidance',
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary-600" />,
      title: 'Fast Track',
      description: 'Accelerate your learning with focused content',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Community',
      description: 'Join a network of AI engineers and learners',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Master <span className="text-primary-600">AI Engineering</span>
          <br />
          From Zero to Pro
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          A comprehensive learning platform with structured paths, real-world projects, and interactive tutorials for AI engineers at all levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/learning-map"
            className="btn-primary inline-flex items-center justify-center text-lg px-8 py-3"
          >
            Explore Learning Map
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/topics"
            className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-3"
          >
            Browse Topics
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Learn With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Popular Topics
            </h2>
            <p className="text-gray-600">
              Start learning with our most essential topics
            </p>
          </div>
          <Link
            href="/topics"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
          >
            View all topics
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <Target className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Engineering Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of learners who have transformed their careers with our structured approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning-map"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Begin Learning Path
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}