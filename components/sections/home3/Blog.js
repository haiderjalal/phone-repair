'use client'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { getFeaturedBlogs, getMediaURL, formatDate } from '@/lib/api'

export default function Blog() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const data = await getFeaturedBlogs(3)
            setBlogs(data)
        } catch (error) {
            console.error('Error fetching featured blogs:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
          
        {/*Blog Three Start*/}
        <div className="blog-three">
            <div className="blog-three-shape-1 float-bob-y"
                style={{ backgroundImage: 'url(assets/images/shapes/blog-three-shape-1.png)' }} >
            </div>
            <div className="container">
                <div className="section-title-three text-center sec-title-animation animation-style1">
                    <div className="section-title-three__tagline-box justify-content-center">
                        <div className="section-title-three__tagline-shape"></div>
                        <span className="section-title-three__tagline">From Our Blog</span>
                        <div className="section-title-three__tagline-shape"></div>
                    </div>
                    <h2 className="section-title-three__title title-animation">News And Articles</h2>
                </div>
                <div className="row">
                    {loading ? (
                        // Loading state
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <div style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Loading...
                                        </div>
                                        <div className="blog-three__plus">
                                            <div><i className="fa fa-plus"></i></div>
                                        </div>
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="blog-three__meta list-unstyled">
                                            <li>
                                                <span><i className="fa fa-calendar-alt"></i>Loading...</span>
                                            </li>
                                            <li>
                                                <span><i className="far fa-comments"></i>Loading...</span>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title">Loading...</h3>
                                        <div className="blog-three__btn-box">
                                            <span className="thm-btn blog-three__btn">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : blogs.length > 0 ? (
                        blogs.map((blog, index) => {
                            const publishedDate = new Date(blog.publishedDate || blog.createdAt)
                            const formattedDate = publishedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                            
                            return (
                                <div key={blog.id} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                                    <div className="blog-three__single">
                                        <div className="blog-three__img">
                                            <img 
                                                src={getMediaURL(blog.featuredImage) || "assets/images/blog/blog-3-1.jpg"} 
                                                alt={blog.title}
                                            />
                                            <div className="blog-three__plus">
                                                <Link href={`/blog-details?slug=${blog.slug}`}><i className="fa fa-plus"></i></Link>
                                            </div>
                                        </div>
                                        <div className="blog-three__content">
                                            <ul className="blog-three__meta list-unstyled">
                                                <li>
                                                    <Link href={`/blog-details?slug=${blog.slug}`}>
                                                        <i className="fa fa-calendar-alt"></i>{formattedDate}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={`/blog-details?slug=${blog.slug}`}>
                                                        <i className="far fa-comments"></i>Read More
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3 className="blog-three__title">
                                                <Link href={`/blog-details?slug=${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <div className="blog-three__btn-box">
                                                <Link href={`/blog-details?slug=${blog.slug}`} className="thm-btn blog-three__btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        // No blogs fallback
                        <div className="col-12 text-center py-5">
                            <h3>No blogs available</h3>
                            <p>Check back later for new content!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/*Blog Three End*/}
        
        </>
    )
}
