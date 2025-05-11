import React from "react";
import "../../styles/chibime.css";

const ChibiMe = ({ className }) => {
  return (
    <div className={`canvas portrait ${className}`}>
      <div className="character">
        <div className="shoulders">
          <div className="pocket"></div>
        </div>
        <div className="hair-back"></div>
        <div className="neck"></div>
        <div className="ear"></div>
        <div className="ear"></div>
        <div className="face">
          <div className="cheek"></div>
          <div className="cheek"></div>
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="eye">
            <div className="pupil">
              <div className="eye-bright"></div>
            </div>
          </div>
          <div className="eye">
            <div className="pupil">
              <div className="eye-bright"></div>
            </div>
          </div>
        </div>
        <div className="eyebrow"></div>
        <div className="eyebrow"></div>
        <div className="glasses">
          <div className="lense"></div>
          <div className="lense"></div>
        </div>
        <div className="hair-front-1"></div>
        <div className="hair-front-1"></div>
        <div className="hair-front-2"></div>
        <div className="hair-front-2"></div>
        <div className="hair-front-3"></div>
        <div className="hair-front-3"></div>
        <div className="hair-front-4"></div>
        <div className="hair-front-4"></div>
        <div className="hair-front-4"></div>
        <div className="hair-front-5"></div>
        <div className="shirt-neck"></div>
        <div className="shirt-neck"></div>
        <div className="shirt-neck-second"></div>
        <div className="shirt-neck-second"></div>
      </div>
    </div>
  );
};

export default ChibiMe;
