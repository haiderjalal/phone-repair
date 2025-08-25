import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { slug } = params
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://lambton-backend.vercel.app/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetBlogBySlug($slug: String!) {
            Blogs(where: { slug: { equals: $slug } }) {
              docs {
                id
                title
                content
                excerpt
                slug
                featuredImage {
                  id
                  filename
                  url
                }
                author {
                  name
                  email
                }
                publishedDate
                status
                createdAt
                updatedAt
              }
            }
          }
        `,
        variables: {
          slug: slug
        }
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    
    if (result.errors) {
      throw new Error(`GraphQL error: ${result.errors[0].message}`)
    }
    
    const blogs = result.data.Blogs.docs
    
    if (!blogs || blogs.length === 0) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      )
    }
    
    // Return the first (and should be only) blog post
    return NextResponse.json(blogs[0])
  } catch (error) {
    console.error('Blog details API fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog details', details: error.message },
      { status: 500 }
    )
  }
}