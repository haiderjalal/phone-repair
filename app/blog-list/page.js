'use client'
import { useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getBlogs, getMediaURL, formatDate, getExcerpt } from '@/lib/api'

export default function BlogListPage() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchBlogs()
    }, [currentPage])

    const [error, setError] = useState(null)

    const fetchBlogs = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getBlogs(6, currentPage) // 6 blogs per page for list view
            if (data === null) {
                setError('Unable to connect to the blog service. Please try again later.')
                setBlogs([])
                setTotalPages(0)
            } else {
                setBlogs(data.docs || [])
                setTotalPages(data.totalPages || 0)
            }
        } catch (error) {
            console.error('Error fetching blogs:', error)
            setError('An error occurred while loading blogs. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Blog List">
        {/*Blog Page Start*/}
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {error ? (
                                        <div className="text-center py-5">
                                            <div className="alert alert-warning" role="alert">
                                                <h4 className="alert-heading">Service Temporarily Unavailable</h4>
                                                <p>{error}</p>
                                                <hr />
                                                <button 
                                                    className="btn btn-primary" 
                                                    onClick={() => fetchBlogs()}
                                                >
                                                    Try Again
                                                </button>
                                            </div>
                                        </div>
                                    ) : blogs.length > 0 ? (
                                        blogs.map((blog, index) => {
                                            const blogDate = new Date(blog.createdAt)
                                            const day = blogDate.getDate()
                                            const month = blogDate.toLocaleDateString('en-US', { month: 'short' })
                                            const featuredImage = blog.featuredImage ? getMediaURL(blog.featuredImage) : '/assets/images/blog/blog-list-1-1.jpg'
                                            const excerpt = getExcerpt(blog.content, 150)
                                            
                                            return (
                                                <div key={blog.id} className="blog-list__single">
                                                    <div className="blog-list__img">
                                                        <img src={featuredImage} alt={blog.title} />
                                                        <div className="blog-list__date">
                                                            <p>{day}<br/>{month}</p>
                                                        </div>
                                                    </div>
                                                    <div className="blog-list__content">
                                                        <div className="blog-list__user-and-meta">
                                                            <div className="blog-list__user">
                                                                <p><span className="icon-user"></span>By {typeof blog.author === 'object' ? blog.author?.name || 'Admin' : blog.author || 'Admin'}</p>
                                                            </div>
                                                            <ul className="blog-list__meta list-unstyled">
                                                                <li>
                                                                    <Link href="#"><span className="icon-clock"></span>{blog.readTime || '5'} Min Read</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h3 className="blog-list__title">
                                                            <Link href={`/blog-details?slug=${blog.slug}`}>{blog.title}</Link>
                                                        </h3>
                                                        <p className="blog-list__text">{excerpt}</p>
                                                        <Link href={`/blog-details?slug=${blog.slug}`} className="blog-list__read-more">
                                                            Learn More<span className="icon-arrow-right"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="text-center py-5">
                                            <h3>No blogs found</h3>
                                            <p>Check back later for new blog posts.</p>
                                        </div>
                                    )}
                                </>
                            )}
                            
                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="blog-pagination">
                                    <nav aria-label="Blog pagination">
                                        <ul className="pagination justify-content-center">
                                            {currentPage > 1 && (
                                                <li className="page-item">
                                                    <button 
                                                        className="page-link" 
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                    >
                                                        Previous
                                                    </button>
                                                </li>
                                            )}
                                            
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                    <button 
                                                        className="page-link" 
                                                        onClick={() => handlePageChange(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}
                                            
                                            {currentPage < totalPages && (
                                                <li className="page-item">
                                                    <button 
                                                        className="page-link" 
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                    >
                                                        Next
                                                    </button>
                                                </li>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
               
                </div>
            </div>
        </section>
        {/*Blog Page End*/}


        {/*CTA One Start*/}
          <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta.jpg" alt="" width={610} height={522} />

                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get To Know Us</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Expert Phone Repair<br/> Services Available
                            </h2>
                        </div>
                    </div>
                    <p className="cta-one__text">Get your phone repaired by certified technicians using genuine parts<br/>
                        Fast, reliable service with warranty on all repairs</p>
                    <div className="cta-one__btn-and-call-box">
                        <div className="cta-one__btn-box">
                            <a href="https://wa.me/923556172662?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="cta-one__btn thm-btn">Get Appointment</a>
                        </div>
                        <div className="cta-one__call-box">
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="content">
                                <p>Make a call</p>
                                    <h4><Link href="tel:+61249578574">+61 2 4957 8574</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
        </Layout>
        </>
    )
}