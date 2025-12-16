import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="pt-5 pb-28 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-200 text-4xl font-bold mb-6"
      >
        Let’s Build Something Together
      </motion.h2>

      <p className="text-gray-400 mb-8">
        Open to opportunities, collaborations, and learning experiences.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold"
      >
        You can find me here 🤙🏻
      </Link>
    </section>
  );
}

export default AboutCTA;
