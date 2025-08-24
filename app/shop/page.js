'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Home() {
    
    const handleWhatsAppBuy = (productName, price) => {
        const phoneNumber = "+923556172662" 
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
                                            <p>Showing 1 - 12 of 24 results</p>
                                        </div>
                                        <div className="right-box">
                                            <div className="text">
                                                <p>Sort by:</p>
                                            </div>
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="popularity">Popularity</option>
                                                    <option value="1">Price: Low to High</option>
                                                    <option value="2">Price: High to Low</option>
                                                    <option value="3">Newest First</option>
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
                                            <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop" alt="iPhone Screen Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$89.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>iPhone Screen Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('iPhone Screen Repair', '$89.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" alt="Samsung Phone Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$79.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Samsung Phone Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Samsung Phone Repair', '$79.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" alt="Laptop Screen Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$149.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Laptop Screen Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Laptop Screen Repair', '$149.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop" alt="iPad Tablet Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$119.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>iPad Tablet Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                            <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('iPad Tablet Repair', '$119.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop" alt="Phone Battery Replacement"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$59.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Phone Battery Replacement</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Phone Battery Replacement', '$59.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop" alt="Phone Cases & Accessories"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$19.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Phone Cases & Accessories</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Phone Cases & Accessories', '$19.99')}
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
                                            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Laptop Keyboard Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$89.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Laptop Keyboard Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Laptop Keyboard Repair', '$89.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop" alt="Phone Water Damage Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$99.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Phone Water Damage Repair</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Phone Water Damage Repair', '$99.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" alt="MacBook Repair"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$199.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>MacBook Repair Service</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('MacBook Repair Service', '$199.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop" alt="Phone Chargers"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$24.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Phone Chargers & Cables</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Phone Chargers & Cables', '$24.99')}
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
                                            <img src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop" alt="Data Recovery"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$129.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Data Recovery Service</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Data Recovery Service', '$129.99')}
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
                                                        Book Service
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
                                            <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop" alt="Wireless Earbuds"/>
                                            <div className="overlay-icon clearfix">
                                                <Link href="shop">
                                                    <i className="fa fa fa-heart"></i>
                                                </Link>
                                                <Link href="shop">
                                                    <i className=" fa fa fa-plus"></i>
                                                </Link>
                                            </div>
                                            <div className="rate-box">
                                                <h4>$79.99</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title" style={{textAlign: 'left'}}>
                                                <h3>Wireless Earbuds & Headphones</h3>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="btn-box" style={{display: 'flex', justifyContent: 'center'}}>
                                                    <button 
                                                        onClick={() => handleWhatsAppBuy('Wireless Earbuds & Headphones', '$79.99')}
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
                                            <Link href="#">Phone Screen Repair</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Battery Replacement</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Laptop Repair</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Tablet Repair</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Water Damage Repair</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Phone Accessories</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Data Recovery</Link>
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
                                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=80&h=80&fit=crop" alt="iPhone Screen Repair" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">iPhone Screen Repair Service</Link>
                                            </h3>
                                            <h6>$89.99</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=80&h=80&fit=crop" alt="Phone Battery" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Phone Battery Replacement</Link></h3>
                                            <h6>$59.99</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=80&h=80&fit=crop" alt="Phone Case" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Premium Phone Cases & Accessories</Link></h3>
                                            <h6>$19.99</h6>
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