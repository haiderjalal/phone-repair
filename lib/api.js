// Use production URL by default, fallback to localhost for development
const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 
                process.env.NEXT_PUBLIC_CMS_URL || 
                'https://cms-backend-v26v.onrender.com'

// Generic API fetch function with improved error handling
async function fetchAPI(endpoint, options = {}) {
  // Remove trailing slash from API_URL to prevent double slashes
  const baseUrl = API_URL.replace(/\/$/, '')
  const url = `${baseUrl}/api${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    // Add cache control for better performance
    cache: 'no-store', // For dynamic content
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      console.warn(`CMS Backend Error: ${response.status} ${response.statusText} - URL: ${url}`)
      
      if (response.status === 404) {
        console.warn('Resource not found. Check if the endpoint exists.')
        return null
      }
      
      if (response.status === 500) {
        console.warn('CMS Backend is experiencing internal server errors. Please check backend deployment and environment variables.')
      }
      
      // Try to get error details from response
      let errorDetails = ''
      try {
        const errorData = await response.json()
        errorDetails = errorData.message || errorData.error || ''
      } catch (e) {
        // Ignore JSON parsing errors
      }
      
      throw new Error(`API Error: ${response.status} ${response.statusText}${errorDetails ? ` - ${errorDetails}` : ''}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API fetch error:', error)
    
    // For network errors, return null instead of empty data structure
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.info('Network error: CMS backend is unreachable')
      return null
    }
    
    // Re-throw other errors
    throw error
  }
}

