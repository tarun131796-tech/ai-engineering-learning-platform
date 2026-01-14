'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="relative">
                <div className="absolute top-0 right-0 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  {match[1]}
                </div>
                <code
                  className={`block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono ${className}`}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </code>
              </div>
            ) : (
              <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            )
          },
          h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-800">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-semibold mt-5 mb-2 text-gray-700">{children}</h3>,
          p: ({ children }) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-2">{children}</ol>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-600">{children}</blockquote>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-primary-600 hover:text-primary-800 underline transition-colors">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}