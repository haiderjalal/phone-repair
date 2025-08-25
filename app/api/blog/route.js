import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://cms-backend-v26v.onrender.com/api/blog', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Blog API fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog data', details: error.message },
      { status: 500 }
    )
  }
}