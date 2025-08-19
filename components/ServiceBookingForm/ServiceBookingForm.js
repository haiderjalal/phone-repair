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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <div className={styles['service-booking-form']}>
            <div className={styles['service-booking-form__inner']}>
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
                        <button type="submit" className={styles['service-booking-form__btn']}>
                            SUBMIT APPOINTMENT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}