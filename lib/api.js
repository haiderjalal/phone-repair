// api.js

// Use production URL by default, fallback to localhost for development
const API_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_CMS_URL ||
  'https://lambton-backend.vercel.app'

// -------------------- Generic API Fetch --------------------
async function fetchAPI(endpoint, options = {}) {
  // Remove trailing slash from API_URL to prevent double slashes
  const baseUrl = API_URL.replace(/\/$/, '')
  const url = `${baseUrl}/api${endpoint}`

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
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
        console.warn('CMS Backend internal error. Check backend deployment/env vars.')
      }

      let errorDetails = ''
      try {
        const errorData = await response.json()
        errorDetails = errorData.message || errorData.error || ''
      } catch (_) {}

      throw new Error(
        `API Error: ${response.status} ${response.statusText}${
          errorDetails ? ` - ${errorDetails}` : ''
        }`
      )
    }

    return await response.json()
  } catch (error) {
    console.error('API fetch error:', error)

    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.info('Network error: CMS backend unreachable')
      return null
    }

    throw error
  }
}

// -------------------- BLOG QUERIES --------------------
export async function getBlogs(limit = 10, page = 1, options = {}) {
  try {
    const { status = 'published', sort = '-publishedDate', depth = 2 } = options

    const queryParams = new URLSearchParams({
      'where[status][equals]': status,
      limit: limit.toString(),
      page: page.toString(),
      sort,
      depth: depth.toString(),
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

export async function getBlogBySlug(slug) {
  try {
    if (!slug) return null

    const queryParams = new URLSearchParams({
      'where[slug][equals]': slug,
      'where[status][equals]': 'published',
      depth: '2',
    })

    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    if (!data?.docs?.length) return null

    return data.docs[0]
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    return null
  }
}

export async function getBlogById(id) {
  try {
    if (!id) return null

    return await fetchAPI(`/blog/${id}?depth=2`)
  } catch (error) {
    console.error('Error fetching blog by ID:', error)
    return null
  }
}

export async function getFeaturedBlogs(limit = 3) {
  try {
    const queryParams = new URLSearchParams({
      'where[status][equals]': 'published',
      limit: limit.toString(),
      sort: '-publishedDate',
      depth: '2',
    })

    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    return data?.docs || []
  } catch (error) {
    console.error('Error fetching featured blogs:', error)
    return []
  }
}

export async function getBlogsByCategory(categorySlug, limit = 10, page = 1) {
  try {
    if (!categorySlug) return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }

    const queryParams = new URLSearchParams({
      'where[categories.category][equals]': categorySlug,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '2',
    })

    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    return data || { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  } catch (error) {
    console.error('Error fetching blogs by category:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

export async function getBlogsByTag(tagSlug, limit = 10, page = 1) {
  try {
    if (!tagSlug) return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }

    const queryParams = new URLSearchParams({
      'where[tags.tag][equals]': tagSlug,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '2',
    })

    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    return data || { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  } catch (error) {
    console.error('Error fetching blogs by tag:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

export async function searchBlogs(query, limit = 10, page = 1) {
  try {
    if (!query?.trim()) return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }

    const queryParams = new URLSearchParams({
      'where[or][0][title][contains]': query,
      'where[or][1][excerpt][contains]': query,
      'where[status][equals]': 'published',
      limit: limit.toString(),
      page: page.toString(),
      sort: '-publishedDate',
      depth: '2',
    })

    const data = await fetchAPI(`/blog?${queryParams.toString()}`)
    return data || { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  } catch (error) {
    console.error('Error searching blogs:', error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, limit }
  }
}

// -------------------- UNIQUE FIELDS --------------------
export async function getUniqueCategories() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    if (!data?.docs) return []

    const categories = new Set()
    data.docs.forEach(blog => {
      blog.categories?.forEach(cat => cat.category && categories.add(cat.category))
    })

    return Array.from(categories).sort()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getUniqueTags() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    if (!data?.docs) return []

    const tags = new Set()
    data.docs.forEach(blog => {
      blog.tags?.forEach(tag => tag.tag && tags.add(tag.tag))
    })

    return Array.from(tags).sort()
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

export async function getUniqueAuthors() {
  try {
    const data = await fetchAPI('/blog?where[status][equals]=published&limit=1000')
    if (!data?.docs) return []

    const authors = new Set()
    data.docs.forEach(blog => blog.author?.name && authors.add(blog.author.name))

    return Array.from(authors).sort()
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

// -------------------- MEDIA HELPERS --------------------

// Helper function to get media URL
export function getMediaURL(media) {
  if (!media) return null

  // If it's already a string (URL or ID)
  if (typeof media === 'string') {
    if (media.startsWith('http')) return media
    // Use local media proxy for filenames
    return `/api/media?file=${media}`
  }

  // If it's an object from Payload
  if (typeof media === 'object') {
    if (media.filename) {
      // Use local media proxy with filename
      return `/api/media?file=${media.filename}`
    }
    if (media.url) {
      // Extract filename from URL path like "/api/media/file/about1.jpg"
      const urlParts = media.url.split('/')
      const filename = urlParts[urlParts.length - 1]
      if (filename) {
        return `/api/media?file=${filename}`
      }
      // Fallback to direct URL if we can't extract filename
      return media.url.startsWith('http')
        ? media.url
        : `${API_URL}${media.url}`
    }
  }

  return null
}


// Optimized media URL with sharp params
export function getOptimizedMediaURL(media, width = null, height = null, quality = 80) {
  const baseUrl = getMediaURL(media)
  if (!baseUrl) return null

  if (baseUrl.startsWith('http') && !baseUrl.includes(API_URL)) {
    return baseUrl
  }

  const params = new URLSearchParams()
  if (width) params.append('width', width.toString())
  if (height) params.append('height', height.toString())
  if (quality !== 80) params.append('quality', quality.toString())

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
}

// -------------------- UTILITIES --------------------
export function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getExcerpt(content, maxLength = 150) {
  if (!content) return ''

  if (typeof content === 'object' && content.root) {
    const extractText = (node) => {
      if (node.type === 'text') return node.text || ''
      if (node.type === 'paragraph' && node.children) {
        return node.children.map(extractText).join('') + ' '
      }
      if (node.children) return node.children.map(extractText).join('')
      return ''
    }

    const plainText = content.root.children.map(extractText).join(' ')
      .replace(/\s+/g, ' ')
      .trim()

    return plainText.length > maxLength
      ? plainText.substring(0, maxLength).trim() + '...'
      : plainText
  }

  if (typeof content === 'string') {
    const cleanText = content.replace(/\s+/g, ' ').trim()
    return cleanText.length > maxLength
      ? cleanText.substring(0, maxLength).trim() + '...'
      : cleanText
  }

  return ''
}

export function calculateReadingTime(content) {
  const text = getExcerpt(content, 10000)
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

export function validateBlogData(blog) {
  if (!blog || typeof blog !== 'object') return false
  const required = ['id', 'title', 'slug', 'content', 'status']
  return required.every((f) => blog[f] !== null && blog[f] !== undefined)
}

export function getBlogURL(blog) {
  return blog?.slug ? `/blog/${blog.slug}` : '#'
}

export { API_URL }
