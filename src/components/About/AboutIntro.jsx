import { motion } from "framer-motion";

function AboutIntro() {
  return (
    <section className="pt-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-white text-5xl font-bold mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        I’m Urmil Ramani, a React.js intern passionate about building clean,
        scalable, and user-focused web applications. I enjoy turning ideas
        into interactive digital experiences while continuously learning
        modern technologies.
      </motion.p>
    </section>
  );
}

export default AboutIntro;
