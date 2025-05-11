import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallTimer = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__timer">
      <div className="pokeball timer">
        <div className="pokeball-top">
          <div className="timer-decor"></div>
        </div>
        <div className="decor"></div>
        <div className="decor"></div>
        <div className="pokeball-center"></div>
        <div className="pokeball-bottom"></div>
      </div>
      <div className="timer-topArrow"></div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallTimer;
