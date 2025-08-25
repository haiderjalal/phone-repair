import Link from "next/link"
export default function About() {
    return (
        <>
        
        {/*About One Start */}
        <section className="about-one">
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
                                            <img src="assets/images/resources/home-about2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>Trusted phone repair<br/> experts since 2013</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/service-1.jpg" alt=""/>
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
                            <p className="about-one__text-1">At Lambton Phones, we specialize in comprehensive mobile device repair services. From cracked screens to battery replacements, our certified technicians provide fast, reliable solutions for all your smartphone and tablet needs. We use only genuine parts and offer warranty on all repairs.</p>
                            <p className="about-one__text-2">Whether it's an iPhone, Samsung, Google Pixel, or any other brand, we have the expertise to get your device back to perfect working condition. Our state-of-the-art facility and experienced team ensure quality repairs with quick turnaround times, so you can stay connected without missing a beat.</p>
                            <div className="about-one__btn-box">
                                <Link href="about" className="about-one__btn thm-btn">About Us More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}
