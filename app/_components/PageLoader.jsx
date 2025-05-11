"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { OnePieceJolly } from "./design";

const PageLoader = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (isAnimating) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col gap-10 items-center justify-center bg-background ">
        <OnePieceJolly position={"pageload"} />
        <h1 className="text-4xl text-tertiary font-clash-bold tracking-wide font-bold animate-pulse">
          <Typewriter
            words={["Loading Portfolio..."]}
            typeSpeed={100}
            cursor
            cursorStyle="_"
          />
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
