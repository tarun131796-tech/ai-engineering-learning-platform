import Link from 'next/link'
import { Home, Search, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <div className="text-9xl font-bold text-gray-200">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Compass className="h-24 w-24 text-primary-500 opacity-50" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      
      <p className="text-xl text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg w-full mb-8">
        <Link
          href="/"
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-full mb-4">
            <Home className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Go Home</h3>
          <p className="text-sm text-gray-600">Return to the homepage</p>
        </Link>
        
        <Link
          href="/learning-map"
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-full mb-4">
            <Compass className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Learning Map</h3>
          <p className="text-sm text-gray-600">Explore our curriculum</p>
        </Link>
        
        <Link
          href="/topics"
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Browse Topics</h3>
          <p className="text-sm text-gray-600">Find learning materials</p>
        </Link>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 max-w-md">
        <h3 className="font-semibold text-gray-900 mb-3">Can't find what you need?</h3>
        <p className="text-gray-600 mb-4">
          Our learning platform is constantly growing. Check back soon for new content, or suggest a topic.
        </p>
        <a
          href="mailto:suggestions@learn-ai-engineering.com"
          className="text-primary-600 hover:text-primary-800 font-medium"
        >
          Suggest a topic →
        </a>
      </div>
    </div>
  )
}