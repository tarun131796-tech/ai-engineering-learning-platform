import { LearningMapNode, LearningMapEdge } from '@/types'

export const learningMapNodes: LearningMapNode[] = [
  // Beginner nodes - Python Course
  {
    id: 'python',
    type: 'default',
    position: { x: 0, y: 100 },
    data: {
      label: 'Python Basics',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/python-basics',
    },
  },
  {
    id: 'python-env',
    type: 'default',
    position: { x: 200, y: 100 },
    data: {
      label: 'Python Environment',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/python-environment',
    },
  },
  {
    id: 'python-core',
    type: 'default',
    position: { x: 400, y: 100 },
    data: {
      label: 'Core Concepts',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/python-core',
    },
  },
  {
    id: 'python-structures',
    type: 'default',
    position: { x: 600, y: 100 },
    data: {
      label: 'Data Structures',
      level: 'beginner',
      category: 'foundation',
      href: '/topics/python-data-structures',
    },
  },
  {
    id: 'python-functions',
    type: 'default',
    position: { x: 800, y: 100 },
    data: {
      label: 'Functions & Modules',
      level: 'intermediate',
      category: 'foundation',
      href: '/topics/python-functions-modules',
    },
  },
  {
    id: 'python-oop',
    type: 'default',
    position: { x: 1000, y: 100 },
    data: {
      label: 'OOP for AI',
      level: 'intermediate',
      category: 'foundation',
      href: '/topics/python-oop',
    },
  },
  {
    id: 'python-numpy',
    type: 'default',
    position: { x: 1200, y: 100 },
    data: {
      label: 'NumPy',
      level: 'intermediate',
      category: 'data-science',
      href: '/topics/python-numpy',
    },
  },
  {
    id: 'python-pandas',
    type: 'default',
    position: { x: 1400, y: 100 },
    data: {
      label: 'Pandas',
      level: 'intermediate',
      category: 'data-science',
      href: '/topics/python-pandas',
    },
  },
  {
    id: 'python-viz',
    type: 'default',
    position: { x: 1600, y: 100 },
    data: {
      label: 'Visualization',
      level: 'intermediate',
      category: 'data-science',
      href: '/topics/python-visualization',
    },
  },

  // Beginner nodes - ML & Frameworks (Shifted Right)
  {
    id: 'ml-basics',
    type: 'default',
    position: { x: 1800, y: 100 },
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
    position: { x: 2000, y: 0 },
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
    position: { x: 2000, y: 200 },
    data: {
      label: 'Streamlit',
      level: 'beginner',
      category: 'framework',
      href: '/topics/streamlit',
    },
  },
  
  // Intermediate nodes (Shifted Right)
  {
    id: 'vector-db',
    type: 'default',
    position: { x: 2200, y: 100 },
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
    position: { x: 2400, y: 0 },
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
    position: { x: 2400, y: 200 },
    data: {
      label: 'LangChain',
      level: 'intermediate',
      category: 'framework',
      href: '/topics/langchain',
    },
  },
  
  // Advanced nodes (Shifted Right)
  {
    id: 'faiss',
    type: 'default',
    position: { x: 2600, y: -100 },
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
    position: { x: 2600, y: 100 },
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
    position: { x: 2600, y: 200 },
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
    position: { x: 2800, y: 200 },
    data: {
      label: 'LangSmith',
      level: 'advanced',
      category: 'tool',
      href: '/topics/langsmith',
    },
  },
]

export const learningMapEdges: LearningMapEdge[] = [
  // Python Course Connections
  { id: 'e-py-env', source: 'python', target: 'python-env', type: 'smoothstep' },
  { id: 'e-env-core', source: 'python-env', target: 'python-core', type: 'smoothstep' },
  { id: 'e-core-struct', source: 'python-core', target: 'python-structures', type: 'smoothstep' },
  { id: 'e-struct-func', source: 'python-structures', target: 'python-functions', type: 'smoothstep' },
  { id: 'e-func-oop', source: 'python-functions', target: 'python-oop', type: 'smoothstep' },
  { id: 'e-oop-numpy', source: 'python-oop', target: 'python-numpy', type: 'smoothstep' },
  { id: 'e-numpy-pandas', source: 'python-numpy', target: 'python-pandas', type: 'smoothstep' },
  { id: 'e-pandas-viz', source: 'python-pandas', target: 'python-viz', type: 'smoothstep' },
  { id: 'e-viz-ml', source: 'python-viz', target: 'ml-basics', type: 'smoothstep' },

  // ML Basics to Frameworks
  { id: 'e2-3', source: 'ml-basics', target: 'fastapi', type: 'smoothstep' },
  { id: 'e2-4', source: 'ml-basics', target: 'streamlit', type: 'smoothstep' },
  
  // Frameworks to Vector DB
  { id: 'e3-5', source: 'fastapi', target: 'vector-db', type: 'smoothstep' },
  { id: 'e4-5', source: 'streamlit', target: 'vector-db', type: 'smoothstep' },

  // Vector DB to Intermediate
  { id: 'e5-6', source: 'vector-db', target: 'chroma', type: 'smoothstep' },
  { id: 'e5-7', source: 'vector-db', target: 'langchain', type: 'smoothstep' },
  
  // Advanced connections
  { id: 'e6-8', source: 'chroma', target: 'faiss', type: 'smoothstep' },
  { id: 'e6-9', source: 'chroma', target: 'pinecone', type: 'smoothstep' },
  { id: 'e7-10', source: 'langchain', target: 'langgraph', type: 'smoothstep' },
  { id: 'e10-11', source: 'langgraph', target: 'langsmith', type: 'smoothstep' },
  // Pinecone also connects to LangSmith in previous map?
  // { id: 'e9-11', source: 'pinecone', target: 'langsmith', type: 'smoothstep' },
]
