"use client";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[50vh] gap-[80px] relative">
      {/* Go to top button - positioned on the border */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-5 px-[24px] py-[14px] rounded-full bg-[#10100E] hover:bg-[#3a3a3a] transition-colors duration-200 border border-[#FFFFFF33] flex gap-1"
        aria-label="Go to top"
      >
        <img src="/top.png" alt="Top" />
        <p className="text-[#FFFFFF99]">Back to top</p>
      </button>

      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-[#F6F5FF33] font-bold text-5xl mb-[40px] md:hidden">
        Get in<br/>touch
        </h1>
        <h1 className="hidden md:block text-[#F6F5FF33] font-bold text-5xl md:text-7xl mb-6 md:mb-[40px]">
          Get in touch
        </h1>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <button className="px-6 py-3 md:px-[40px] md:py-[16px] rounded-[92px] font-bold bg-[#252526] text-sm sm:text-lg md:text-xs lg:text-base flex items-center gap-2">
          <img
                src="/mail.svg"
                alt="Mail"
                className="size-6"
              />
              <h2 className="text-base font-bold">Marouanetabaa@gmail.com</h2>
          </button>
          <div className="flex gap-2">
            <button className="p-3 md:p-4 rounded-full bg-[#252526]">
              <img
                src="/github.svg"
                alt="Github"
                className="size-8 md:size-5 lg:w-8 lg:h-8"
              />
            </button>
            <button className="p-3 md:p-4 rounded-full bg-[#252526]">
              <img
                src="/linkedin.svg"
                alt="Linkedin"
                className="size-8 md:size-5 lg:w-8 lg:h-8"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[clamp(0.75rem,0.4274rem+1.4337vw,1rem)] text-[#F6F5FF99]">© 2024 Marouane Tabaa. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;