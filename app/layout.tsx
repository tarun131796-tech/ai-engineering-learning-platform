import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Engineering Learning Platform - Zero to Pro',
  description: 'Master AI Engineering with structured learning paths, projects, and interactive tutorials. From beginner to professional.',
  keywords: ['AI Engineering', 'Machine Learning', 'LangChain', 'FastAPI', 'Vector Databases', 'Learning Platform'],
  authors: [{ name: 'AI Engineering Learning Platform' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learn-ai-engineering.com',
    title: 'AI Engineering Learning Platform',
    description: 'Master AI Engineering from Zero to Pro',
    siteName: 'AI Engineering Learning Platform',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <ClientProviders>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}