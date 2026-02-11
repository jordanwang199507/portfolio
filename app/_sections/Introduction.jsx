"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { OnePieceJolly, PokeBallPark } from "../_components/design";
import { useLanguage } from "../_context/LanguageContext";

const Introduction = () => {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id="introduction"
      className="pt-36 pb-40 relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="global-container ">
        <OnePieceJolly position="background" />

        <div className="max-w-3xl ml-[15%] max-xl:ml-[10%] max-lg:mx-auto relative z-10">
          <div className="flex w-full items-center gap-4 max-sm:gap-2">
            <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl text-foreground">
              01.
            </h2>

            <h2
              className={`font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl w-1/3`}
            >
              {lang === "zh-TW" ? "自我介紹" : "Introduction"}
            </h2>

            <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
          </div>

          <p className="leading-10 max-sm:leading-8 mt-6 text-base text-secondary max-md:text-sm font-red-hat font-light">
            {lang === "zh-TW"
              ? "具備中英文雙語能力的前端工程師，擁有兩年以上使用 JavaScript、HTML、CSS 開發可用性高且具無障礙考量的使用者介面的經驗。擅長問題解決與團隊協作，並能交付易維護、重視效能的程式碼，提升整體使用體驗與可及性。"
              : "Bilingual front-end developer fluent in English and Mandarin, with over two years of experience developing accessible, high-quality user interfaces using JavaScript, HTML, and CSS. Skilled in problem-solving, collaboration, and delivering maintainable, performance-focused code that enhances usability and accessibility."}
          </p>

          <div className="mt-8">
            <h4 className="text-lg max-md:text-base text-foreground font-red-hat font-light">
              {lang === "zh-TW"
                ? "近期常用技術："
                : "Technologies I’ve been working with lately:"}
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
    </motion.section>
  );
};

export default Introduction;
