import { motion } from "framer-motion";

const EmptyState = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-20 mt-32 bg-gradient-to-b from-gray-900 to-transparent flex flex-col items-center text-center opacity-80"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-5xl mb-4"
      >
        🚧
      </motion.div>

      <h2 className="text-gray-200 text-3xl font-semibold">
        More Projects Coming Soon
      </h2>

      <p className="max-w-md text-gray-300 mt-3 text-l">
        I’m currently working on new ideas and improving existing projects.
        Stay tuned for updates!
      </p>
    </motion.section>
  );
};

export default EmptyState;
