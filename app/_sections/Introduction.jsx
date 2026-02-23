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
              ? "具備 4+ 年 Web 平台開發與企業系統整合經驗，專注於系統架構設計與技術整合。熟悉 API 設計、AWS 雲端部署、效能優化，並能將複雜需求拆解為可擴充且具落地性的解決方案。擅長進行技術探索（Technical Discovery）、PoC 驗證開發，以及協調跨部門團隊以確保技術方案與商業目標一致。具中英雙語溝通能力，能進行客戶面對面技術說明與需求釐清。期望於技術解決方案、系統整合或技術架構相關職位中，發揮連結工程與商業價值的能力。"
              : "Systems-minded engineer with 4+ years of experience in developing and integrating web platforms and enterprise systems. Experienced in API design, cloud deployment (AWS), performance optimization, and breaking down complex requirements into scalable solutions. Proficient in technical discovery, developing Proof-of-Concept demos, and aligning cross-functional teams with business outcomes. Bilingual in English and Mandarin, with experience in customer-facing communication and technical explanation. Looking to apply skills in Technical Solutions, System Integration, or Technical Architect positions that connect engineering and business."}
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
