import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import Hero from "../components/Home/Hero";
import Highlights from "../components/Home/Highlights";
import Services from "../components/Home/Services";
import HomeCTA from "../components/Home/HomeCTA";
import PageWrapper from "../helper/Pagewrapper";
import AnimatedBackground from "../components/shared/AnimatedBackground";



function Home() {

  return (
    <PageWrapper>
      <AnimatedBackground />
      <main className="relative max-w-8xl mx-auto px-4">
        <Hero />
        <Highlights />
        <Services />
        <HomeCTA />
      </main>
    </PageWrapper>
  )
}

export default Home