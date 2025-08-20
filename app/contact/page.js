
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        company: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Create WhatsApp message
        const whatsappMessage = `Hello! New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.number}
Company: ${formData.company}
Message: ${formData.message}`
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage)
        
        // WhatsApp API URL with the provided number
        const whatsappURL = `https://wa.me/923556172662?text=${encodedMessage}`
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank')
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            number: '',
            company: '',
            message: ''
        })
    }

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Contact">
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-call"></span>
                            </div>
                            <p>Contact Us</p>
                            <h3><Link href="tel:558270575405">+61 2 4957 8574</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <p>Mail Us</p>
                            <h3><Link href="mailto:example@gamil.com">example@gamil.com</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-location"></span>
                            </div>
                            <p>Our Office Location</p>
                            <h3>33 Alma Rd, New Lambton NSW 2305</h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
            <div className="container">
                <div className="contact-three__inner">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-three__left">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0977639117705!2d151.711184274514!3d-32.92201517360336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733f732446d5b5%3A0xc0824c02de7f691f!2sLambton%20Phones%20%26%20Repairs%20-%20Newcastle!5e0!3m2!1sen!2s!4v1755669201591!5m2!1sen!2s" width="500" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-three__right">
                                <h3 className="contact-three__form-title">Get A Free Quote</h3>
                                <form id="contact-form" className="contact-form-validated contact-three__form"
                                    onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" name="name" placeholder="Your name" required="" 
                                                    value={formData.name} onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="email" name="email" placeholder="Your Email" required=""
                                                    value={formData.email} onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="number" placeholder="Mobile" name="number"
                                                    value={formData.number} onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" placeholder="Company" name="company"
                                                    value={formData.company} onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-three__input-box text-message-box">
                                                <textarea name="message" placeholder="Messege"
                                                    value={formData.message} onChange={handleInputChange}></textarea>
                                            </div>
                                            <div className="contact-three__btn-box">
                                                <button type="submit" className="thm-btn contact-three__btn"
                                                    data-loading-text="Please wait...">
                                                    send a message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}


        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta.jpg" alt="" width={610} height={520}/>

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
                            <Link href="contact" className="cta-one__btn thm-btn">Get Appointment</Link>
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