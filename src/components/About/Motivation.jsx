import { motion } from "framer-motion";

const items = [
  { title: "Problem Solving", desc: "Breaking complex problems into simple solutions." },
  { title: "Clean UI", desc: "Designing intuitive and accessible interfaces." },
  { title: "Performance", desc: "Optimizing for speed and scalability." },
  { title: "Learning", desc: "Continuously improving skills and knowledge." },
];

function Motivation() {
  return (
    <section className="py-10">
      <h2 className="text-gray-300 text-3xl font-bold mb-12 text-left">What Drives Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="transform-gpu bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-gray-300 text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Motivation;
