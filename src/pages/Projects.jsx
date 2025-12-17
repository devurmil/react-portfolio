import { useState } from "react";
import projects from "../helper/ProjectsData";
import ProjectModal from "../components/Projects/ProjectModal";
import { AnimatePresence } from "framer-motion";
import InfiniteProjectsRow from "../components/Projects/InfiniteProjectsRow";
import EmptyState from "../components/Projects/EmptyState";
import ProjectsCTA from "../components/Projects/ProjectsCTA";
import PageWrapper from "../helper/Pagewrapper";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
    <PageWrapper>
      <section className="h-[calc(100vh-200px)] pt-26">
        <div className="text-center pb-15">
          <h1 className="text-7xl md:text-7xl text-gray-200 tracking-tight">
            <span className="opacity-40">My</span> Projects
          </h1>
          <p className="mt-3 opacity-70 text-gray-300">Things I’ve built so far</p>
        </div>



        <InfiniteProjectsRow 
          projects={projects} 
          onSelect={setActiveProject} />
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
      <EmptyState />
      <ProjectsCTA />
    </PageWrapper>
    </>
  );
}
