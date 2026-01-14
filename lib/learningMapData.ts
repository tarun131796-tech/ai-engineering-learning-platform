import { LearningMapNode, LearningMapEdge } from '@/types'

export const learningMapNodes: LearningMapNode[] = [
  // Beginner nodes
  {
    id: 'python',
    type: 'default',
    position: { x: 100, y: 100 },
    data: {
      label: 'Python Basics',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/python-basics',
    },
  },
  {
    id: 'ml-basics',
    type: 'default',
    position: { x: 300, y: 100 },
    data: {
      label: 'ML Fundamentals',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/ml-fundamentals',
    },
  },
  {
    id: 'fastapi',
    type: 'default',
    position: { x: 500, y: 100 },
    data: {
      label: 'FastAPI',
      level: 'beginner',
      category: 'framework',
      href: '/topics/fastapi',
    },
  },
  {
    id: 'streamlit',
    type: 'default',
    position: { x: 700, y: 100 },
    data: {
      label: 'Streamlit',
      level: 'beginner',
      category: 'framework',
      href: '/topics/streamlit',
    },
  },
  
  // Intermediate nodes
  {
    id: 'vector-db',
    type: 'default',
    position: { x: 200, y: 250 },
    data: {
      label: 'Vector Databases',
      level: 'intermediate',
      category: 'database',
      href: '/topics/vector-databases',
    },
  },
  {
    id: 'chroma',
    type: 'default',
    position: { x: 400, y: 250 },
    data: {
      label: 'Chroma',
      level: 'intermediate',
      category: 'database',
      href: '/topics/chroma',
    },
  },
  {
    id: 'langchain',
    type: 'default',
    position: { x: 600, y: 250 },
    data: {
      label: 'LangChain',
      level: 'intermediate',
      category: 'framework',
      href: '/topics/langchain',
    },
  },
  
  // Advanced nodes
  {
    id: 'faiss',
    type: 'default',
    position: { x: 300, y: 400 },
    data: {
      label: 'FAISS',
      level: 'advanced',
      category: 'database',
      href: '/topics/faiss',
    },
  },
  {
    id: 'pinecone',
    type: 'default',
    position: { x: 500, y: 400 },
    data: {
      label: 'Pinecone',
      level: 'advanced',
      category: 'database',
      href: '/topics/pinecone',
    },
  },
  {
    id: 'langgraph',
    type: 'default',
    position: { x: 700, y: 400 },
    data: {
      label: 'LangGraph',
      level: 'advanced',
      category: 'framework',
      href: '/topics/langgraph',
    },
  },
  {
    id: 'langsmith',
    type: 'default',
    position: { x: 900, y: 400 },
    data: {
      label: 'LangSmith',
      level: 'advanced',
      category: 'tool',
      href: '/topics/langsmith',
    },
  },
]

export const learningMapEdges: LearningMapEdge[] = [
  // Beginner connections
  { id: 'e1-2', source: 'python', target: 'ml-basics', type: 'smoothstep' },
  { id: 'e2-3', source: 'ml-basics', target: 'fastapi', type: 'smoothstep' },
  { id: 'e2-4', source: 'ml-basics', target: 'streamlit', type: 'smoothstep' },
  
  // Intermediate connections
  { id: 'e3-5', source: 'fastapi', target: 'vector-db', type: 'smoothstep' },
  { id: 'e4-5', source: 'streamlit', target: 'vector-db', type: 'smoothstep' },
  { id: 'e5-6', source: 'vector-db', target: 'chroma', type: 'smoothstep' },
  { id: 'e5-7', source: 'vector-db', target: 'langchain', type: 'smoothstep' },
  
  // Advanced connections
  { id: 'e6-8', source: 'chroma', target: 'faiss', type: 'smoothstep' },
  { id: 'e6-9', source: 'chroma', target: 'pinecone', type: 'smoothstep' },
  { id: 'e7-10', source: 'langchain', target: 'langgraph', type: 'smoothstep' },
  { id: 'e10-11', source: 'langgraph', target: 'langsmith', type: 'smoothstep' },
  { id: 'e9-11', source: 'pinecone', target: 'langsmith', type: 'smoothstep' },
]