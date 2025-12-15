import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/profile.jpg"

function Home() {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, scale: 0 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }, }} 
      className="w-full h-screen flex flex-col items-center justify-center text-white max-w-6xl mx-auto gap-y-6">
        
        <img src={profile} alt="Urmil Ramani" className='w-50 h-50 rounded-full' />
        
        <h1 className="text-4xl font-bold">Hello, I'm Urmil Ramani</h1>
        
        <h2 className="text-3xl font-semibold">A Passionate Web Developer and Designer.</h2>
        
        <p>
          With a strong foundation in web technologies like HTML, CSS, JavaScript, and React, I design and develop clean, user-friendly, and modern websites.
          My passion for technology and creativity helps me craft digital solutions tailored to learning, innovation, and real-world needs.
        </p>

        <button className='bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300'>Hire Me</button>
      </motion.div>
    </>
  )
}

export default Home