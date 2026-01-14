import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Topic, Project } from '@/types'

const topicsDirectory = path.join(process.cwd(), 'content/topics')
const projectsPath = path.join(process.cwd(), 'content/projects.json')

export function getAllTopics(): Topic[] {
  const fileNames = fs.readdirSync(topicsDirectory)
  
  const topics = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(topicsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      description: data.description,
      level: data.level,
      category: data.category,
      estimatedTime: data.estimatedTime,
      prerequisites: data.prerequisites || [],
      content,
      nextTopics: data.nextTopics || [],
    } as Topic
  })
  
  return topics
}

export async function getTopicBySlug(slug: string): Promise<Topic | null> {
  try {
    const fullPath = path.join(topicsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      description: data.description,
      level: data.level,
      category: data.category,
      estimatedTime: data.estimatedTime,
      prerequisites: data.prerequisites || [],
      content,
      nextTopics: data.nextTopics || [],
    } as Topic
  } catch (error) {
    return null
  }
}

export function getAllProjects(): Project[] {
  try {
    const fileContents = fs.readFileSync(projectsPath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}