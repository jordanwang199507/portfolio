import React from "react";
import "@/app/styles/pokemonSnivy.css";

const PokemonSnivy = ({ position }) => {
  return (
    <div
      className={`${
        position === "hero"
          ? "canvas canvas__pokemon snivy-theme--hero"
          : "canvas__css snivy-theme--cssCard"
      }`}
    >
      <div className="snivy container">
        <div className="snivy head">
          <div className="snivy head-decor"></div>
          <div className="snivy-eye-decor"></div>
          <div className="snivy-eye-decor"></div>

          <div className="snivy-eye">
            <div className="snivy-eye-pupil left">
              <div className="snivy-eye-glare"></div>
            </div>
            <div className="snivy-eye-eyebrow left"></div>
          </div>

          <div className="snivy-eye">
            <div className="snivy-eye-pupil right">
              <div className="snivy-eye-glare"></div>
            </div>
            <div className="snivy-eye-eyebrow right"></div>
          </div>
        </div>
      </div>
      <div className="snivy-body">
        <div className="snivy-innerbody"></div>
      </div>
      <div className="snivy-whip"></div>
      <div className="snivy-whip"></div>
    </div>
  );
};

export default PokemonSnivy;
