'use client'
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        {/*FAQ One Start */}
        <section className="faq-one">
            <div className="faq-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="faq-one__right">
                            <div className="section-title-two text-left">
                                <div className="section-title-two__tagline-box">
                                    <span className="section-title-two__tagline">FAQ</span>
                                </div>
                                <div className="section-title-two__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title-two__title title-animation">Frequently Asking Any Question
                                    </h2>
                                </div>
                            </div>
                            <p className="faq-one__text">Have questions about our phone repair services? We've compiled answers to the most common questions our customers ask about repairs, warranties, and our services.</p>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>How much does it cost to fix a phone?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>At Lambton Phone, the repair time can vary depending on the specific issue with your phone. 
                                However, many repairs are completed within a few hours. For more complex repairs, it may take longer, but our technicians strive to provide efficient service without compromising on quality.
                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Do you provide warranty on phone repairs?</h4>
                                    </div>
                                    <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                        <div className="inner">
                                            <p>Yes, we provide warranty on all our phone repairs. The warranty period varies depending on the type of repair, but typically ranges from 30 to 90 days for parts and labor.
                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What types of phones do you repair?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We repair all major smartphone brands including iPhone, Samsung, Google Pixel, OnePlus, Huawei, and many others. We also service tablets and other mobile devices.
                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End */}
            
        </>
    )
}
