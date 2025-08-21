'use client'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { getFeaturedBlogs, getMediaURL, formatDate, getExcerpt } from '@/lib/api'

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
        
        {/*Blog Two Start */}
        <section className="blog-two">
            <div className="container">
                <div className="blog-two__top">
                    <div className="section-title-two text-left">
                        <div className="section-title-two__tagline-box">
                            <span className="section-title-two__tagline">blog & News</span>
                        </div>
                        <div className="section-title-two__title-box sec-title-animation animation-style2">
                            <h2 className="section-title-two__title title-animation">Cool Solutions for Your
                                <br/> Hot Problems</h2>
                        </div>
                    </div>
                    <div className="blog-two__btn-box">
                        <Link href="blog" className="blog-two__btn thm-btn">View all Blog</Link>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        // Loading state
                        Array.from({ length: 3 }).map((_, index) => {
                            const delays = ['100ms', '200ms', '300ms']
                            const animations = ['fadeInLeft', 'fadeInUp', 'fadeInRight']
                            return (
                                <div key={index} className={`col-xl-4 col-lg-4 wow ${animations[index]}`} data-wow-delay={delays[index]}>
                                    <div className="blog-two__single">
                                        <div className="blog-two__single-border"></div>
                                        <div className="blog-two__img-box">
                                            <div className="blog-two__img">
                                                <div style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    Loading...
                                                </div>
                                            </div>
                                            <div className="blog-two__date">
                                                <p>Loading...</p>
                                            </div>
                                        </div>
                                        <div className="blog-two__content">
                                            <h3 className="blog-two__title">Loading...</h3>
                                            <p className="blog-two__text">Loading content...</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : blogs.length > 0 ? (
                        blogs.map((blog, index) => {
                            const publishedDate = new Date(blog.publishedDate || blog.createdAt)
                            const formattedDate = publishedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                            const delays = ['100ms', '200ms', '300ms']
                            const animations = ['fadeInLeft', 'fadeInUp', 'fadeInRight']
                            
                            return (
                                <div key={blog.id} className={`col-xl-4 col-lg-4 wow ${animations[index] || 'fadeInUp'}`} data-wow-delay={delays[index] || '100ms'}>
                                    <div className="blog-two__single">
                                        <div className="blog-two__single-border"></div>
                                        <div className="blog-two__img-box">
                                            <div className="blog-two__img">
                                                <img 
                                                    src={getMediaURL(blog.featuredImage) || "assets/images/blog/blog-2-1.jpg"} 
                                                    alt={blog.title}
                                                />
                                            </div>
                                            <div className="blog-two__date">
                                                <p>{formattedDate}</p>
                                            </div>
                                        </div>
                                        <div className="blog-two__content">
                                            <h3 className="blog-two__title">
                                                <Link href={`/blog-details?slug=${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <p className="blog-two__text">
                                                {blog.excerpt ? getExcerpt(blog.excerpt, 80) : 'Read more about this topic...'}
                                            </p>
                                            <div className="blog-two__read-more">
                                                <Link href={`/blog-details?slug=${blog.slug}`}>
                                                    Read More<span className="icon-arrow-right"></span>
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
        </section>
        {/*Blog Two End */}
       
        </>
    )
}
