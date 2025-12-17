import { motion } from "framer-motion";

const ProjectsCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-36 bg-gradient-to-t from-gray-900 to-transparent text-center"
    >
      <h2 className="text-3xl text-gray-200 font-bold">
        Interested in working together?
      </h2>

      <p className="mt-3 opacity-80 text-gray-300">
        Let’s build something meaningful 🚀
      </p>

      <div className="flex justify-center gap-4 mt-8 pb-25">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="px-6 py-3 hover:text-black rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-lg
                     border border-white/40 duration-400"
        >
          I'm Always Here →
        </motion.a>
      </div>
    </motion.section>
  );
};

export default ProjectsCTA;
