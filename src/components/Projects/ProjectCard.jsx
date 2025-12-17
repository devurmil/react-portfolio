import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.15 , 
                    opacity: 0.8, 
                    y: -20, 
                    zIndex: 50,
                    boxShadow: "0 30px 60px rgba(121, 121, 121, 0.4)"
                  }}
      transition={{ type: "spring", stiffness: 300, damping: 18, }}
      className="
        relative
        z-10
        w-[260px] md:w-[380px]
        h-[100vh/4]
        hover:mx-8
        duration-100
        bg-white/20 backdrop-blur-xl
        border border-white/30
        rounded-2xl p-4
        cursor-pointer
        flex flex-col
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full rounded-xl overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="mt-3 flex-1">
        <h3 className="text-lg text-gray-100 font-semibold line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-100 opacity-80 line-clamp-2 mt-1">
          {project.shortDesc}
        </p>
        <p className="text-sm text-gray-100 opacity-80 line-clamp-2 mt-1">
          Click for more Details....
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
