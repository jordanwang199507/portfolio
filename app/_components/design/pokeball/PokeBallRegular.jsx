import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallRegular = () => {
  return (
    <div className="canvas canvas__pokeball pokeball__regular pokeball__top">
      <div className="ball"></div>
      <div className="center"></div>
    </div>
  );
};

export default PokeBallRegular;
