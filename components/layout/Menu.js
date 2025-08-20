import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            <ul className="main-menu__list">
                <li >
                    <Link href="index3">Home </Link>
               
                </li>
                <li>
                    <Link href="about">About Us</Link>
                </li>
         
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="phone-repair">Phone Repair</Link></li>
                        <li><Link href="laptop-repair">Laptop Repair</Link>
                        </li>
                        <li><Link href="tablet-repair">Tablet Repair</Link>

                        </li>

                        <li><Link href="console-repair">Console Repair</Link>
                        </li>
                      
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="shop">Products</Link></li>
                        <li><Link href="shop-details">Products Details</Link></li>
                   
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
