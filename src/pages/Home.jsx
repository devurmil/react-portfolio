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
      {/* <motion.div
        className="fixed bottom-[-150px] left-[-150px] w-96 h-96 bg-yellow-600/20 rounded-full blur-2xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      /> */}
      <main className="relative max-w-6xl mx-auto px-4">
        <Hero />
        <Highlights />
        <Services />
        <HomeCTA />
      </main>
    </PageWrapper>
  )
}

export default Home