import React from "react";
import "../../styles/onepiecejolly.css";

const OnePieceJolly = ({ className, position }) => {
  return (
    <div
      className={`${
        position === "pageload"
          ? "canvas__pageload jolly-theme--pageload"
          : position === "css"
          ? "canvas__css"
          : "canvas canvas__jolly jolly-theme--background"
      }  ${className}`}
    >
      <div className="outer-circle">
        <div className="negative-line line01"></div>
        <div className="negative-line line02"></div>
        <div className="negative-line line03"></div>
        <div className="line line01"></div>
        <div className="line line02"></div>
        <div className="line line03"></div>
        <div className="inner-circle">
          <div className="jolly-eye"></div>
          <div className="jolly-eye"></div>
          <div className="jolly-nose"></div>
          <div className="jolly-mouth"></div>
          <div className="jolly-teeth teeth01"></div>
          <div className="jolly-teeth teeth02"></div>
          <div className="jolly-teeth teeth03"></div>
          <div className="jolly-teeth teeth04"></div>
        </div>
      </div>
    </div>
  );
};

export default OnePieceJolly;
