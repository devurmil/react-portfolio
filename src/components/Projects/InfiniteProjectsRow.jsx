import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const SPEED = 60;

export default function InfiniteProjectsRow({ projects, onSelect }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const animationRef = useRef(null);
  // const lastPosition = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const startAnimation = () => {
    const content = contentRef.current;
    if (!content) return;

    const distance = isMobile
      ? content.scrollHeight / 2
      : content.scrollWidth / 2;

    const current = isMobile ? y.get() : x.get();
    const remaining = distance + current; // negative value

    const duration = Math.abs(remaining) / SPEED;

    animationRef.current = animate(
      isMobile ? y : x,
      -distance,
      {
        duration,
        ease: "linear",
        onComplete: () => {
          (isMobile ? y : x).set(0);
          startAnimation();
        },
      }
    );
  };

  useEffect(() => {
    startAnimation();
    return () => animationRef.current?.stop();
  }, [isMobile]);

  const pause = () => animationRef.current?.stop();
  const resume = () => startAnimation();

  const snapToCenter = (el, project) => {
    pause();

    const container = containerRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    const offset = isMobile
      ? rect.top - container.top - container.height / 2 + rect.height / 2
      : rect.left - container.left - container.width / 2 + rect.width / 2;

    animate(isMobile ? y : x, (isMobile ? y.get() : x.get()) - offset, {
      duration: 0.4,
      ease: "easeOut",
    });

    setTimeout(() => {
        onSelect(project);
        resume();
    }, 400);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden sm:overflow-visible relative h-[360px] md:h-[100vh/3] "
    >
      {/* LEFT / TOP FADE */}
        <div
          className={`
            pointer-events-none absolute z-30
            ${isMobile
              ? "top-0 left-0 h-14 w-full bg-gradient-to-b from-black opacity-30 to-transparent"
              : "top-0 left-0 w-28 h-full bg-gradient-to-r from-black opacity-60 to-transparent"}
          `}
        />

        {/* RIGHT / BOTTOM FADE */}
        <div
          className={`
            pointer-events-none absolute z-30
            ${isMobile
              ? "bottom-0 left-0 h-14 w-full bg-gradient-to-t from-black opacity-30 to-transparent"
              : "top-0 right-0 w-28 h-full bg-gradient-to-l from-black opacity-60 to-transparent"}
          `}
        />
      <motion.div
        ref={contentRef}
        style={{ x: isMobile ? 0 : x, y: isMobile ? y : 0 }}
        className={`flex gap-6 ${isMobile ? "flex-col" : "flex-row"} w-max mx-auto`}
        onMouseEnter={!isMobile ? pause : undefined}
        onMouseLeave={!isMobile ? resume : undefined}
      >
        {[...projects, ...projects].map((project, i) => (
          <div
            key={i}
            onClick={(e) => snapToCenter(e.currentTarget, project)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
