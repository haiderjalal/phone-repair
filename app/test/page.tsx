'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/blog')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setBlogData(data)
      } catch (err) {
        setError(`Fetch failed: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Blog API Test</h1>
      <p>Fetching data from: https://lambton-backend.vercel.app/api/blog (via local API proxy)</p>
      
      {loading && (
        <div style={{ color: 'blue' }}>
          Loading...
        </div>
      )}
      
      {error && (
        <div style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '4px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {blogData && (
        <div>
          <h2>API Response (JSON):</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '4px', 
            overflow: 'auto',
            maxHeight: '500px',
            border: '1px solid #ddd'
          }}>
            {JSON.stringify(blogData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}