// Fetch all published blogs with improved query parameters
export async function getBlogs(limit = 10, page = 1, options = {}) {
  try {
    const {
      status = 'published',
      sort = '-publishedDate',
      depth = 1
    } = options
    
    const queryParams = new URLSearchParams({
      'where[status][equals]': status,
      limit: limit.toString(),
      page: page.toString(),
      sort,
      depth: depth.toString()
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data) {
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

// Fetch a single blog by slug
export async function getBlogBySlug(slug) {
  try {
    if (!slug) {
      console.warn('getBlogBySlug: slug parameter is required')
      return null
    }
    
    const queryParams = new URLSearchParams({
      'where[slug][equals]': slug,
      'where[status][equals]': 'published',
      depth: '2'
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data || !data.docs || data.docs.length === 0) {
      return null
    }
    
    return data.docs[0]
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    return null
  }
}

// Fetch a single blog by ID
export async function getBlogById(id) {
  try {
    if (!id) {
      console.warn('getBlogById: id parameter is required')
      return null
    }
    
    const data = await fetchAPI(`/blog/${id}?depth=2`)
    return data
  } catch (error) {
    console.error('Error fetching blog by ID:', error)
    return null
  }
}

// Fetch featured blogs for homepage
export async function getFeaturedBlogs(limit = 3) {
  try {
    const queryParams = new URLSearchParams({
      'where[status][equals]': 'published',
      limit: limit.toString(),
      sort: '-publishedDate',
      depth: '2'
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data || !data.docs) {
      return []
    }
    
    return data.docs
  } catch (error) {
    console.error('Error fetching featured blogs:', error)
    return []
  }
}

// Fetch blogs by category
export async function getBlogsByCategory(categorySlug, limit = 10, page = 1) {
  try {
    if (!categorySlug) {
      console.warn('getBlogsByCategory: categorySlug parameter is required')
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    const queryParams = new URLSearchParams({
      'where[categories.category][equals]': categorySlug,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '2'
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data) {
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    return data
  } catch (error) {
    console.error('Error fetching blogs by category:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

// Fetch blogs by tag
export async function getBlogsByTag(tagSlug, limit = 10, page = 1) {
  try {
    if (!tagSlug) {
      console.warn('getBlogsByTag: tagSlug parameter is required')
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    const queryParams = new URLSearchParams({
      'where[tags.tag][equals]': tagSlug,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '2'
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data) {
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    return data
  } catch (error) {
    console.error('Error fetching blogs by tag:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

// Search blogs with query
export async function searchBlogs(query, limit = 10, page = 1) {
  try {
    if (!query || query.trim() === '') {
      console.warn('searchBlogs: query parameter is required')
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    const queryParams = new URLSearchParams({
      'where[or][0][title][contains]': query,
      'where[or][1][excerpt][contains]': query,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '1'
    })
    
    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    
    if (!data) {
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
    }
    
    return data
  } catch (error) {
    console.error('Error searching blogs:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

// Get unique categories from blog posts
export async function getUniqueCategories() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    
    if (!data || !data.docs) {
      return []
    }
    
    const categories = new Set()
    data.docs.forEach(blog => {
      if (blog.categories && Array.isArray(blog.categories)) {
        blog.categories.forEach(cat => {
          if (cat.category) {
            categories.add(cat.category)
          }
        })
      }
    })
    
    return Array.from(categories).sort()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Get unique tags from blog posts
export async function getUniqueTags() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    
    if (!data || !data.docs) {
      return []
    }
    
    const tags = new Set()
    data.docs.forEach(blog => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => {
          if (tag.tag) {
            tags.add(tag.tag)
          }
        })
      }
    })
    
    return Array.from(tags).sort()
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

// Get unique authors from blog posts
export async function getUniqueAuthors() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    
    if (!data || !data.docs) {
      return []
    }
    
    const authors = new Set()
    data.docs.forEach(blog => {
      if (blog.author && blog.author.name) {
        authors.add(blog.author.name)
      }
    })
    
    return Array.from(authors).sort()
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

// Helper function to get media URL with better handling
export function getMediaURL(media) {
  if (!media) return null
  
  // Handle string URLs (media ID or direct URL)
  if (typeof media === 'string') {
    // If it's already a full URL, return as is
    if (media.startsWith('http')) {
      return media
    }
    // If it starts with /, it's a relative path
    if (media.startsWith('/')) {
      return `${API_URL}${media}`
    }
    // Otherwise, assume it's a media ID and construct the URL
    return `${API_URL}/media/${media}`
  }
  
  // Handle media object
  if (typeof media === 'object' && media.url) {
    return media.url.startsWith('http') ? media.url : `${API_URL}${media.url}`
  }
  
  return null
}

// Helper function to get optimized media URL with size parameters
export function getOptimizedMediaURL(media, width = null, height = null, quality = 80) {
  const baseUrl = getMediaURL(media)
  if (!baseUrl) return null
  
  // If it's an external URL, return as is
  if (baseUrl.startsWith('http') && !baseUrl.includes(API_URL)) {
    return baseUrl
  }
  
  // Add optimization parameters for internal media
  const params = new URLSearchParams()
  if (width) params.append('width', width.toString())
  if (height) params.append('height', height.toString())
  if (quality !== 80) params.append('quality', quality.toString())
  
  const queryString = params.toString()
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
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

// Helper function to get excerpt from rich text content with improved text extraction
export function getExcerpt(content, maxLength = 150) {
  if (!content) return ''
  
  // If content is rich text (Lexical), extract plain text
  if (typeof content === 'object' && content.root) {
    const extractText = (node) => {
      if (node.type === 'text') {
        return node.text || ''
      }
      if (node.type === 'paragraph' && node.children) {
        return node.children.map(extractText).join('') + ' '
      }
      if (node.children) {
        return node.children.map(extractText).join('')
      }
      return ''
    }
    
    const plainText = content.root.children.map(extractText).join(' ')
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim()
    
    return plainText.length > maxLength 
      ? plainText.substring(0, maxLength).trim() + '...' 
      : plainText
  }
  
  // If content is plain text
  if (typeof content === 'string') {
    const cleanText = content.replace(/\s+/g, ' ').trim()
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength).trim() + '...' 
      : cleanText
  }
  
  return ''
}

// Helper function to calculate reading time
export function calculateReadingTime(content) {
  if (!content) return 1
  
  const text = getExcerpt(content, 10000) // Get full text
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return Math.max(1, readingTime) // Minimum 1 minute
}

// Helper function to validate blog data
export function validateBlogData(blog) {
  if (!blog || typeof blog !== 'object') {
    return false
  }
  
  const requiredFields = ['id', 'title', 'slug', 'content', 'status']
  return requiredFields.every(field => blog.hasOwnProperty(field) && blog[field] !== null && blog[field] !== undefined)
}

// Helper function to get blog URL
export function getBlogURL(blog) {
  if (!blog || !blog.slug) {
    return '#'
  }
  
  return `/blog/${blog.slug}`
}

// Export API_URL for external use
export { API_URL }