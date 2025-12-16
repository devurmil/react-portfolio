import { motion } from "framer-motion";

function PersonalTouch() {
  return (
    <section className="flex pt-5 pb-24 justify-center text-center">
      <h2 className="text-gray-200 text-3xl font-bold mb-6">Beyond Coding : </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-400 w-1/2"
      >
        When I’m not coding, I enjoy drawing, bike riding, watching movies,
        and exploring peaceful sunset viewpoints.
      </motion.p>
    </section>
  );
}

export default PersonalTouch;
