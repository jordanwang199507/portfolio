"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Owl } from "../_components/design";
import GitHubSvg from "@/public/assets/svg/GitHubSvg";
import LinkedInSvg from "@/public/assets/svg/LinkedInSvg";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  return (
    <section id="footer" className="relative overflow-hidden" ref={ref}>
      <div className="global-container ">
        <div className="w-full flex items-end justify-around max-sm:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Owl colorSchema="dark" />
          </motion.div>
          <div className="flex flex-col items-center gap-2">
            <div className="max-md:flex gap-6 hidden">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-foreground transition-colors duration-200"
              >
                <GitHubSvg />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-foreground transition-colors duration-200"
              >
                <LinkedInSvg />
              </a>
            </div>
            <p className="pb-5 max-sm:text-xs text-sm font-nippo-light text-font text-center">
              Designed and Built by Jordan (Yu-Lin) Wang
              <br />{" "}
              <span className="text-[10px]">
                Inspired by Brittany Chiang's Portfolio
              </span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <Owl colorSchema="light" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
