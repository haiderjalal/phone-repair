'use client'
import { useState } from 'react'
import styles from './ServiceBookingForm.module.css'

export default function ServiceBookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceType: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        try {
            // Format phone number for CMS compatibility
            const formatPhoneNumber = (phone) => {
                // Remove all non-digit characters except +
                let cleaned = phone.replace(/[^\d+]/g, '');
                
                // Handle + prefix
                let hasPlus = cleaned.startsWith('+');
                if (hasPlus) {
                    cleaned = cleaned.substring(1);
                }
                
                // Validate minimum length (at least 7 digits)
                if (cleaned.length < 7 || cleaned.length > 16) {
                    throw new Error('Please enter a valid phone number (7-16 digits)');
                }
                
                // Handle Pakistani numbers starting with 0
                if (cleaned.startsWith('0')) {
                    // Convert 03438067823 to 923438067823 (Pakistani country code)
                    cleaned = '92' + cleaned.substring(1);
                    hasPlus = true; // Add + for international format
                }
                
                // Ensure number starts with 1-9 for CMS validation
                if (!/^[1-9]/.test(cleaned)) {
                    throw new Error('Invalid phone number format');
                }
                
                // Return with + if it was international format
                return hasPlus ? '+' + cleaned : cleaned;
            };
            
            const formattedPhone = formatPhoneNumber(formData.phone);
            
            // Debug: Log the formatted phone number
            console.log('Original phone:', formData.phone);
            console.log('Formatted phone:', formattedPhone);
            
            // Prepare data with formatted phone number
            const submissionData = {
                ...formData,
                phone: formattedPhone
            }
            
            // First, save to CMS backend
            const response = await fetch('/api/service-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            })
            
            const result = await response.json()
            
            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit booking')
            }
            
            // If CMS save is successful, proceed with WhatsApp
            const whatsappMessage = `Hello! New appointment request:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Booking ID: ${result.bookingId}`
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage)
            
            // WhatsApp API URL with the provided number
            const whatsappURL = `https://wa.me/923556172662?text=${encodedMessage}`
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank')
            
            // Set success status
            setSubmitStatus('success')
            
            // Reset form after successful submission
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                serviceType: ''
            })
            
        } catch (error) {
            console.error('Booking submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={styles['service-booking-form']} >
            <div className={styles['service-booking-form__inner'] }>
                <h3 className={styles['service-booking-form__title']}>Request A Free Quote</h3>
                <form className={styles['service-booking-form__form']} onSubmit={handleSubmit}>
                    <div className={styles['service-booking-form__input-box']}>
                        <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className={styles['service-booking-form__input-box']}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className={styles['service-booking-form__input-box']}>
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone Number" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className={styles['service-booking-form__input-box']}>
                        <div className={styles['service-booking-form__select-box']}>
                            <select 
                                name="serviceType" 
                                value={formData.serviceType}
                                onChange={handleInputChange}
                                className={styles['service-booking-form__select']}
                                required
                            >
                                <option value="">Service Type</option>
                                <option value="phone-repair">Phone Repair</option>
                                <option value="tablet-repair">Tablet Repair</option>
                                <option value="laptop-repair">Laptop Repair</option>
                                <option value="data-recovery">Data Recovery</option>
                                <option value="screen-replacement">Screen Replacement</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles['service-booking-form__btn-box']}>
                        <button 
                            type="submit" 
                            className={styles['service-booking-form__btn']}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPOINTMENT'}
                        </button>
                    </div>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className={styles['success-message']}>
                            ✅ Booking submitted successfully! You'll be redirected to WhatsApp.
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className={styles['error-message']}>
                            ❌ Failed to submit booking. Please try again or contact us directly.
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}