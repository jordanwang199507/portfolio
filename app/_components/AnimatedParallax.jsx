"use client";
import React, { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import { motion } from "framer-motion";
const AnimatedParallax = ({ delay, children, className }) => {
  const [mounted, setMounted] = useState(false);

  return (
    <motion.div
      className={className}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.6, duration: 1, delay }}
      onAnimationComplete={() => setMounted(true)}
    >
      {mounted ? (
        <MouseParallax strength={0.07}>{children}</MouseParallax>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedParallax;
