import React from "react";
import "../../styles/owl.css";

const Owl = ({ colorSchema = "dark", position, className }) => {
  return (
    <div
      className={`owl-theme--${colorSchema} ${className} ${
        position === "css" ? "canvas__css" : "canvas canvas__owl"
      }`}
    >
      <div className="owl-body">
        <div className="owl-body-L"></div>
        <div className="owl-body-R"></div>

        <div className="owl-eye-area">
          <div className="owl-eye-area-T"></div>
          <div className="owl-eye-area-B"></div>
          <div className="owl-eye"></div>
          <div className="owl-eye"></div>
        </div>

        <div className="owl-feather-L">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="owl-feather-R">
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="owl-nose-outer">
          <div className="left"></div>
          <div className="right"></div>
          <div className="owl-nose-inner">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="owl-beak"></div>
      </div>
    </div>
  );
};

export default Owl;
