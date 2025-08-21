import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Blog List">
        {/*Blog Page Start*/}
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {/*Blog Page Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-1.jpg" alt=""/>
                                    <div className="blog-list__date">
                                        <p>12<br/>Nov</p>
                                    </div>
                                </div>
                                <div className="blog-list__content">
                                    <div className="blog-list__user-and-meta">
                                        <div className="blog-list__user">
                                            <p><span className="icon-user"></span>By Admin</p>
                                        </div>
                                        <ul className="blog-list__meta list-unstyled">
                                          
                                            <li>
                                                <Link href="#"><span className="icon-clock"></span>4 Min Read</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-list__title"><Link href="#">Elase They Endures Pains to Avoid The Worse
                                            Pains Taken </Link></h3>
                                    <p className="blog-list__text">Out enigma ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor
                                        in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                                        pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.</p>
                                    <Link href="#" className="blog-list__read-more">Learn More<span
                                            className="icon-arrow-right"></span></Link>
                                </div>
                            </div>
                            {/*Blog Page Single End*/}
                            {/*Blog Page Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-2.jpg" alt=""/>
                                    <div className="blog-list__date">
                                        <p>12<br/>Nov</p>
                                    </div>
                                </div>
                                <div className="blog-list__content">
                                    <div className="blog-list__user-and-meta">
                                        <div className="blog-list__user">
                                            <p><span className="icon-user"></span>By Admin</p>
                                        </div>
                                        <ul className="blog-list__meta list-unstyled">
                                           
                                            <li>
                                                <Link href="#"><span className="icon-clock"></span>4 Min Read</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-list__title"><Link href="#">Secure to Other Greater Pleasures, or The
                                            Selection Point. </Link></h3>
                                    <p className="blog-list__text">Out enigma ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor
                                        in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                                        pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.</p>
                                    <Link href="#" className="blog-list__read-more">Learn More<span
                                            className="icon-arrow-right"></span></Link>
                                </div>
                            </div>
                            {/*Blog Page Single End*/}
                            {/*Blog Page Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-3.jpg" alt=""/>
                                    <div className="blog-list__date">
                                        <p>12<br/>Nov</p>
                                    </div>
                                </div>
                                <div className="blog-list__content">
                                    <div className="blog-list__user-and-meta">
                                        <div className="blog-list__user">
                                            <p><span className="icon-user"></span>By Admin</p>
                                        </div>
                                        <ul className="blog-list__meta list-unstyled">
                                          
                                            <li>
                                                <Link href="#"><span className="icon-clock"></span>4 Min Read</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-list__title"><Link href="#">The Selection Point Erase in Certain
                                            Circumstances And Owing </Link></h3>
                                    <p className="blog-list__text">Out enigma ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor
                                        in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                                        pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.</p>
                                    <Link href="#" className="blog-list__read-more">Learn More<span
                                            className="icon-arrow-right"></span></Link>
                                </div>
                            </div>
                            {/*Blog Page Single End*/}
                        </div>
                    </div>
               
                </div>
            </div>
        </section>
        {/*Blog Page End*/}


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