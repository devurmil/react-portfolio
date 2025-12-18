import { motion } from "framer-motion";

export default function AppleBootText({ text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(12px)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        maskImage:
          "linear-gradient(90deg, black 0%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, black 0%, black 100%)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Apple-like easing
      }}
      className="text-4xl md:text-5xl font-semibold mx-auto mb-6 left-1/2 text-white text-center"
    >
      {text}
    </motion.div>
  );
}
