"use client";
import React, { useState } from "react";
import Image from "next/image";
const Hero = () => {
  const [language, setLanguage] = useState<"fr" | "en">("en");
  return (
    <div id="hero" className="h-[calc(100svh-84px)] md:min-h-[calc(100vh-84px)] px-[16px] sm:px-[32px] xl:px-[48px] 2xl:px-[48px] flex items-end relative">
      <div className="pb-[15vh] lg:pb-[20vh] xl:pb-[12vh] flex flex-col-reverse lg:flex-col justify-end w-full ">
        <div className="flex items-center justify-between">
        {/* <h1 className=" hidden lg:block lg:text-[clamp(8rem,-0.4329rem+13.1765vw,10.1rem)] xl:text-[clamp(9.9rem,-1.1431rem+13.8039vw,12.1rem)] 2xl:text-[clamp(11.75rem,-1.25rem+13.5417vw,15rem)] origin-left font-bold whitespace-nowrap text-[#F6F5FF4D] tracking-[-4%] leading-none">
          Marouane
        </h1>
        <h1 className="mr-[10px] hidden lg:block lg:text-[clamp(8rem,-0.4329rem+13.1765vw,10.1rem)] xl:text-[clamp(9.9rem,-1.1431rem+13.8039vw,12.1rem)] 2xl:text-[clamp(11.75rem,-1.25rem+13.5417vw,15rem)] origin-left font-bold whitespace-nowrap text-[#F6F5FF4D] tracking-[-4%] leading-none">
          Tabaa
        </h1> */}
        <Image 
        src="/name.svg"
        alt="Marouane"
        width={0}
        height={0}
        className="w-full" />
        </div>
        
        <div className="flex justify-between lg:hidden">
          <h1 className="  text-[clamp(5rem,-0.1613rem+22.9391vw,9rem)] sm:text-[clamp(8.5rem,-1.6587rem+25.3968vw,10.5rem)] md:text-[clamp(10.5rem,-1.5471rem+25.098vw,14.5rem)] w-2/3 origin-left font-bold text-[#F6F5FF4D] tracking-[-4%] leading-none">
            Tabaa
          </h1>
          <div className="flex items-center justify-center w-1/3">
          <a
            href="#contact"
            className="font-space lg:hidden bg-white rounded-[100px] text-[clamp(0.875rem,0.2298rem+2.8674vw,1.375rem)] sm:text-base py-[6px] px-[8px] sm:py-[8px] sm:px-[16px] capitalize font-bold text-[#10100E] hover:border hover:border-white hover:bg-[#10100e] hover:text-[#F6F5FF]"
          >
            get in touch
          </a>
          </div>
        </div>
        <h1 className="lg:hidden text-[clamp(4.5rem,-0.2742rem+21.2186vw,8.2rem)] sm:text-[clamp(7.8rem,-0.8349rem+21.5873vw,9.5rem)] md:text-[clamp(9.75rem,-0.0382rem+20.3922vw,13rem)] origin-left font-bold whitespace-nowrap text-[#F6F5FF4D] tracking-[-4%] leading-none">
          Marouane
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-[clamp(1.375rem,0.5685rem+3.5842vw,2rem)] sm:text-[35px] md:text-[24px] xl:text-[20px] mt-4 text-[#F6F5FF99] w-full lg:max-w-3xl lg:mb-6 font-light">
            Hi! I am Marouane a{" "}
            <span className="font-bold text-white">full stack developer</span>{" "}
            based in Morocco,<br/> I build secure, scalable and efficient web
            applications.
          </p>
          {/* <h1 className="text-[100vw]">test</h1> */}
          <div className="hidden  rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] lg:flex justify-center items-center mr-[-2px]">
          <div
              className={`uppercase rounded-full text-[14px] p-[16px] font-bold cursor-pointer transition-all duration-300 ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("en")}
            >
              en
            </div>
            <div
              className={`uppercase rounded-full p-[16px] text-[14px] cursor-pointer transition-all duration-300 ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("fr")}
            >
              fr
            </div>
            
          </div>
          <div className="absolute top-0 right-0 flex lg:hidden rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] justify-center items-center mt-4 mr-2">
          <div
              className={`uppercase rounded-full px-[18px] py-[14px] text-[14px] font-bold cursor-pointer transition-all duration-300 ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("en")}
            >
              en
            </div>
            <div
              className={`uppercase rounded-full px-[18px] py-[14px] text-[14px] cursor-pointer transition-all duration-300 ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("fr")}
            >
              fr
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
