'use client'
import { useState, useEffect, useRef } from 'react'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [expandedReviews, setExpandedReviews] = useState({})
    const carouselRef = useRef(null)

    // Google Reviews API endpoint from environment variable
    const GOOGLE_REVIEWS_API = process.env.NEXT_PUBLIC_APIFY_API_URL

    useEffect(() => {
        // Fetch real Google Reviews from Apify API
        const fetchTestimonials = async () => {
            try {
                setLoading(true)
                const response = await fetch(GOOGLE_REVIEWS_API)
                
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews')
                }
                
                const reviewsData = await response.json()
                
                // Transform Google Reviews data to match our component structure
                const transformedReviews = reviewsData
                    .filter(review => review.stars >= 4 && review.text && review.text.trim().length > 10) // Only show 4+ star reviews with meaningful text
                    .slice(0, 12) // Increase to 12 reviews for carousel
                    .map(review => ({
                        id: review.reviewId,
                        name: review.name,
                        rating: review.stars,
                        text: review.text,
                        date: new Date(review.publishedAtDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }))
                
                setTestimonials(transformedReviews)
                setLoading(false)
            } catch (err) {
                console.error('Error fetching Google reviews:', err)
                setError('Failed to load testimonials')
                setLoading(false)
            }
        }

        fetchTestimonials()
    }, [])

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <i 
                key={index} 
                className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
            ></i>
        ))
    }

    const truncateText = (text, maxLength = 120) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    const toggleExpanded = (reviewId) => {
        setExpandedReviews(prev => ({
            ...prev,
            [reviewId]: !prev[reviewId]
        }))
    }

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 320 // Width of one card plus gap
            const currentScroll = carouselRef.current.scrollLeft
            const newScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount
            
            carouselRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            })
        }
    }

    if (loading) {
        return (
            <section className="testimonials-section py-5">
                <div className="container">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="testimonials-section py-5">
                <div className="container">
                    <div className="text-center">
                        <p className="text-danger">{error}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="testimonials-section py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-5">
                            <h2 className="display-6 fw-bold text-dark mb-3">
                                What Our Customers Say
                            </h2>
                            <p className="lead text-muted">
                                Don't just take our word for it - see what our satisfied customers have to say about our repair services
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Carousel Navigation */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <button 
                        className="btn btn-outline-primary rounded-circle p-2"
                        onClick={() => scrollCarousel('left')}
                        style={{width: '45px', height: '45px'}}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                        className="btn btn-outline-primary rounded-circle p-2"
                        onClick={() => scrollCarousel('right')}
                        style={{width: '45px', height: '45px'}}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                {/* Horizontal Scrolling Carousel */}
                <div 
                    ref={carouselRef}
                    className="testimonials-carousel d-flex gap-4 overflow-auto pb-3"
                    style={{
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitScrollbar: { display: 'none' }
                    }}
                >
                    {testimonials.map((testimonial) => {
                        const isExpanded = expandedReviews[testimonial.id]
                        const shouldTruncate = testimonial.text.length > 120
                        
                        return (
                            <div 
                                key={testimonial.id} 
                                className="testimonial-card flex-shrink-0 p-4 bg-white rounded-3 shadow-sm border"
                                style={{width: '300px', minHeight: '280px'}}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="testimonial-avatar me-3">
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                             style={{width: '45px', height: '45px'}}>
                                            <span className="text-white fw-bold">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold" style={{fontSize: '0.9rem'}}>
                                            {testimonial.name}
                                        </h6>
                                        <div className="testimonial-rating">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                
                                <blockquote className="mb-3">
                                    <p className="text-muted mb-0 fst-italic" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                                        "{isExpanded ? testimonial.text : truncateText(testimonial.text)}"
                                    </p>
                                    {shouldTruncate && (
                                        <button 
                                            className="btn btn-link p-0 mt-2 text-primary"
                                            style={{fontSize: '0.8rem', textDecoration: 'none'}}
                                            onClick={() => toggleExpanded(testimonial.id)}
                                        >
                                            {isExpanded ? 'Show less' : 'View more'}
                                        </button>
                                    )}
                                </blockquote>
                                
                                <div className="testimonial-date mt-auto">
                                    <small className="text-muted" style={{fontSize: '0.75rem'}}>
                                        {new Date(testimonial.date).toLocaleDateString('en-AU', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </small>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Custom CSS for hiding scrollbar */}
                <style jsx>{`
                    .testimonials-carousel::-webkit-scrollbar {
                        display: none;
                    }
                    .testimonials-carousel {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <div className="google-reviews-info p-4 bg-white rounded-3 shadow-sm">
                            <h5 className="mb-3">Leave us a review on Google!</h5>
                            <p className="text-muted mb-3">
                                Share your experience with Lambton Phone Repairs and help others discover our quality service.
                            </p>
                            <a 
                                href="https://www.google.com/search?q=lambton+phone+repairs+australia" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <i className="fab fa-google me-2"></i>
                                Write a Google Review
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}