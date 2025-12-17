import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={e => e.stopPropagation()}
        className="bg-white/20 backdrop-blur-2xl border border-white/30
                  text-gray-200 rounded-2xl p-6 max-w-xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide"
      >
          <h3 className="font-semibold mt-4">Description:</h3>
          <p className="opacity-80">{project.description}</p>

          <h3 className="font-semibold mt-4">Key Features</h3>
          <ul className="list-disc text-gray-300 pl-5 space-y-1">
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h3 className="font-semibold mt-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(t => (
              <span key={t} className="px-3 py-1 bg-white/30 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-semibold mt-4">Future Enhancements</h3>
          <ul className="list-disc text-gray-300 pl-5">
            {project.futureEnhancements.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <div className="flex justify-center gap-2">
            {project.liveLink && (
              <button
                onClick={() => window.open(project.liveLink, "_blank")}
                className="mt-6 px-4 py-2 text-gray-300 rounded-xl bg-gray-600 hover:bg-gray-700 duration-300 hover:text-white"
              >
                🔗 Live Link
              </button>
            )}
            
            {project.githubLink && (
              <button
                onClick={() => window.open(project.githubLink, "_blank")}
                className="mt-6 px-4 py-2 text-gray-300 rounded-xl bg-gray-600 hover:bg-gray-700 duration-300 hover:text-white"
              >
               🔗 Github Link
              </button>
            )}
          </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 text-gray-100 rounded-xl bg-white/30"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
