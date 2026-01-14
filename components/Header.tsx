'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Learning Map', href: '/learning-map' },
  { name: 'Topics', href: '/topics' },
  { name: 'Projects', href: '/projects' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              AI Engineering
            </Link>
            <span className="hidden md:inline text-sm text-gray-500 ml-2">
              Zero to Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/topics"
              className="btn-primary"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium px-4 py-2 rounded-lg ${
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/topics"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}