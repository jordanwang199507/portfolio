"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../_constants";
import { ProjectItem } from "../_components";

const Projects = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="pt-36 relative pb-10" id="projects">
      <div className="global-container">
        <div className="mx-auto max-w-5xl">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-full items-center gap-4 max-sm:gap-2 max-w-4xl mx-auto"
          >
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
              03.
            </h2>
            <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl text-nowrap">
              Things I've Built
            </h2>
            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </motion.div>

          {/* projects list */}
          <ul className="flex gap-20 flex-col mt-20 max-md:gap-8 max-md:mt-15">
            {projects.map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
