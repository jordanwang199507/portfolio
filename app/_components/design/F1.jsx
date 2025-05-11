import React from "react";
import "../../styles/f1.css";

const F1 = ({ team = "mclaren", position = "1", delay = "0s" }) => {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`canvas canvas__f1 f1-theme--${team} f1-position-${position} animate-f1-loop `}
    >
      <div className="f1-front-wing rear-top"></div>
      <div className="f1-front-wing rear-top01">
        <div className="f1-front-wing-nose-front"></div>
        <div className="f1-front-wing-nose-back"></div>
      </div>
      <div className="f1-front-wing rear-bottom"></div>
      <div className="f1-front-wing rear-bottom01"></div>
      <div className="f1-front-wing rear-bottom02"></div>
      <div className="f1-front-wing-front-bottom">
        <div className="f1-front-wing-bottom-support"></div>
        <div className="f1-front-wing-bottom-angle">
          <div className="f1-front-wing-bottom-right"></div>
          <div className="f1-front-wing-bottom-center"></div>
          <div className="f1-front-wing-bottom-left"></div>
        </div>
        <div className="f1-front-wing-bottom-angle-protector"></div>
      </div>
      <div className="helmet"></div>
      <div className="helmet-bottom-panel"></div>
      <div className="helmet-back-panel"></div>
      <div className="f1-mirror-container">
        <div className="f1-mirror-top"></div>
        <div className="f1-mirror-bottom"></div>
        <div className="f1-mirror-support"></div>
      </div>
      <div className="f1-chassis"></div>
      <div className="f1-chassis-decor01"></div>
      <div className="f1-chassis-decor02"></div>
      <div className="f1-chassis-decor03">
        <div className="f1-chassis-decor03-curve"></div>
        <div className="f1-chassis-decor03-cover"></div>
      </div>
      <div className="f1-chassis-decor04"></div>
      <div className="f1-roof-scoop01"></div>
      <div className="f1-roof-scoop03"></div>
      <div className="f1-roof-scoop-decor01"></div>
      <div className="f1-roof-scoop-decor02"></div>

      <div className="f1-wheel f1-wheel-spin">
        <div className="f1-wheel-line"></div>
        <div className="f1-outter-rim">
          <div className="f1-inner-rim">
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
          </div>
        </div>
      </div>
      <div className="f1-wheel rear f1-wheel-spin">
        <div className="f1-wheel-line"></div>
        <div className="f1-outter-rim">
          <div className="f1-inner-rim">
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
            <div className="f1-inner-spoke"></div>
          </div>
        </div>
      </div>
      <div className="f1-wing-top01"></div>
      <div className="f1-wing-top02"></div>
      <div className="f1-wing-bottom01"></div>

      <div className="f1-diffuser"></div>
    </div>
  );
};

export default F1;
