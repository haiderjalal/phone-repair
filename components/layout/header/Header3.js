import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handlePopup, handleMobileMenu  }) {
    return (
        <>
        
        <header className="main-header-three">
            <div className="main-menu-three__top">
                <div className="main-menu-three__top-inner">
                    <ul className="list-unstyled main-menu-three__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-call"></i>
                            </div>
                            <div className="text">
                                <p> <span>Talk to us</span> <Link href="tel:9288006780">+61 2 4957 8574</Link></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p> <span>Mail us</span> <Link href="mailto:info@fonisa24.com">example@gamil.com</Link>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu-three__top-right">
                        <div className="main-menu-three__social">
                            <Link href="#"><i className="icon-facebook"></i></Link>
                            <Link href="#"><i className="icon-xpa"></i></Link>
                            <Link href="#"><i className="icon-link-in"></i></Link>
                            <Link href="#"><i className="icon-instagram"></i></Link>
                        </div>
                  
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="main-menu-three__wrapper-inner">
                        <div className="main-menu-three__left">
                            <div className="main-menu-three__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu-three__right">
                            <div className="main-menu-three__cart-btn-and-login-box">
                             
                                <div className="main-menu-three__btn-box">
                                    <Link href="contact" className="main-menu-three__btn thm-btn">Get a quote</Link>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <div className="main-menu-three__wrapper">
                    <div className="main-menu-three__wrapper-inner">
                        <div className="main-menu-three__left">
                            <div className="main-menu-three__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu-three__right">
                            <div className="main-menu-three__cart-btn-and-login-box">
                                <div className="main-menu-three__cart">
                                    <Link href="#"><span className="fas fa-shopping-cart"></span></Link>
                                </div>
                                <div className="main-menu-three__btn-box">
                                    <Link href="contact" className="main-menu-three__btn thm-btn">Get a quote</Link>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
