import React from "react";
import "@/app/styles/pokemonTepig.css";

const PokemonTepig = ({ position }) => {
  return (
    <div
      className={`${
        position === "hero" ? "canvas canvas__pokemon" : "canvas__css"
      }`}
    >
      <div
        className={`tepig-ear ${position === "hero" ? "hero" : "css"}`}
      ></div>
      <div
        className={`tepig-ear ${position === "hero" ? "hero" : "css"}`}
      ></div>
      <div className="tepig head">
        <div className="tepig-head-pattern">
          <div className="tepig-head-inner-pattern"></div>
        </div>
        <div className="tepig-eye">
          <div className="tepig-pupil"></div>
        </div>
        <div className="tepig-eye">
          <div className="tepig-pupil"></div>
        </div>
        <div className="tepig-nose"></div>
        <div className="tepig-mouth"></div>
      </div>
      <div className="tepig-body"></div>
      <div className="tepig-hand"></div>
      <div className="tepig-hand"></div>
    </div>
  );
};

export default PokemonTepig;
