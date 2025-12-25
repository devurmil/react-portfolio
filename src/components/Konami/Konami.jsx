import useKonami from "../../hooks/useKonami";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Konami() {
  const { activated, setActivated } = useKonami();
  const modalRef = useRef(null);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setActivated(false);
          }
        }}
        >
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl text-center"
          ref={modalRef}>
            <h2 className="text-2xl font-semibold mb-3">🎉 You found the secret!</h2>
            <button 
            onClick={() => setActivated(false)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >Close</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Konami;
