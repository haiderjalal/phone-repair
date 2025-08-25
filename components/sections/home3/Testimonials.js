'use client'
import { useState, useEffect } from 'react'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Sample testimonials data (replace with Google Reviews API data)
    const sampleTestimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            text: "Excellent service! My iPhone screen was replaced quickly and professionally. The staff was very friendly and the price was reasonable.",
            date: "2024-01-15"
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 5,
            text: "Great experience with laptop repair. They diagnosed the issue quickly and had it fixed within 24 hours. Highly recommended!",
            date: "2024-01-10"
        },
        {
            id: 3,
            name: "Emma Wilson",
            rating: 5,
            text: "Professional and reliable service. My Samsung phone was water damaged and they managed to save all my data. Amazing work!",
            date: "2024-01-08"
        }
    ]

    useEffect(() => {
        // Simulate API call - replace with actual Google Reviews API
        const fetchTestimonials = async () => {
            try {
                setLoading(true)
                // For now, use sample data
                // TODO: Replace with Google Reviews API call
                setTimeout(() => {
                    setTestimonials(sampleTestimonials)
                    setLoading(false)
                }, 1000)
            } catch (err) {
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
                
                <div className="row g-4">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="col-lg-4 col-md-6">
                            <div className="testimonial-card h-100 p-4 bg-white rounded-3 shadow-sm border">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="testimonial-avatar me-3">
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                             style={{width: '50px', height: '50px'}}>
                                            <span className="text-white fw-bold">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">{testimonial.name}</h6>
                                        <div className="testimonial-rating">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                
                                <blockquote className="mb-3">
                                    <p className="text-muted mb-0 fst-italic">
                                        "{testimonial.text}"
                                    </p>
                                </blockquote>
                                
                                <div className="testimonial-date">
                                    <small className="text-muted">
                                        {new Date(testimonial.date).toLocaleDateString('en-AU', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
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