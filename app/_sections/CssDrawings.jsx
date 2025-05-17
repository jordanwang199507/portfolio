"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CssCard } from "../_components";
import { cssDrawings } from "../_constants";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CssDrawings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id="css"
      className="pt-36 relative pb-20 max-sm:pb-10 max-md:pt-24"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="csscards-container">
        {/* Header */}
        <div className="flex w-full items-center gap-4 max-sm:gap-2 max-w-4xl mx-auto">
          <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
            04.
          </h2>
          <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl whitespace-nowrap">
            CSS Drawings
          </h2>
          <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {cssDrawings.map((drawing, index) => (
            <motion.div
              key={drawing.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <CssCard
                name={drawing.name}
                htmlPath={drawing.htmlPath}
                cssPath={drawing.cssPath}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CssDrawings;
