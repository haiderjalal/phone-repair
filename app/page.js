import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import ChatWidget from "@/components/ChatWidget/ChatWidget"

import Faq from "@/components/sections/home3/Faq"
import Skill from "@/components/sections/home3/Skill"
import Testimonials from "@/components/sections/home3/Testimonials"
import USP from "@/components/sections/home3/USP"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Skill />
                <USP />
                <Services />
            
                  <Testimonials />
                   <About />
                <Faq/>
            </Layout>
            <ChatWidget />
        </>
    )
}