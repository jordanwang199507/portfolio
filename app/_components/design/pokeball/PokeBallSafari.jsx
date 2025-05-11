import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallSafari = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__safari">
      <div className="pokeball safari">
        <div className="pokeball-top">
          <div className="decor"></div>
          <div className="decor"></div>
        </div>
        <div className="pokeball-center"></div>
        <div className="pokeball-bottom"></div>
      </div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallSafari;
