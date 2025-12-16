import { motion } from "framer-motion";

const skills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
];

function SoftSkills() {
  return (
    <section className="pt-5 pb-10 text-center">
      <h2 className="text-gray-200 text-3xl font-bold mb-10">Soft Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50, y: -60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="transform-gpu text-gray-400 px-5 py-2 rounded-full bg-white/10 border border-white/10"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SoftSkills;