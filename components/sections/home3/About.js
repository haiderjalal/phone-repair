'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        
        {/*About Three Start */}
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-three__left">
                            
                            <div className="about-three__img-box">
                                <div className="about-three__img">
                                    <img src="assets/images/resources/service-1.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-two">
                                    <img src="assets/images/resources/home-about2.jpg" alt=""/>
                                    <div className="about-three__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="about-three__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="about-three__shape-1 shapeMover">
                                <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                            </div>
                            <div className="about-three__shape-2 float-bob-y">
                                <img src="assets/images/shapes/about-three-shape-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-three__right">
                            <div className="section-title-three text-left sec-title-animation animation-style2">
                                <div className="section-title-three__tagline-box">
                                    <div className="section-title-three__tagline-shape"></div>
                                    <span className="section-title-three__tagline">Lambton's Trusted</span>
                                </div>
                                <h2 className="section-title-three__title title-animation">Your Local Phone Repair
                                    Experts Since 2015</h2>
                            </div>
                            <p className="about-three__text-1">At Lambton Phones, we specialize in fast, reliable repairs for all smartphone brands and models, serving the Lambton community with excellence.</p>
                            <ul className="list-unstyled about-three__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-like"></span>
                                    </div>
                                    <div className="text">
                                        <p>GENUINE PARTS & WARRANTY</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-hands-on-experience"></span>
                                    </div>
                                    <div className="text">
                                        <p>LOCAL LAMBTON COMMUNITY FOCUSED</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-project-complete"></span>
                                    </div>
                                    <div className="text">
                                        <p>SAME DAY REPAIR SERVICE</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="about-three__text-2">From cracked screens to water damage, battery replacements to software issues, Lambton Phones has been the go-to repair shop for residents and businesses in Lambton. Our certified technicians use only high-quality parts and provide comprehensive warranties on all repairs.</p>
                            <Link href="contact" className="thm-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three Start */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        
        </>
    )
}
