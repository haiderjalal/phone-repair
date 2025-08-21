
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Laptop Repair">
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/laptop-service-top.jpg" alt="" width={840} height={400}/>
                            </div>
                            <h3 className="service-details__title-1">Laptop Repair</h3>
                            <p className="service-details__text-1">Professional repair services for all laptop brands</p>
                            <p className="service-details__text-2">At Lambton Phones, we provide comprehensive laptop repair services for all major brands including Apple, Dell, HP, Lenovo, and more. Our expert technicians can diagnose and fix a wide range of issues to get your laptop running smoothly again.</p>
                            <ul className="service-details__points-list">
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      Screen replacements and repairs
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      Hard drive upgrades and data transfer
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      Keyboard replacements
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      Performance optimization
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      System diagnostics and troubleshooting
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p style={{ color: 'var(--erepair-gray)', fontFamily: 'var(--erepair-font)' }}>
                      Virus and malware removal
                    </p>
                  </li>
                </ul>
                            <div className="service-details__img-box">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/laptop-screen.jpg"
                                                    alt="" width={410} height={300}/>

                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-repair">🔧</span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Screen Repair
                                                    </h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">   We replace cracked or damaged laptop screens with high-quality displays
                          that match your original screens resolution and quality.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/hardware-repair.jpg"
                                                    alt="" width={410} height={300}/>

                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-hardware">💾</span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Hardware Upgrade</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text"> Boost your laptops performance with our hardware upgrade services
                          including RAM, SSD, and processor upgrades where possible.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__sidebar">
                            <div className="service-details__services-box">
                                <h3 className="service-details__services-title">Our Service</h3>
                                <ul className="service-details__services-list list-unstyled">
                                    <li>
                                        <Link href="phone-repair">Phone Repair<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="laptop-repair">Laptop Repair<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="console-repair">Console Repair<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="tablet-repair">Tablet Repair<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                            
                                </ul>
                            </div>
                            {/* <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Get Started Today</h3>
                                <p className="project-details__get-started-text">Pianissimos of dulcimers qui therefore
                                    always
                                    holds in these matters to this principle</p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                     <h4><Link href="tel:+61249578574">+61 2 4957 8574</Link></h4>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                               <p><Link href="mailto:example@gmail.com">Lambtonsphone@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                             <h4>33 Alma Rd,<br/> New Lambton NSW 2305</h4>
                                    </li>
                                </ul>
                                <div className="project-details__get-started-btn-box">
                                    <Link href="#" className="project-details__get-started-btn thm-btn">get in touch</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Service Details End*/}

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