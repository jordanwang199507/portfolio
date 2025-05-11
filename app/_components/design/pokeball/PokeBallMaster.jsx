import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallMaster = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__master">
      <div className="ball master">
        <div className="decor">
          <div className="decor-top"></div>
          <div className="decor-bottom"></div>
        </div>
        <div className="decor">
          <div className="decor-top"></div>
          <div className="decor-bottom"></div>
        </div>
        <div className="letter">
          <div className="letter-left"></div>
          <div className="letter-left"></div>
          <div className="letter-right"></div>
          <div className="letter-right"></div>
        </div>
      </div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallMaster;
