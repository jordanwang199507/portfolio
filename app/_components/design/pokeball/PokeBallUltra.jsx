import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallUltra = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__top pokeball__ultra">
      <div className="ball ultra">
        <div className="decor"></div>
        <div className="decor"></div>
        <div className="decor-top"></div>
      </div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallUltra;
