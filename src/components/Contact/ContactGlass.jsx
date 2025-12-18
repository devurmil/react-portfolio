import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Notification({ message, type, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
      <button className="ml-3 font-bold" onClick={onClose}>×</button>
    </motion.div>
  );
}

export default function ContactGlass() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!isValidEmail(form.email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            setLoading(true);

            const API_URL =
                import.meta.env.DEV
                ? "http://localhost:1080/api/contact"
                : "/api/contact";

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong. Try again." );
            }

            setForm({ name: "", email: "", message: "" });
            setNotification({ type: "success", message: "Message sent successfully ✅" });
        } catch (err) {
            setNotification({ type: "error", message: err.message});
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <section className="flex items-center justify-center mt-20">
          {/* Container for Left and Right */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-7xl">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="my-auto items-center"
          >
            <h2 className="text-4xl text-gray-200 font-semibold mb-4">
                Got a project in mind?
            </h2>
            <p className="opacity-80 max-w-md text-gray-200">
                I’m always open to discussing new ideas, creative work,
                or opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y:40}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-xl rounded-2xl bg-white/20 backdrop-blur-xl 
                        border border-white/30 shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl bg-white/30 px-4 py-3 outline-none
                                focus:ring-2 focus:ring-white/60 transition"
                />
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl bg-white/30 px-4 py-3 outline-none
                                focus:ring-2 focus:ring-white/60 transition resize-none"
                />
                <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full rounded-xl bg-white/30 px-4 py-3 outline-none
                                focus:ring-2 focus:ring-white/60 transition resize-none"
                />

                {error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}

                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                    className="w-1/2 rounded-xl bg-black text-white py-3 font-medium"
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>
            </form>
          </motion.div>  
          </div>

          {/* Notifications */}
          <AnimatePresence>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
          </AnimatePresence>
        </section>
        </>
    );
}