export interface Topic {
  slug: string
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  category: 'framework' | 'tool' | 'database'
  estimatedTime: string
  prerequisites: string[]
  content: string
  nextTopics: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  estimatedTime: string
  teamSize: string
  learningGoals: string[]
  techStack: string[]
  prerequisites: string[]
  githubUrl: string
}

export interface LearningMapNode {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    level: 'beginner' | 'intermediate' | 'advanced'
    category: string
    href: string
  }
}

export interface LearningMapEdge {
  id: string
  source: string
  target: string
  type: string
}