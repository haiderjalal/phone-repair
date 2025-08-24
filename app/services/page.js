'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Our services">
        {/*Services Page Start */}
        <section className="services-two services-page">
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <img src="assets/images/services/phone-service.jpg" alt="Phone Repair" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                            </div>
                            <p className="services-two__sub-title">Service Type 1</p>
                            <h3 className="services-two__title"><Link href="phone-repair">Phone Repair</Link>
                            </h3>
                            <p className="services-two__text">Quick and reliable iPhone repair services to fix screens, batteries, and other issues efficiently.</p>
                            <Link href="phone-repair" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <img src="assets/images/services/laptop-service.jpg" alt="Laptop Repair" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                            </div>
                            <p className="services-two__sub-title">Service Type 2</p>
                            <h3 className="services-two__title"><Link href="laptop-repair">Laptop Repair</Link>
                            </h3>
                            <p className="services-two__text">Reliable Laptop repair solutions for hardware and software issues, keeping your device running.</p>
                            <Link href="laptop-repair" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <img src="assets/images/services/tablet-service.jpg" alt="Tablet Repair" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                            </div>
                            <p className="services-two__sub-title">Service Type 3</p>
                            <h3 className="services-two__title"><Link href="tablet-repair">Tablet Repair</Link>
                            </h3>
                            <p className="services-two__text">Expert Tablet repair for cracked screens and battery issues, ensuring your device runs smoothly.</p>
                            <Link href="tablet-repair" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="700ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <img src="assets/images/services/console-service.jpg" alt="Console Repair" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                            </div>
                            <p className="services-two__sub-title">Service Type 4</p>
                            <h3 className="services-two__title"><Link href="console-repair">Console Repair</Link>
                            </h3>
                            <p className="services-two__text">Expert Console repair for gaming consoles, ensuring smooth performance and functionality.</p>
                            <Link href="console-repair" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
               
                </div>
            </div>
        </section>
        {/*Services Page End */}

   

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