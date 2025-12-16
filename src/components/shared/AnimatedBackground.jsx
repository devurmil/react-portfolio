import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Diagonal illusion
  const x = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
    <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none">
      
      {/* Top bubble */}
      <motion.div
        className="absolute top-[-60px] left-[-60px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        style={{ x, y }}
      />

      {/* Bottom bubble (stronger movement) */}
      <motion.div
        className="absolute bottom-[-500px] right-[-50px] w-[28rem] h-[28rem] bg-blue-600/25 rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, 160]),
          y: useTransform(scrollYProgress, [0, 1], [0, -260]),
        }}
      />
    </div>
      {/* <motion.div
        className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x, y }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-600/20 rounded-full blur-2xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      /> */}
    </>
  );
}

export default AnimatedBackground;
