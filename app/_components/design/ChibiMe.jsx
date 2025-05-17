"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../styles/chibime.css";

const canvasVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const characterVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
      opacity: {
        delay: 1,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
};

const ChibiMe = ({ className }) => {
  return (
    <motion.div
      className={`canvas portrait ${className}`}
      variants={canvasVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="character"
        variants={characterVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </motion.div>
  );
};

export default ChibiMe;
