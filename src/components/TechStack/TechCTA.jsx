import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TechCTA() {
  return (
    <section className="pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
      >
        <h2 className="text-white text-4xl font-bold mb-4">
          Let’s Build Something 🚀
        </h2>
        <p className="text-gray-400 mb-8">
          I enjoy building modern, animated, and scalable web applications.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
