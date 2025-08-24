

import "react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { archivo, titilliumWeb, pacifico } from '../lib/font'



export const metadata = {
    metadataBase: new URL('https://phone-repair-rho.vercel.app'), // Replace with your actual domain
    title: 'Lambton Phone Repair - Professional Device Repair',
    description: 'Professional phone, tablet, laptop and console repair services. Fast, reliable, and affordable device repairs with warranty. Get your devices fixed today!',
    keywords: 'phone repair, tablet repair, laptop repair, console repair, device repair, screen replacement, battery replacement',
    author: 'Phone Repair Services',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
        title: 'Phone Repair Services - Professional Device Repair',
        description: 'Professional phone, tablet, laptop and console repair services. Fast, reliable, and affordable device repairs with warranty.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Phone Repair Services'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Phone Repair Services - Professional Device Repair',
        description: 'Professional phone, tablet, laptop and console repair services. Fast, reliable, and affordable device repairs with warranty.'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${archivo.variable} ${titilliumWeb.variable} ${pacifico.variable}`}>
            <body>{children}</body>
        </html>
    )
}
