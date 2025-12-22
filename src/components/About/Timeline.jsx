import { motion } from "framer-motion"

const timeline = [
  { year: "2024", text: "Started Web Development (HTML, CSS, JS)" },
  { year: "2025", text: "Learned React & modern frontend" },
  { year: "2025", text: "React Internship & real projects" },
  { year: "2025+", text: "Moving towards Node.js & backend" },
  { year: "2026", text: "to be continued..." },
]

function Timeline() {
  return (
    <section id="timeline" className="pt-10 pb-10">
      <h2 className="text-gray-300 text-3xl font-bold mb-12 text-left ml-10">My Journey</h2>

      <div className="relative border-l border-white/20 max-w-3xl mx-auto">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="transform-gpu ml-6 mb-10"
          >
            <span className="absolute -left-2 w-4 h-4 bg-purple-500 rounded-full"></span>
            <h4 className="text-gray-300 font-semibold">{item.year}</h4>
            <p className="text-gray-400">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline;