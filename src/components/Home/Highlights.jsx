import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
        { title: "React Intern", value: "4+ Months", icon: "⚛️" },
        { title: "Projects Built", value: "4+", icon: "📁" },
        { title: "API Integrations", value: "REST APIs", icon: "🔗" },
        { title: "Learning", value: "Node.js", icon: "🚀" },
    ];

function Highlights() {
  return (
    <>
    <section className="w-full pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center mb-6">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.15, boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.25)" }}
            className="transform-gpu bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-white text-2xl font-bold">{item.value}</h3>
            <p className="text-white mt-1">{item.title}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section> 
    </>
  )
}

export default Highlights