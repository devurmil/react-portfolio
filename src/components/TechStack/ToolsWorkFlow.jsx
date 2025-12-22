import { motion } from "framer-motion";
import githubIcon from "../../assets/icons/github.png";
import vscodeIcon from "../../assets/icons/vscode.png";
import postmanIcon from "../../assets/icons/postman.png";
import figmaIcon from "../../assets/icons/figma.png";
import viteIcon from "../../assets/icons/vite.png";
import linuxIcon from "../../assets/icons/linux.png";

const tools = [
  { name: "Git & GitHub", desc: "Version control & collaboration", icon: githubIcon },
  { name: "VS Code", desc: "Primary development editor", icon: vscodeIcon },
  { name: "Postman", desc: "API testing & debugging", icon: postmanIcon },
  { name: "Figma", desc: "UI reference & layout planning", icon: figmaIcon },
  { name: "Vite / npm", desc: "Fast builds & packages", icon: viteIcon },
  { name: "Linux", desc: "Ubuntu dev environment", icon: linuxIcon },
];

export default function ToolsWorkflow() {
  return (
    <section className="pt-24">
      <h2 className="text-white text-3xl font-bold text-center mb-10">
        Tools & Workflow
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="mx-auto">
              <img src={tool.icon} alt={tool.name} className="w-16 h-16" />
            </div>
            <div className="mx-auto">
              <h3 className="text-white font-semibold text-xl">{tool.name}</h3>
              <p className="text-gray-400 mt-2 text-sm">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
