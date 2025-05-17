"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { careers } from "../_constants";
import { PokeBallPark } from "../_components/design";

const Career = () => {
  const [selectedCareerId, setSelectedCareerId] = useState(
    careers[careers.length - 1].id
  );
  const selectedCareer = careers.find(
    (career) => career.id === selectedCareerId
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id="career"
      className="relative"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="global-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex w-full items-center gap-4 max-sm:gap-2">
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl  text-foreground">
              02.
            </h2>
            <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl  text-nowrap">
              Career Overview
            </h2>
            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </div>

          <div className="flex mt-7 pl-[5%] max-lg:pl-0 max-md:flex-col max-md:gap-4">
            {/* display row of careers.company on the left (reverse order, starting last) */}
            <div className="flex flex-col w-[260px] max-lg:w-[220px] shrink-0 max-md:flex-row max-md:w-full max-md:overflow-x-auto max-md:text-nowrap max-md:mb-4 custom-scroll">
              {careers
                .slice()
                .reverse()
                .map((career) => (
                  <div
                    key={career.id}
                    onClick={() => setSelectedCareerId(career.id)}
                    className={`text-left box-border font-nippo-light text-base max-lg:text-sm max-md:text-xs cursor-pointer px-6 py-4 max-lg:px-4 max-lg:py-2 border-l-[3px] max-md:border-l-0 max-md:border-b-[3px] ${
                      selectedCareerId === career.id
                        ? " border-foreground text-foreground "
                        : "text-career-secondary border-career"
                    } hover:bg-career hover:text-foreground transition leading-10`}
                  >
                    {career.company}
                  </div>
                ))}
            </div>
            {/* display more detail view of the career (based on what is selected on the left), info display will be career.position, etc */}
            <div className="flex-grow pl-7 max-lg:pl-4 max-md:pl-0">
              <div className="flex gap-4 max-lg:gap-2 items-center max-sm:flex-col max-sm:items-start max-sm:gap-0">
                <h3 className="font-red-hat font-black text-xl max-lg:text-lg leading-16 max-sm:leading-12">
                  {selectedCareer.position}
                </h3>
                <div className="font-red-hat font-black text-foreground text-xl max-lg:text-lg ">
                  {selectedCareer.tag}
                </div>
              </div>
              <div className="flex items-center font-nippo-light text-base max-sm:text-sm leading-8 gap-4">
                <div className="text-foreground">
                  {selectedCareer.startDate} - {selectedCareer.endDate}
                </div>
                <div className="text-font">{selectedCareer.companyStatus}</div>
              </div>
              <ul className="flex gap-6 flex-col mt-6">
                {selectedCareer.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex justify-start">
                      <PokeBallPark />
                    </div>
                    <p className="font-red-hat font-light text-base max-md:text-sm  text-secondary leading-8">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Career;
