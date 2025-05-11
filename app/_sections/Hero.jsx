import React from "react";
import {} from "../_components";

import {
  ChibiMe,
  PokeBallGreat,
  PokeBallRegular,
  PokeBallMaster,
  PokeBallUltra,
  PokemonOshawott,
  PokemonSnivy,
  PokemonTepig,
  PokeBallSafari,
  PokeBallTimer,
} from "../_components/design";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" h-screen flex flex-col relative min-h-fit max-lg:h-screen max-lg:pt-0 max-lg:mt-0"
    >
      <div className="relative flex-1/8 min-h-fit flex pt-20">
        <div className="global-container w-full flex items-center">
          <PokeBallRegular />
          <PokeBallUltra />
          <div className="flex flex-col gap-3 px-[12%] max-sm:px-[2%] relative w-full pt-7 pb-8">
            <p className="font-red-hat font-medium text-lg max-md:text-base text-foreground">
              Hi, my name is
            </p>
            <h1 className="font-red-hat font-bold text-5xl max-2xl:text-4xl max-md:text-3xl max-sm:text-2xl">
              Jordan &#40;Yu-Lin&#41; Wang
            </h1>
            <h1 className="font-red-hat font-bold text-5xl max-2xl:text-4xl max-md:text-3xl max-sm:text-2xl text-secondary">
              I create stuff for websites
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-foreground">
        <div className="global-container relative h-full flex flex-col justify-between">
          <PokeBallGreat />
          <PokeBallMaster />
          <PokeBallSafari />
          <PokeBallTimer />
          <div className="marquee">
            <div className="carousel">
              <div className="carousel__inner text-background font-clash-bold">
                {[...Array(3)].flatMap((_, i) => [
                  <div className="item" key={`web-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl tracking-wide font-bold">
                      WEB DEVELOPER
                    </p>
                  </div>,
                  <div className="item" key={`frontend-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl font-bold">
                      FRONT END DEVELOPER
                    </p>
                  </div>,
                  <div className="item" key={`rookie-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl font-bold">
                      ROOKIE DESIGNER
                    </p>
                  </div>,
                ])}
              </div>
            </div>
          </div>

          <ChibiMe />
          <div className="flex w-3xl max-lg:w-full">
            <PokemonOshawott position={"hero"} />
            <PokemonSnivy position={"hero"} />
            <PokemonTepig position={"hero"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
