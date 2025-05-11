import React from "react";
import "@/app/styles/bomb.css";
import "@/app/styles/red.css";

const AngryBirds = () => {
  return (
    <div className="canvas__css_group">
      <div className="canvas__css_angryBird left">
        <div className="birdBlack">
          <div className="birdBlack-hair"></div>
          <div className="birdBlack-hair-outline"></div>
          <div className="birdBlack-body">
            <div className="birdBlack-center">
              <div className="birdBlack-inner-center"></div>
            </div>
            <div className="eyeBlack-outter-left">
              <div className="eyeBlack-left">
                <div className="eyeballBlack-left"></div>
              </div>
            </div>

            <div className="eyeBlack-outter-right">
              <div className="eyeBlack-right">
                <div className="eyeballBlack-right"></div>
              </div>
            </div>
          </div>
          <div className="birdBlack-beak-top"></div>
          <div className="birdBlack-beak-bottom"></div>

          <div className="birdBlack-inner-body">
            <div className="birdBlack-stomach"></div>
          </div>
        </div>
      </div>

      <div className="canvas__css_angryBird right">
        <div className="birdRed">
          <div className="hair1"></div>
          <div className="hair1-outline"></div>
          <div className="hair2"></div>
          <div className="hair2-outline"></div>
          <div className="bird-body">
            <div className="eye-left">
              <div className="eyeball-left"></div>
            </div>
            <div className="eye-decor-left"></div>
            <div className="eye-right">
              <div className="eyeball-right"></div>
            </div>
            <div className="body-decor1"></div>
            <div className="body-decor2"></div>
            <div className="beak-top"></div>
            <div className="beak-bottom"></div>
            <div className="stomach"></div>
          </div>
          <div className="tail1"></div>
          <div className="tail2"></div>
          <div className="tail3"></div>
          <div className="birdRed-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default AngryBirds;
