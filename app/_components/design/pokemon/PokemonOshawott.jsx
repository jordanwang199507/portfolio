import React from "react";
import "@/app/styles/pokemonOshawott.css";

const PokemonOshawott = ({ position }) => {
  return (
    <div
      className={`${
        position === "hero" ? "canvas canvas__pokemon" : "canvas__css"
      }`}
    >
      <div className="oshawott-head">
        <div
          className={`oshawott-ear ${position === "hero" ? "hero" : "css"}`}
        ></div>
        <div
          className={`oshawott-ear ${position === "hero" ? "hero" : "css"}`}
        ></div>

        <div className="oshawott-eye">
          <div className="oshawott-pupil"></div>
          <div className="oshawott-pupil-glare"></div>
        </div>
        <div className="oshawott-eye">
          <div className="oshawott-pupil"></div>
          <div className="oshawott-pupil-glare"></div>
        </div>

        <div className="oshawott-freckles left00"></div>
        <div className="oshawott-freckles left01"></div>
        <div className="oshawott-freckles left02"></div>
        <div className="oshawott-freckles right00"></div>
        <div className="oshawott-freckles right01"></div>
        <div className="oshawott-freckles right02"></div>

        <div className="oshawott-nose">
          <div className="oshawott-nose-glare"></div>
        </div>

        <div className="oshawott-mouth">
          <div className="oshawott-teeth"></div>
          <div className="oshawott-teeth"></div>

          <div className="oshawott-tonuge"></div>
        </div>
      </div>
      <div className="oshawott-clam"></div>
      <div className="oshawott-body">
        <div className="oshawott-body-decor decor00"></div>
        <div className="oshawott-body-decor decor01"></div>
        <div className="oshawott-body-decor decor02"></div>
        <div className="oshawott-body-decor decor03"></div>
      </div>
      <div className="oshawott-arm left-arm"></div>
      <div className="oshawott-arm right-arm"></div>
    </div>
  );
};

export default PokemonOshawott;
