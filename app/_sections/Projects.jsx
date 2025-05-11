import React from "react";
import { projects } from "../_constants";
import Image from "next/image";
import GitHubSvg from "@/public/assets/svg/GitHubSvg";
import LinkSvg from "@/public/assets/svg/LinkSvg";

const Projects = () => {
  return (
    <section className="pt-36 relative pb-10">
      <div className="global-container">
        <div className="mx-auto max-w-5xl">
          <div className="flex w-full items-center gap-4 max-sm:gap-2 max-w-4xl mx-auto">
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
              03.
            </h2>
            <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl text-nowrap">
              Things I've Built
            </h2>
            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </div>

          {/* projects */}
          <ul className="flex gap-20 flex-col mt-20 max-md:gap-8 max-md:mt-15">
            {projects.map((project, index) => (
              <li
                key={project.id}
                className="group relative grid gap-[10px] grid-cols-12 items-center h-[380px] max-md:h-auto"
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
                        href={project.github}
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
                    <p
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>
                  <div
                    className={`z-[3] relative flex gap-4 mt-4 max-md:justify-start max-md:mt-8 max-md:flex-wrap ${
                      index % 2 !== 1 ? "justify-end" : "justify-start"
                    }`}
                  >
                    {project.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="text-sm font-nippo-light text-tertiary"
                      >
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
