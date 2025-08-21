import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="News Details">
    
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/>
                                <div className="blog-details__date">
                                    <p>12<br/>Nov</p>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__user-and-meta">
                                    <div className="blog-details__user">
                                        <p><span className="icon-user"></span>By Admin</p>
                                    </div>
                                    <ul className="blog-details__meta list-unstyled">
                                     
                                        <li>
                                            <Link href="#"><span className="icon-clock"></span>4 Min Read</Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="blog-details__title">Elase They Endures Pains to Avoid The Worse Pains Taken
                                </h3>
                                <p className="blog-details__text-1">Out enigma ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in
                                    the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.
                                    Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                                <p className="blog-details__text-2">The wise man therefore always holds in these matters to
                                    this principle of selection. He rejects pleasures to secure other greater pleasures,
                                    or else he endures pains to avoid worse pains to the selection point.</p>
                                <div className="blog-details__author-box">
                                    <h4 className="blog-details__author-text">“Sed do eiusmod tempor incididunt labore et
                                        dolore magna aliqua. Uther enim minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi aliquip commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate”</h4>
                                    <p className="blog-details__author-name">Kane Williamson<span> / CEO</span></p>
                                </div>
                                <h3 className="blog-details__title-2">Sundress Pains to Avoid The Worse Pains </h3>
                                <p className="blog-details__text-3">Out enigma ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in
                                    the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.
                                    Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                                <div className="blog-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <img src="assets/images/blog/blog-details-img-box-img-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <img src="assets/images/blog/blog-details-img-box-img-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                      
                            
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
        {/*Blog Details End*/}


        {/*CTA One Start*/}
           <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta.jpg" alt="" width={610} height={520} />

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