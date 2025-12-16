import React from 'react'
import { motion } from 'framer-motion'
import profile from '../../assets/profile.jpg'

function Hero() {
  return (
    <>
      <section className='text-center pt-28'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col mb-10 items-center text-white gap-y-6">
            
            <img src={profile} alt="Urmil Ramani" className='w-52 h-52 sm:w-52 sm:h-52 md:w-52 md:h-52 rounded-full object-cover' loading="lazy" />
            
            <h1 className="text-4xl font-bold">Hello, I'm Urmil Ramani</h1>
            
            <h2 className="text-3xl font-semibold">A Passionate Web Developer and Designer.</h2>
        </motion.div>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-300 max-w-6xl mx-auto leading-relaxed"
        >
              I started my journey with core web technologies and gradually moved
              towards modern frameworks like React. During my internship, I’ve worked
              on real-world tasks such as API integration, state management, routing,
              and performance optimization.<br />
              With a strong foundation in web technologies like HTML, CSS, JavaScript, and React, I design and develop clean, user-friendly, and modern websites.
              My passion for technology and creativity helps me craft digital solutions tailored to learning, innovation, and real-world needs.
        </motion.p>
      </section>
    </>
  )
}

export default Hero