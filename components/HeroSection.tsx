"use client";
import { useState } from "react";

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  return (
    <div className="flex justify-center items-center">
      <section
        className=" pb-[136px] relative text-white flex flex-col-reverse lg:flex-col justify-end mx-[16px] lg:mx-[32px] xl:mx-[64px] w-full"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <h1 className="2xl:text-[calc(clamp(12.125rem,13.281vw-0.625rem,15.313rem))] xl:text-[calc(clamp(9.875rem,13.725vw-1.105rem,12.063rem))] lg:text-[calc(clamp(8.25rem,13.333vw-0.283rem,10.375rem))] tracking-[-4%] leading-[142px] mb-[56px] text-[#F6F5FF4D] font-bold">
          Marouane Tabaa
        </h1>
        <div className="flex items-center justify-between">
          <p className=" text-[24px] text-[#F6F5FF99] max-w-3xl mb-6 font-light px-4 lg:px-2">
            Hi! I am Marouane, a{" "}
            <span className="font-bold text-white">full stack developer</span>{" "}
            based in Morocco. I build secure, scalable and efficient web
            applications.
          </p>
          <div className="rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] flex justify-center items-center">
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
