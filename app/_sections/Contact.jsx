"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PokeBallPark } from "../_components/design";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id="contact"
      className="pt-32 pb-32 relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="global-container">
        <div className="w-full relative z-10">
          <div className="flex max-w-2xs mx-auto items-center gap-4 max-sm:gap-2">
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
              05.
            </h2>
            <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl">
              Contact
            </h2>
            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </div>

          <h1 className="text-center font-red-hat font-black text-5xl max-md:text-3xl text-tertiary mt-6">
            Connect With Me
          </h1>
          <p className="max-w-2xl mx-auto text-center font-red-hat text-base max-md:text-sm leading-8 font-light text-secondary mt-8">
            I'm currently open to new opportunities—whether it's a full-time
            role, freelance project, or collaboration. If you have a question, a
            project in mind, or just want to connect, feel free to reach out. My
            inbox is always open.
          </p>

          <div className="flex justify-center mt-12">
            <div className="group relative w-fit inline-block">
              <a
                className="relative flex items-center bg-background justify-center z-50 border-2 border-foreground py-2 pl-2 pr-4 rounded-lg  w-fit transition-transform duration-200 group-hover:-translate-y-[5px] group-hover:-translate-x-1 cursor-pointer text-md max-md:text-sm group-active:-translate-y-[1px] group-active:-translate-x-0.5 group-active:inset-ring-2 group-active:inset-ring-foreground"
                href="mailto:jordanwang1995@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PokeBallPark location={"nav"} />
                Send a Message
              </a>
              <div className="absolute inset-0 z-10 border border-foreground bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
