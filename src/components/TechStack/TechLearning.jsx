import { motion } from "framer-motion";

const learning = [
  { name: "Node.js & Express", icon: "🟢" },
  { name: "API Security", icon: "🔐" },
  { name: "Databases", icon: "🗄️" },
  { name: "System Design", icon: "🧩" },
];

export default function TechLearning() {
  return (
    <section className="pt-24">
      <h2 className="text-white text-3xl font-bold text-center mb-10">
        Currently Learning
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {learning.map((item, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-white font-medium">{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
