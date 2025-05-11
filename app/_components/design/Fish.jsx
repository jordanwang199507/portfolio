import React from "react";
import "@/app/styles/fish.css";

const Fish = () => {
  return (
    <div className="canvas__css canvas__fish">
      <div className="flipper-bottom"></div>
      <div className="flipper-bottom"></div>
      <div className="fish-body">
        <div className="fish-stripe"></div>
        <div className="fish-eye"></div>
        <div className="fish-eye"></div>
        <div className="fish-cheek"></div>
        <div className="fish-cheek"></div>

        <div className="fish-mouth"></div>
        <div className="fish-mouth"></div>

        <div className="fish-fin"></div>
        <div className="fish-fin"></div>
        <div className="fish-fin"></div>

        <div className="fish-tail"></div>
        <div className="fish-tail tail-bottom"></div>
        <div className="fish-gills"></div>
        <div className="fish-gills"></div>
        <div className="fish-gills"></div>
      </div>
      <div className="fish-flipper flipper-top"></div>
    </div>
  );
};

export default Fish;
