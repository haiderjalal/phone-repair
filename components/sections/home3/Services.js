'use client'

import Link from 'next/link'
import React from 'react'

// Section header data
const sectionData = {
  tagline: 'Our Services',
  title: 'We provide hassle free<br/>repair services for your devices',
  shapes: {
    shape1: 'assets/images/shapes/services-four-shape-1.png',
    shape2: 'assets/images/shapes/services-four-shape-2.png',
  },
}

// Services data array
const servicesData = [
  {
    id: 1,
    animationClass: 'wow fadeInUp',
    animationDelay: '100ms',
    image: 'assets/images/services/laptop-service.jpg',
    icon: 'icon-laptop',
    title: 'Laptop Repair',
    features: [
      'Keyboard replacements',
      'Screen replacements and repairs',
      'Hard drive upgrades and data transfer',
      'Performance optimisation',
    ],
    buttonText: 'Repair Now',
    linkHref: 'services',
  },
  {
    id: 2,
    animationClass: 'wow fadeInUp',
    animationDelay: '200ms',
    image: 'assets/images/services/phone-service.jpg',
    icon: 'icon-mobile-phone',
    title: 'Phone Repair',
    features: [
      'Screen replacements for all major brands',
      'Battery replacements',
      'Camera and lens repairs',
      'Water damage recovery',
    ],
    buttonText: 'Repair Now',
    linkHref: 'services',
  },
  {
    id: 3,
    animationClass: 'wow fadeInUp',
    animationDelay: '300ms',
    image: 'assets/images/services/tablet-service.jpg',
    icon: 'icon-tablet',
    title: 'Tablet Repair',
    features: [
      'Touchscreen & digitizer replacement',
      'Battery & charging issues fixed',
      'Software troubleshooting',
      'Camera repairs',
    ],
    buttonText: 'Repair Now',
    linkHref: 'services',
  },
  {
    id: 4,
    animationClass: 'wow fadeInUp',
    animationDelay: '300ms',
    image: 'assets/images/services/console-service.jpg',
    icon: 'icon-tablet',
    title: 'Console Repair',
    features: [
      'Console repairs for all major platforms',
      'Controller diagnostics and fixes',
      'Display and connection issues resolved',
    ],
    buttonText: 'Repair Now',
    linkHref: 'services',
  },
]

// Service Item Component
const ServiceItem = ({ service }) => {
  return (
    <div
      className={`col-xl-3 col-lg-3 col-md-6 col-sm-12 ${service.animationClass}`}
      data-wow-delay={service.animationDelay}
    >
      <div className="services-four__single">
        <div className="services-four__img">
          <img src={service.image} alt={service.title} />
          <div className="services-four__icon">
            <span className={service.icon}></span>
          </div>
        </div>
        <div className="services-four__content">
          <h3 className="services-four__title mb-2">
            <Link href={service.linkHref}>{service.title}</Link>
          </h3>

          <ul className="pricing-two__price-points list-unstyled" style={{ fontSize: '14px' }}>
            {service.features.map((feature, index) => (
              <li key={index} style={{ marginTop: '8px', paddingLeft: '5px' }}>
                <div className="icon">
                  <span className="icon-check"></span>
                </div>
                <p style={{ fontSize: '14px', margin: '0' }}>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="services-four__btn-box">
            <Link href={service.linkHref} className="thm-btn services-four__btn" style={{ fontSize: '14px', padding: '8px 16px' }}>
              {service.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Services Component
const Services = () => {
  return (
    <section className="services-four">
      <div className="services-four-shape-1 float-bob-x">
        <img src={sectionData.shapes.shape1} alt="shape1" />
      </div>
      <div className="services-four-shape-2 float-bob-y">
        <img src={sectionData.shapes.shape2} alt="shape2" />
      </div>
      <div className="container">
        <div className="section-title-three text-center sec-title-animation animation-style1">
          <div className="section-title-three__tagline-box justify-content-center">
            <div className="section-title-three__tagline-shape"></div>
            <span className="section-title-three__tagline">{sectionData.tagline}</span>
            <div className="section-title-three__tagline-shape"></div>
          </div>
          <h2 className="section-title-three__title title-animation" dangerouslySetInnerHTML={{ __html: sectionData.title }}></h2>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
