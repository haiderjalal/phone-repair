'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 2,
            
        },
        1350: {
            slidesPerView: 2,
            
        },
    }



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="About company">
        {/*About One Start */}
        <section className="about-one about-four">
            <div className="about-one__shape-one float-bob-y">
                <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__img-box-1">
                                        <div className="about-one__img-1">
                                            <img src="assets/images/resources/service-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>Trusted Phone<br/>Repair Since 2013</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/service-1.jpg" alt="" width={258} height={346}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Get To Know Us</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Professional Phone Repair & 
                                        Mobile Device
                                        Services
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">At Lambton Phone, we are dedicated to providing exceptional mobile device repair services. Our experienced technicians specialize in fixing smartphones, tablets, and other electronic devices with precision and care. We understand how important your devices are to your daily life.</p>
                            <p className="about-one__text-2">From cracked screens to battery replacements, water damage recovery to software issues, we handle all types of phone repairs with professional expertise. Our commitment to quality service and customer satisfaction has made us a trusted name in mobile device repair since 2013.</p>
                            <div className="about-one__btn-box">
                                <Link href="contact" className="about-one__btn thm-btn">About Us More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

  




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
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}


