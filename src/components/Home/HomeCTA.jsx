import React from 'react'
import { motion } from 'framer-motion'
import Resume from '../../assets/Urmil-Ramani-IT-Engineer-Resume.pdf'

function HomeCTA() {
  return (
    <>
      <section className="w-full pt-20 pb-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -inset-24 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl text-gray-200 font-bold mb-4">
            Have an idea or looking for a developer?
          </h2>
          <p className="text-gray-300 mb-8">
            Let’s build something clean, fast, and scalable together.
          </p>

          <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold"
              href="/contact"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="border text-white border-white px-8 py-3 rounded-full font-semibold"
              href={Resume}
              target="_blank"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default HomeCTA