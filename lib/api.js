const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'

// Generic API fetch function
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}/api${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API fetch error:', error)
    throw error
  }
}

// Fetch all published blogs
export async function getBlogs(limit = 10, page = 1) {
  try {
    const data = await fetchAPI(`/blogs?where[status][equals]=published&limit=${limit}&page=${page}&sort=-publishedDate`)
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return { docs: [], totalDocs: 0, totalPages: 0 }
  }
}

// Fetch a single blog by slug
export async function getBlogBySlug(slug) {
  try {
    const data = await fetchAPI(`/blogs?where[slug][equals]=${slug}&where[status][equals]=published&depth=2`)
    return data.docs[0] || null
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    return null
  }
}

// Fetch featured blogs for homepage
export async function getFeaturedBlogs(limit = 3) {
  try {
    const data = await fetchAPI(`/blogs?where[status][equals]=published&limit=${limit}&sort=-publishedDate&depth=2`)
    return data.docs || []
  } catch (error) {
    console.error('Error fetching featured blogs:', error)
    return []
  }
}

// Fetch blogs by category
export async function getBlogsByCategory(categorySlug, limit = 10, page = 1) {
  try {
    const data = await fetchAPI(`/blogs?where[categories.slug][equals]=${categorySlug}&where[status][equals]=published&limit=${limit}&page=${page}&sort=-publishedDate&depth=2`)
    return data
  } catch (error) {
    console.error('Error fetching blogs by category:', error)
    return { docs: [], totalDocs: 0, totalPages: 0 }
  }
}

// Fetch blogs by tag
export async function getBlogsByTag(tagSlug, limit = 10, page = 1) {
  try {
    const data = await fetchAPI(`/blogs?where[tags.slug][equals]=${tagSlug}&where[status][equals]=published&limit=${limit}&page=${page}&sort=-publishedDate&depth=2`)
    return data
  } catch (error) {
    console.error('Error fetching blogs by tag:', error)
    return { docs: [], totalDocs: 0, totalPages: 0 }
  }
}

// Fetch all categories
export async function getCategories() {
  try {
    const data = await fetchAPI('/categories?sort=name')
    return data.docs || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Fetch all tags
export async function getTags() {
  try {
    const data = await fetchAPI('/tags?sort=name')
    return data.docs || []
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

// Fetch all authors
export async function getAuthors() {
  try {
    const data = await fetchAPI('/authors?sort=name&depth=1')
    return data.docs || []
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

// Helper function to get media URL
export function getMediaURL(media) {
  if (!media) return null
  
  if (typeof media === 'string') {
    return `${API_URL}${media}`
  }
  
  if (media.url) {
    return media.url.startsWith('http') ? media.url : `${API_URL}${media.url}`
  }
  
  return null
}

// Helper function to format date
export function formatDate(dateString) {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper function to get excerpt from rich text content
export function getExcerpt(content, maxLength = 150) {
  if (!content) return ''
  
  // If content is rich text (Lexical), extract plain text
  if (typeof content === 'object' && content.root) {
    const extractText = (node) => {
      if (node.type === 'text') {
        return node.text || ''
      }
      if (node.children) {
        return node.children.map(extractText).join('')
      }
      return ''
    }
    
    const plainText = content.root.children.map(extractText).join(' ')
    return plainText.length > maxLength 
      ? plainText.substring(0, maxLength) + '...' 
      : plainText
  }
  
  // If content is plain text
  if (typeof content === 'string') {
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...' 
      : content
  }
  
  return ''
}