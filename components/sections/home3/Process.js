'use client'
export default function Process() {
    return (
        <>
        
        {/*Process One Start*/}
        <section className="process-one">
            <div className="process-one__bg jarallax" style={{ backgroundImage: 'url(assets/images/backgrounds/process-cover1.jpg)' }} >
            </div>
            <div className="container">
                <div className="section-title-three text-center sec-title-animation animation-style1">
                    <div className="section-title-three__tagline-box justify-content-center">
                        <div className="section-title-three__tagline-shape"></div>
                        <span className="section-title-three__tagline">Working Process</span>
                        <div className="section-title-three__tagline-shape"></div>
                    </div>
                    <h2 className="section-title-three__title title-animation">Our 3 Key Guarantees</h2>
                </div>
                 <div className="row">
            {/*Process One Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-affordable-price"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">Price Beat Guarantee</h3>
              </div>
            </div>
            {/*Process One Single End*/}
            {/*Process One Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-location"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">Same Place Service</h3>
              </div>
            </div>
            {/*Process One Single End*/}
            {/*Process One Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-certified"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">90 Days Warranty</h3>
              </div>
            </div>
            {/*Process One Single End*/}
          </div>
            </div>
        </section>
        {/*Process One End*/}
        </>
    )
}
