import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const highlights = [
        { title: "React Intern", value: "4+ Months", link: "/about#timeline", icon: "⚛️" },
        { title: "Projects Built", value: "4+", link: "/projects", icon: "📁" },
        { title: "API Integrations", value: "REST APIs", link: "https://www.geeksforgeeks.org/node-js/rest-api-introduction/", icon: "🔗" },
        { title: "Learning", value: "Node.js", link: "/techstack", icon: "🚀" },
    ];

function Highlights() {
  return (
    <>
    <section className="w-full pt-10 pb-34 bg-gradient-to-b from-black/90 to-transparent overflow-hidden">
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
            className="transform-gpu bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center transition"
          >
              <Link to={item.link} className="block">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white text-2xl font-bold">{item.value}</h3>
                <p className="text-white mt-1">{item.title}</p>
              </Link>
          </motion.div>
        ))}
        </div>
      </div>
    </section> 
    </>
  )
}

export default Highlights