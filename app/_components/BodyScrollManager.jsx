// components/BodyScrollManager.jsx
"use client";
import { useEffect } from "react";
import { useNavigation } from "@/app/_context/NavigationContext";

export default function BodyScrollManager() {
  const { openNavigation } = useNavigation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        // On large screens, ensure scroll is always enabled
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = openNavigation ? "hidden" : "auto";
      }
    };

    // Run once on mount
    handleResize();

    // Watch for resize
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [openNavigation]);

  return null;
}
