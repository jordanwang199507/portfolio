"use client";
import svg from "@/public/assets";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { F1 } from "../_components/design";

const ToolsCarousel = () => {
  const f1Ref = useRef(null);
  const isInView = useInView(f1Ref, { once: true, margin: "-100px 0px" });
  const [startF1, setStartF1] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartF1(true);
    }
  }, [isInView]);
  return (
    <section className="pt-20 flex gap-4 flex-col relative h-fit">
      <div ref={f1Ref} className="w-full h-32 relative overflow-hidden">
        {startF1 && (
          <>
            <F1 team="redbull" position={"1"} delay="0s" />
            <F1 team="mclaren" position={"2"} delay="1s" />
            <F1 team="ferrari" position={"3"} delay="1.5s" />
            <F1 team="sauber" position={"4"} delay="3s" />
          </>
        )}
      </div>
      <div className="carousel">
        <div className="carousel__tools__inner carousel__reverse">
          {[...Array(7)].flatMap((_, i) => [
            <div className="carousel__tools__item" key={`toolsLogo1-${i}`}>
              <img src={svg.javascript} alt="logo javascript" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                JavaScript
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo2-${i}`}>
              <img src={svg.next} alt="logo next" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                Next.js
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo3-${i}`}>
              <img src={svg.react} alt="logo react" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                React
              </p>
            </div>,
          ])}
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__tools__inner ">
          {[...Array(6)].flatMap((_, i) => [
            <div className="carousel__tools__item" key={`toolsLogo1-${i}`}>
              <img src={svg.tailwind} alt="logo tailwind" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                Tailwind CSS
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo2-${i}`}>
              <img src={svg.sass} alt="logo sass" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                SASS
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo3-${i}`}>
              <img src={svg.css} alt="logo css" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                CSS
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo4-${i}`}>
              <img src={svg.html} alt="logo html" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                HTML
              </p>
            </div>,
          ])}
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__tools__inner carousel__reverse">
          {[...Array(6)].flatMap((_, i) => [
            <div className="carousel__tools__item" key={`toolsLogo1-${i}`}>
              <img src={svg.three} alt="logo three js" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                Three.js
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo2-${i}`}>
              <img src={svg.blender} alt="logo blender" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                Blender
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo3-${i}`}>
              <img src={svg.figma} alt="logo figma" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                Figma
              </p>
            </div>,
            <div className="carousel__tools__item" key={`toolsLogo4-${i}`}>
              <img src={svg.gsap} alt="logo gsap" />
              <p className="font-red-hat text-3xl max-lg:text-2xl max-md:text-xl tracking-wide text-nowrap">
                GSAP
              </p>
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
