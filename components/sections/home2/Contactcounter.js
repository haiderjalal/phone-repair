'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function Contactcounter() {
    
    return (
        <>
       
         {/*Contact And Counter Start */}
         <section className="contact-and-counter">
            <div className="contact-and-counter__inner">
                <div className="container">
                    <div className="contact-one">
                        <div className="row">
                          
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-one__right wow fadeInRight" data-wow-delay="400ms">
                                    <h3 className="contact-one__form-title">Request A Free Quote</h3>
                                    <form className="contact-form-validated contact-one__form"
                                        action="assets/inc/sendemail.php" method="post" >
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="text" name="name" placeholder="Full Name" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="email" name="email" placeholder="Email Address"
                                                        required=""/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <input type="text" name="Phone" placeholder="Phone Number"
                                                        required=""/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__input-box">
                                                    <div className="select-box">
                                                        <select className="selectmenu wide">
                                                            <option >Service Tyte</option>
                                                            <option>Type Of Service 01</option>
                                                            <option>Type Of Service 02</option>
                                                            <option>Type Of Service 03</option>
                                                            <option>Type Of Service 04</option>
                                                            <option>Type Of Service 05</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-one__btn-box">
                                                    <button type="submit" className="thm-btn contact-one__btn">Submit
                                                        Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
        {/*Contact And Counter End */}
      
        
        </>
    )
}
