import Link from "next/link";

export default function USP() {
    return (
        <>
            {/*Services One Start */}
            <section className="services-one" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="section-title__title">Why We Are Different</h2>
                        <p className="section-title__text">Discover what sets us apart from the competition</p>
                    </div>
                    <div className="services-one__inner">
                        <ul className="services-one__service-list list-unstyled">
                            <li className="wow fadeInLeft" data-wow-delay="100ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-affordable-price"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link href="pricing">Price Beat Guarantee</Link></h3>
                                    <p className="services-one__text">We promise to beat any competitors price while delivering the same premium quality service </p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="200ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-setting"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link href="about">90 Days Warranty</Link></h3>
                                    <p className="services-one__text">Enjoy complete peace of mind with our 90-day warranty covering all services.</p>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="300ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-services"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link href="contact">Same Day Service</Link></h3>
                                    <p className="services-one__text">We value your time, most repairs are completed on the very same day. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Services One End */}
        </>
    );
}