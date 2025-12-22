import { motion } from "framer-motion";

const techs = [ 
  { 
    name: "HTML5",
    icon: "/src/assets/icons/html.png",
    desc: "Markup language to structure web content.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS3",
    icon: "/src/assets/icons/css.png",
    desc: "Stylesheet language for designing web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "JavaScript",
    icon: "/src/assets/icons/javascript.png",
    desc: "Core language for frontend and backend development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "React",
    icon: "/src/assets/icons/react.png",
    desc: "A powerful library for building interactive UIs.",
    link: "https://react.dev/"
  },
  {
    name: "Node.js",
    icon: "/src/assets/icons/node.png",
    desc: "JavaScript runtime for building scalable backend applications. - currently Learning",
    link: "https://nodejs.org/"
  },
  {
    name: "Vite",
    icon: "/src/assets/icons/vite.png",
    desc: "Fast frontend build tool and dev server.",
    link: "https://vite.dev/"
  },
  {
    name: "GitHub",
    icon: "/src/assets/icons/github.png",
    desc: "Platform for version control and collaboration.",
    link: "https://github.com/devurmil"
  },
  {
    name: "Tailwind CSS",
    icon: "/src/assets/icons/tailwind.png",
    desc: "Utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com/"
  },
  {
    name: "MySQL",
    icon: "/src/assets/icons/mysql.png",
    desc: "Relational database for structured data storage.",
    link: "https://www.mysql.com/"
  },
  {
    name: "VsCode",
    icon: "/src/assets/icons/vscode.png",
    desc: "Code editor for writing and debugging code.",
    link: "https://code.visualstudio.com/"
  },
];

export default function TechHeader() {
  return (
    <section className="p-8 pt-16 max-w-7xl mx-auto">
      <motion.h2 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.6 }}
      viewport={{ once: true }}
      className="transform-gpu text-4xl text-center font-bold text-gray-200 mb-2"
      >My Tech Stack</motion.h2>
      <motion.p 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.6 }}
      viewport={{ once: true }}
      className="transform-gpu text-gray-300 text-center mb-8"
      >Tools, frameworks, and languages I use</motion.p>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techs.map((tech, index) => (
          <motion.a
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.25)" }}
            href={tech.link}
            target="_blank"
            className="transform-gpu bg-white/20 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer"
          >
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3" />
            <h3 className="text-gray-100 font-semibold text-lg mb-1">{tech.name}</h3>
            <p className="text-gray-300 text-sm text-center">{tech.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
