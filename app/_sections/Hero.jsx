"use client";
import React, { useEffect, useState } from "react";
import { AnimatedParallax } from "../_components";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "../_context/LanguageContext";

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
  const { lang } = useLanguage();

  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);

  useEffect(() => {
    // reset first (important)
    setShowLine1(false);
    setShowLine2(false);
    setShowLine3(false);

    // replay the animation every time language changes
    const timeout1 = setTimeout(() => setShowLine1(true), 200);
    const timeout2 = setTimeout(() => setShowLine2(true), 200 + 900);
    const timeout3 = setTimeout(() => setShowLine3(true), 200 + 900 + 1400);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [lang]);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative min-h-fit max-lg:h-screen max-lg:pt-0 max-lg:mt-0"
    >
      <div className="relative flex-1/8 min-h-fit flex pt-20">
        <div className="global-container w-full flex items-center overflow-hidden">
          <AnimatedParallax
            delay={6}
            className="absolute bottom-[55%] max-sm:bottom-[70%] 2xl:left-[8%]"
          >
            <PokeBallRegular />
          </AnimatedParallax>

          <AnimatedParallax
            delay={6}
            className="absolute right-[25%] bottom-[35%] rotate-[15deg] max-sm:bottom-[25%] scale-90"
          >
            <PokeBallUltra />
          </AnimatedParallax>

          <motion.div
            className="flex flex-col gap-3 px-[12%] max-sm:px-[2%] relative w-full pt-7 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <p className="font-red-hat font-medium text-lg max-md:text-base text-foreground">
              {showLine1 && (
                <Typewriter
                  key={`hero-line1-${lang}`}
                  words={[lang === "zh-TW" ? "嗨，我是" : "Hi, my name is"]}
                  typeSpeed={50}
                  loop={1}
                  cursorBlinking={false}
                />
              )}
            </p>

            <h1 className="font-red-hat font-bold text-5xl max-2xl:text-4xl max-md:text-3xl max-sm:text-2xl">
              {showLine2 && (
                <Typewriter
                  key={`hero-line2-${lang}`}
                  words={[lang === "zh-TW" ? "王譽霖" : "Jordan (Yu-Lin) Wang"]}
                  typeSpeed={50}
                  loop={1}
                  cursorBlinking={false}
                />
              )}
            </h1>

            <h1 className="font-red-hat font-bold text-5xl max-2xl:text-4xl max-md:text-3xl max-sm:text-2xl text-secondary">
              {showLine3 && (
                <Typewriter
                  key={`hero-line3-${lang}`}
                  words={[
                    lang === "zh-TW"
                      ? "把想法變成流暢又有互動感的網站體驗。"
                      : "Turning ideas into interactive web experiences.",
                  ]}
                  typeSpeed={50}
                  loop={1}
                  cursorBlinking={false}
                />
              )}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="flex-grow bg-foreground overflow-hidden">
        <div className="global-container relative h-full flex flex-col justify-between">
          <AnimatedParallax
            delay={6}
            className="h-[6.5vmin] w-[6.5vmin] rotate-[10deg] max-md:scale-85 absolute top-[25vmin] left-[2vmin]"
          >
            <PokeBallGreat />
          </AnimatedParallax>

          <AnimatedParallax
            delay={6}
            className="absolute left-[25%] top-[15%] scale-75 max-md:bottom-[25%] max-md:top-auto max-md:left-[10%]"
          >
            <PokeBallMaster />
          </AnimatedParallax>

          <AnimatedParallax
            delay={6}
            className="absolute right-[5%] bottom-[35%] rotate-[25deg]"
          >
            <PokeBallSafari />
          </AnimatedParallax>

          <AnimatedParallax
            delay={6}
            className="absolute right-[20%] top-[30%] max-md:right-[20%]"
          >
            <PokeBallTimer />
          </AnimatedParallax>

          <div className="marquee">
            <div className="carousel">
              <div className="carousel__inner text-background font-clash-bold">
                {[...Array(3)].flatMap((_, i) => [
                  <div className="item" key={`web-${lang}-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl tracking-wide font-bold">
                      {lang === "zh-TW" ? "網頁工程師" : "WEB DEVELOPER"}
                    </p>
                  </div>,
                  <div className="item" key={`frontend-${lang}-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl font-bold">
                      {lang === "zh-TW" ? "前端工程師" : "FRONT END DEVELOPER"}
                    </p>
                  </div>,
                  <div className="item" key={`rookie-${lang}-${i}`}>
                    <p className="text-[32px] max-md:text-[28px] max-sm:text-2xl font-bold">
                      {lang === "zh-TW" ? "新手設計師" : "ROOKIE DESIGNER"}
                    </p>
                  </div>,
                ])}
              </div>
            </div>
          </div>

          <ChibiMe />

          <div className="flex w-3xl max-lg:w-full">
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 7,
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
              }}
            >
              <PokemonOshawott position="hero" />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 7.2,
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
              }}
            >
              <PokemonSnivy position="hero" />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 7.4,
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
              }}
            >
              <PokemonTepig position="hero" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
