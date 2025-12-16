import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, scalable React applications with clean UI.",
    icon: "🧩",
  },
  {
    title: "API Integration",
    desc: "Efficient REST API handling with proper loading & error states.",
    icon: "🔗",
  },
  {
    title: "UI / UX Design",
    desc: "Modern, accessible, and user-focused interface design.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    desc: "Debouncing, throttling, lazy loading, and best practices.",
    icon: "⚡",
  },
];

function Services() {
  return (
    <section className="w-full py-24 bg-gradient-to-t from-black/90 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(112, 112, 112, 0.25)" }}
              style={{ willChange: "transform" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services