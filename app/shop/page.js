'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Home() {
    
    const handleWhatsAppBuy = (productName, price) => {
        const phoneNumber = "+1234567890" // Replace with your WhatsApp business number
        const message = `Hi! I'm interested in buying:\n\nProduct: ${productName}\nPrice: ${price}\n\nPlease provide more details.`
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Shop">
        {/*Shop Page One Start*/}
        <section className="shop-page-one">
            <div className="container">
                <div className="row">

                    <div className="col-xl-8 col-lg-6 col-md-6">
                        <div className="shop-page-one-content">
                            {/*Start Shop items*/}
                            <div className="row">
                                <div className="col-xl-12">

                                    <div className="shop-page-top-info_inner">
                                        <div className="left-box">
                                            <p>Showing 1 - 9 of 30 results</p>
                                        </div>
                                        <div className="right-box">
                                            <div className="text">
                                                <p>Sort by:</p>
                                            </div>
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="popularity">Popularity</option>
                                                    <option value="1">Popularity 01</option>
                                                    <option value="2">Popularity 02</option>
                                                    <option value="3">Popularity 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*End Shop items*/}

                            <div className="row">

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-1.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Digital multimeter</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Digital multimeter', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}
                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">

                                            <img src="assets/images/shop/product-v1-2.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Electric screwdriver</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Electric screwdriver', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}
                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">

                                            <img src="assets/images/shop/product-v1-3.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Multimeter parameters</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Multimeter parameters', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-4.jpg" alt=" Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Cutting Pliers</h3>
                                            </div>
                                            <div className="bottom-box">
                                            <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Cutting Pliers', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-5.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Air conditioners Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Air conditioners Repair', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">

                                            <img src="assets/images/shop/product-v1-6.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Instruments with toolbox</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Instruments with toolbox', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}


                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">

                                            <img src="assets/images/shop/product-v1-3.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Multimeter parameters</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Multimeter parameters', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}
                                {/*Start single shop item*/}
                                <div className="col-xl-6  col-lg-12">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-4.jpg" alt="Image"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Cutting Pliers</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Cutting Pliers', '$40.00')}
                                                        style={{
                                                            backgroundColor: '#25D366',
                                                            color: 'white',
                                                            border: 'none',
                                                            padding: '10px 20px',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        }}
                                                    >
                                                        <i className="fab fa-whatsapp"></i>
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                            </div>
                        </div>
                    </div>

                    {/*Start Shop Page One*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="shop-page-one-sidebar">
                            {/*Start Single Sidebar Box*/}
                            <div className="sidebar-search-box">
                                <form className="search-form" action="#">
                                    <input placeholder="Keyword..." type="text"/>
                                    <button type="submit">
                                        <i className="icon-search-interface-symbol"></i>
                                    </button>
                                </form>
                            </div>
                            {/*End Single Sidebar Box*/}

                            {/*Start Single Sidebar Box*/}
                            <div className="shop-widget-single">
                                <div className="title">
                                    <h3>Categories</h3>
                                    <div className="border-bx"></div>
                                </div>
                                <div className="shop-widget-single_category">
                                    <ul className="list-item clearfix">
                                        <li>
                                            <Link href="#">Electrical installation</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Apprentice Electrician</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Outlet Repairs</Link>
                                        </li>
                                        <li>
                                            <Link href="#">electrical systems</Link>
                                        </li>
                                        <li>
                                            <Link href="#">circuit breakers</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Revolution Industries</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Faulty switches</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Single Sidebar Box*/}



                            {/*Start Single Sidebar Box*/}
                            <div className="shop-widget-single">
                                <div className="title">
                                    <h3>Popular Products</h3>
                                    <div className="border-bx"></div>
                                </div>
                                <ul className="popular-products-list clearfix">
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-1.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Digital multimeters are superior to analog multimeters</Link>
                                            </h3>
                                            <h6>$20.00</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-2.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Air Conditioning Tonnage helps determine.</Link></h3>
                                            <h6>$40.00</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-3.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Helpful tools, insight, and encouragement</Link></h3>
                                            <h6>$18.00</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/*End Single Sidebar Box*/}

                     

                        </div>
                    </div>
                    {/*End Shop Page One*/}

                </div>

                <ul className="styled-pagination pdtop30 clearfix">
                    <li className="arrow prev">
                        <Link href="#"><span className="icon-arrow-right left"></span></Link>
                    </li>
                    <li className="active"><Link href="#">1</Link></li>
                    <li><Link href="#">2</Link></li>
                    <li><Link href="#">3</Link></li>
                    <li className="arrow next">
                        <Link href="#"><span className="icon-arrow-right right"></span></Link>
                    </li>
                </ul>
            </div>
        </section>
        {/*Shop Page One End*/}
        </Layout>
        </>
    )
}