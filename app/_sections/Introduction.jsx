import React from "react";
import { OnePieceJolly, PokeBallPark } from "../_components/design";

const Introduction = () => {
  return (
    <section id="introduction" className="pt-36 pb-40 relative overflow-hidden">
      <div className="global-container ">
        <OnePieceJolly position="background" />
        <div className="max-w-3xl ml-[15%] max-xl:ml-[10%] max-lg:mx-auto relative z-10">
          <div className="flex w-full items-center gap-4 max-sm:gap-2">
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
              01.
            </h2>
            <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl ">
              Introduction
            </h2>
            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </div>
          <p className="leading-10 max-sm:leading-8 mt-6 text-base text-secondary max-md:text-sm font-red-hat font-light">
            Bilingual front-end developer fluent in English and Mandarin, with
            over two years of experience developing accessible, high-quality
            user interfaces using JavaScript, HTML, and CSS. Skilled in
            problem-solving, collaboration, and delivering maintainable,
            performance-focused code that enhances usability and accessibility. 
          </p>

          <div className="mt-8">
            <h4 className="text-lg max-md:text-base text-foreground font-red-hat font-light">
              Technologies I’ve been working with lately:
            </h4>
            <div className="flex flex-col max-w-md mt-4">
              <div className="flex justify-between">
                <div className="flex items-center w-1/2">
                  <PokeBallPark />
                  <p className="font-nippo-light text-base max-lg:text-sm text-font tracking-wide">
                    Sanity CMS
                  </p>
                </div>
                <div className="flex items-center w-1/2">
                  <PokeBallPark />

                  <p className="font-nippo-light text-base max-lg:text-sm text-font tracking-wide">
                    React
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center w-1/2">
                  <PokeBallPark />

                  <p className="font-nippo-light text-base max-lg:text-sm text-font tracking-wide">
                    Next.JS
                  </p>
                </div>
                <div className="flex items-center w-1/2">
                  <PokeBallPark />

                  <p className="font-nippo-light text-base max-lg:text-sm text-font tracking-wide">
                    Three.JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
