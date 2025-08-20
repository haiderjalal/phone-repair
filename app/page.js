import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Process from "@/components/sections/home3/Process"
import Faq from "@/components/sections/home3/Faq"
import Skill from "@/components/sections/home3/Skill"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Services />
                <Process />
                <Skill />
                <Faq/>
            </Layout>
        </>
    )
}