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
            <div className="faq-one__bg" style={{ backgroundImage: 'url(assets/images/resources/faq.jpg)' }} ></div>
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
                            <p className="faq-one__text">   At Lambton Phone Repairs, we know your device is important to your daily life.
                  That’s why we’ve answered some of the most common questions about our repair
                  services — so you can feel confident and informed before you visit us. </p>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Do I need to make an appointment for a cell phone repair?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                   While appointments are not necessary, we recommend contacting Lambton Cell
                          Phone Repairs ahead of time to inquire about availability. Making an
                          appointment can help ensure that we have the necessary parts and tools
                          ready for your specific repair, reducing wait times.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Are the repairs at Mayfield covered by a warranty?</h4>
                                    </div>
                                    <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                        <div className="inner">
                                            <p>       Yes, we offer a warranty on our cell phone repairs. The specific warranty
                          duration may vary depending on the type of repair and the parts used. Our
                          warranty typically covers any issues related to the repair performed by
                          Lambton. Please inquire with our staff for more details about our warranty
                          policy.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What forms of payment does Mayfield accept for cell phone repairs?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>  Lambton Phone Repairs accepts various forms of payment, including cash,
                          debit cards, and major credit cards. Please note that the accepted payment
                          methods may vary, so it’s advisable to inquire about payment options when
                          you visit our store.
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
