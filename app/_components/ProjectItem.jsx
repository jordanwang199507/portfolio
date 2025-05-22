"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import GitHubSvg from "@/public/assets/svg/GitHubSvg";
import LinkSvg from "@/public/assets/svg/LinkSvg";
const ProjectItem = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className=" relative grid gap-[10px] grid-cols-12 items-center h-[380px] max-md:h-auto"
    >
      {/* image */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group project-image rounded-lg flex items-center max-md:shadow-sm/20 max-md:shadow-amber-300 transition-all duration-200 ${
          index % 2 !== 1
            ? "col-start-1 col-end-8 max-md:col-end-[-1]"
            : "col-start-6 col-end-[-1] max-md:col-start-1"
        }`}
      >
        <div className="image-cover relative w-full h-full max-lg:h-0 p-40 max-md:h-full max-md:p-0 mix-blend-darken contrast-100 brightness-100 max-md:opacity-30 ">
          <Image
            src={project.image}
            alt={`${project.name} thumbnail`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </a>
      {/* content */}
      <div
        className={`relative row-start-1 row-end-[-1] max-md:z-10 max-md:h-full max-md:flex max-md:flex-col max-md:justify-center max-md:rounded-lg max-md:p-8 transition-all duration-300 ${
          index % 2 !== 1
            ? "col-start-6 col-end-[-1] max-lg:col-start-4 max-md:col-start-1 text-right max-md:text-left"
            : "col-start-1 col-end-8 max-lg:col-end-10 max-md:col-end-[-1] text-left"
        }`}
      >
        <p className="text-sm text-foreground font-nippo-light">
          {project.type}
        </p>
        <h3 className="font-red-hat font-black text-3xl max-md:text-2xl mt-2 z-[3] relative">
          {project.github ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-foreground transition-colors duration-200"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <div className="z-[3] min-h-44 relative p-10 max-lg:px-7 max-lg:py-8 bg-background-description max-md:bg-transparent max-md:p-0 max-md:min-h-0 rounded-lg mt-6 leading-8 font-nippo-regular text-sm">
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div
          className={`z-[3] relative flex gap-4 mt-4 max-md:justify-start max-md:mt-8 max-md:flex-wrap ${
            index % 2 !== 1 ? "justify-end" : "justify-start"
          }`}
        >
          {project.tools.map((tool, i) => (
            <p key={i} className="text-sm font-nippo-light text-tertiary">
              {tool}
            </p>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center mt-4 max-md:justify-start ${
            index % 2 !== 1 ? "justify-end" : "justify-start"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-foreground transition-colors duration-200"
            >
              <GitHubSvg />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-foreground transition-colors duration-200"
            >
              <LinkSvg />
            </a>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectItem;
