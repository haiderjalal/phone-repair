'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import { useState } from "react"

export default function Contactcounter() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: ''
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
        
        // Create WhatsApp message for appointment booking
        const whatsappMessage = `Hello! New appointment request:

Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}`
        
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
            phone: '',
            serviceType: ''
        })
    }
    
    return (
        <>
       
         {/*Contact And Counter Start */}
         <section className="contact-and-counter">
            <div className="contact-and-counter__inner">
                <div className="container">
                    <div className="contact-one">
                        <div className="row">
                          
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-one__right wow fadeInRight" data-wow-delay="400ms">
                                    <h3 className="contact-one__form-title">Request A Free Quote</h3>
                                    <form className="contact-form-validated contact-one__form"
                                        onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="text" name="name" placeholder="Full Name" required=""
                                                        value={formData.name} onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="email" name="email" placeholder="Email Address"
                                                        required="" value={formData.email} onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="text" name="phone" placeholder="Phone Number"
                                                        required="" value={formData.phone} onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <div className="select-box">
                                                        <select className="selectmenu wide" name="serviceType" 
                                                            value={formData.serviceType} onChange={handleInputChange}>
                                                            <option value="">Service Type</option>
                                                            <option value="Phone Repair">Phone Repair</option>
                                                            <option value="Tablet Repair">Tablet Repair</option>
                                                            <option value="Laptop Repair">Laptop Repair</option>
                                                            <option value="Data Recovery">Data Recovery</option>
                                                            <option value="Screen Replacement">Screen Replacement</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__btn-box">
                                                    <button type="submit" className="thm-btn contact-one__btn">Submit
                                                        Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
        {/*Contact And Counter End */}
      
        
        </>
    )
}
