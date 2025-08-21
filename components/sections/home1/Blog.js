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
        {/*Blog One Start*/}
        <section className="blog-one">
            <div className="container">
                <div className="blog-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">blog & News</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Your Brightest Choice<br/> in Repairs</h2>
                        </div>
                    </div>
                    <div className="blog-one__btn-box">
                        <Link href="blog" className="blog-one__btn thm-btn">View all Blog</Link>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        // Loading state
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <div style={{ height: '250px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                Loading...
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__user">
                                            <p><span className="icon-user"></span>Loading...</p>
                                        </div>
                                        <h3 className="blog-one__title">Loading...</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : blogs.length > 0 ? (
                        blogs.map((blog, index) => {
                            const publishedDate = new Date(blog.publishedDate || blog.createdAt)
                            const day = publishedDate.getDate()
                            const month = publishedDate.toLocaleDateString('en-US', { month: 'short' })
                            
                            return (
                                <div key={blog.id} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box">
                                            <div className="blog-one__img">
                                                <img 
                                                    src={getMediaURL(blog.featuredImage) || "assets/images/blog/blog-1-1.jpg"} 
                                                    alt={blog.title}
                                                />
                                                <Link href={`/blog-details?slug=${blog.slug}`} className="blog-one__link">
                                                    <span className="sr-only">{blog.title}</span>
                                                </Link>
                                            </div>
                                            <div className="blog-one__date">
                                                <p>{day}<br/>{month}</p>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <div className="blog-one__user">
                                                <p><span className="icon-user"></span>By {blog.author?.name || 'Admin'}</p>
                                            </div>
                                            <h3 className="blog-one__title">
                                                <Link href={`/blog-details?slug=${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <Link href={`/blog-details?slug=${blog.slug}`} className="blog-one__learn-more">
                                                Learn More<span className="icon-arrow-right"></span>
                                            </Link>
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
        </section>
        {/*Blog One End*/}
        </>
    )
}
