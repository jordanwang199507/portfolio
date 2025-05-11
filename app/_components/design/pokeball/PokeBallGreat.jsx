import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallGreat = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__great">
      <div className="ball great">
        <div className="decor"></div>
        <div className="decor"></div>
      </div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallGreat;
