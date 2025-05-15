"use client";
import { useState } from "react";

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  return (
    <div className="flex justify-center items-center">
      <section
        className=" pb-[25vh] lg:pb-[136px] justify-end relative text-white flex flex-col items-end mx-[16px] lg:mx-[32px] xl:mx-[64px] w-full"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <h1 className="hidden lg:block xl:text-[12.5vw]  lg:text-[calc(clamp(8.25rem,13.333vw-0.283rem,10.375rem))] md:text-[clamp(6.25rem,-0.5265rem+14.1176vw,8.5rem)] tracking-[-4%] leading-[142px] mb-[56px] text-[#F6F5FF4D] font-bold text-start">
          Marouane Tabaa
        </h1>
        <div className="flex flex-col justify-end items-start lg:hidden w-full">
          <h1 className="font-space text-[#F6F5FF4D] font-bold text-[18vw] w-full tracking-[-4%] leading-[0.9]">
            Marouane
          </h1>
          <div className="w-full flex flex-row items-center justify-between mt-0">
            <h1 className="font-space font-bold text-[#F6F5FF4D] tracking-[-4%] leading-[0.9] text-[18vw]">
              Tabaa
            </h1>
            <div className="ml-4">
              <a
                href="#contact"
                className="font-space text-[12px] uppercase bg-white rounded-[100px] py-[12px] px-[24px] font-bold text-[#10100E] transition-all duration-300 hover:bg-[#f0f0f0]"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
        <div className="flex border border-red-400 w-full items-start lg:items-start justify-between flex-col lg:flex-row gap-6 lg:gap-0">
          <p className="text-[18px] md:text-[24px] text-[#F6F5FF99] max-w-3xl mb-6 font-light">
            Hi! I am Marouane a{" "}
            <span className="font-bold text-white">full stack developer</span>{" "}
            based in Morocco, I build secure, scalable and efficient web
            applications.
          </p>
          {/* <h1 className="text-[100vw]">test</h1> */}
          <div className="hidden  rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] lg:flex justify-center items-center">
            <div
              className={`uppercase rounded-full p-[16px] text-[16px] cursor-pointer transition-all duration-300 ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("fr")}
            >
              fr
            </div>
            <div
              className={`uppercase rounded-full text-[16px] p-[16px] font-bold cursor-pointer transition-all duration-300 ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("en")}
            >
              en
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
