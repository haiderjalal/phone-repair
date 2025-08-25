import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://lambton-backend.vercel.app/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            Blogs {
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
                createdAt
                updatedAt
              }
            }
          }
        `
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    
    if (result.errors) {
      throw new Error(`GraphQL error: ${result.errors[0].message}`)
    }
    
    // Transform GraphQL response to match expected format
    const data = {
      docs: result.data.Blogs.docs
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Blog API fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog data', details: error.message },
      { status: 500 }
    )
  }
}