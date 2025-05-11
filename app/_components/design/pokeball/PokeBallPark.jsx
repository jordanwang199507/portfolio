import React from "react";
import "@/app/styles/pokeball.css";

const PokeBallPark = ({ location }) => {
  return (
    <div className={`icon__pokeball ${location === "nav" ? "nav__icon" : ""}`}>
      <div className="ball park"></div>
      <div className="park-center"></div>
    </div>
  );
};

export default PokeBallPark;
