import React from "react";
import { Owl } from "../_components/design";
import GitHubSvg from "@/public/assets/svg/GitHubSvg";
import LinkedInSvg from "@/public/assets/svg/LinkedInSvg";

const Footer = () => {
  return (
    <section id="footer" className="relative overflow-hidden">
      <div className="global-container ">
        <div className="w-full flex items-end max-sm:justify-center">
          <Owl colorSchema="dark" />
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

          <Owl colorSchema="light" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
