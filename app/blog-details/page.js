'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getBlogBySlug, getBlogs, getMediaURL, formatDate, getExcerpt } from '@/lib/api'

export default function BlogDetailsPage() {
    const [blog, setBlog] = useState(null)
    const [recentPosts, setRecentPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const searchParams = useSearchParams()
    const slug = searchParams.get('slug')

    useEffect(() => {
        if (slug) {
            fetchBlog()
            fetchRecentPosts()
        } else {
            fetchFirstBlog()
            fetchRecentPosts()
        }
    }, [slug])

    const fetchBlog = async () => {
        setLoading(true)
        try {
            const data = await getBlogBySlug(slug)
            if (data === null) {
                setError('Unable to connect to the blog service. Please try again later.')
            } else if (data) {
                setBlog(data)
            } else {
                setError('Blog not found')
            }
        } catch (error) {
            console.error('Error fetching blog:', error)
            setError('Failed to load blog')
        } finally {
            setLoading(false)
        }
    }

    const fetchFirstBlog = async () => {
        setLoading(true)
        try {
            const data = await getBlogs(1, 1) // Get first blog
            if (data === null) {
                setError('Unable to connect to the blog service. Please try again later.')
            } else if (data && data.docs && data.docs.length > 0) {
                setBlog(data.docs[0])
            } else {
                setError('No blogs found')
            }
        } catch (error) {
            console.error('Error fetching first blog:', error)
            setError('Failed to load blog')
        } finally {
            setLoading(false)
        }
    }

    const fetchRecentPosts = async () => {
        try {
            const response = await getBlogs(1, 5) // Get 5 recent posts
            setRecentPosts(response.docs || [])
        } catch (err) {
            console.error('Error fetching recent posts:', err)
        }
    }

    const renderContent = (content) => {
        if (!content) return null
        
        // Handle rich text content from Payload CMS
        if (typeof content === 'object' && content.root) {
            // This is a Lexical editor content structure
            return content.root.children?.map((child, index) => {
                if (child.type === 'paragraph') {
                    return (
                        <p key={index} className="blog-details__text">
                            {child.children?.map((textNode, textIndex) => textNode.text).join('')}
                        </p>
                    )
                }
                if (child.type === 'heading') {
                    const HeadingTag = `h${child.tag}`
                    return (
                        <HeadingTag key={index} className="blog-details__title-2">
                            {child.children?.map((textNode, textIndex) => textNode.text).join('')}
                        </HeadingTag>
                    )
                }
                return null
            })
        }
        
        // Fallback for plain text
        return <p className="blog-details__text">{content}</p>
    }

    if (loading) {
        return (
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Loading...">
                <section className="blog-details">
                    <div className="container">
                        <div className="text-center py-5">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }

    if (error || !blog) {
        return (
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Error">
                <section className="blog-details">
                    <div className="container">
                        <div className="text-center py-5">
                            <h3>Blog Not Found</h3>
                            <p>{error || 'The requested blog post could not be found.'}</p>
                            <Link href="/blog" className="thm-btn">Back to Blog</Link>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }

    const publishedDate = new Date(blog.publishedDate || blog.createdAt)
    const day = publishedDate.getDate()
    const month = publishedDate.toLocaleDateString('en-US', { month: 'short' })

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={blog.title}>
    
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img 
                                    src={getMediaURL(blog.featuredImage) || "assets/images/blog/blog-details-img-1.jpg"} 
                                    alt={blog.title}
                                />
                                <div className="blog-details__date">
                                    <p>{day}<br/>{month}</p>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__user-and-meta">
                                    <div className="blog-details__user">
                                        <p><span className="icon-user"></span>By {typeof blog.author === 'object' ? blog.author?.name || 'Admin' : blog.author || 'Admin'}</p>
                                    </div>
                                    <ul className="blog-details__meta list-unstyled">
                                        {blog.readTime && (
                                            <li>
                                                <span className="icon-clock"></span>{blog.readTime} Min Read
                                            </li>
                                        )}

                                    </ul>
                                </div>
                                <h3 className="blog-details__title">{blog.title}</h3>
                                
                                {blog.excerpt && (
                                    <p className="blog-details__text-1">{blog.excerpt}</p>
                                )}
                                
                                <div className="blog-details__content-body">
                                    {renderContent(blog.content)}
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <h3 className="sidebar__title">Search</h3>
                                <form className="sidebar__search-form">
                                    <input type="search" placeholder="Search here"/>
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
                            
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Recent Posts</h3>
                                <div className="sidebar__post-list">
                                    {recentPosts.length > 0 ? (
                                        recentPosts.map((post) => {
                                            const postDate = new Date(post.publishedDate || post.createdAt)
                                            return (
                                                <div key={post.id} className="sidebar__post-single">
                                                    <div className="sidebar__post-image">
                                                        <img 
                                                            src={getMediaURL(post.featuredImage) || "assets/images/blog/lp-1-1.jpg"} 
                                                            alt={post.title}
                                                            width={70}
                                                            height={70}
                                                        />
                                                    </div>
                                                    <div className="sidebar__post-content">
                                                        <h3 className="sidebar__post-title">
                                                            <Link href={`/blog-details?slug=${post.slug}`}>
                                                                {post.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="sidebar__post-date">
                                                            <span className="icon-calendar"></span>
                                                            {postDate.toLocaleDateString('en-US', { 
                                                                year: 'numeric', 
                                                                month: 'short', 
                                                                day: 'numeric' 
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p>No recent posts available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Details End*/}

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