"use client";
import React, { useState, useEffect } from "react";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
          setHasScrolledPastHero(true);
        } else {
          setHasScrolledPastHero(false);
        }
      }

      // Only show the button if we're below lg breakpoint
      if (window.innerWidth < 1024) {
        setIsVisible(hasScrolledPastHero);
      } else {
        setIsVisible(false);
      }
    };

    // Also handle resize to account for viewport changes
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(false);
      } else if (hasScrolledPastHero) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [hasScrolledPastHero]);

  return (
    <div className="lg:hidden fixed bottom-6 right-4 z-50 transition-all duration-500 ease-out">
      <a
        href="#contact"
        className={`font-space bg-white rounded-[100px] text-[1.1rem] py-3 px-5 capitalize font-bold text-[#10100E] hover:border hover:border-white hover:bg-[#10100e] hover:text-[#F6F5FF] shadow-lg transform transition-all duration-500 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[150%] opacity-0"
        }`}
      >
        get in touch
      </a>
    </div>
  );
};

export default FloatingContactButton;