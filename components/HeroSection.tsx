"use client";
import { useState } from "react";

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  return (
    <div className="flex justify-center items-center">
      <section
        className=" pb-[136px] relative  text-white flex flex-col-reverse lg:flex-col justify-end mx-[16px] lg:mx-[64px] w-full"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <h1 className="px-[64px] text-[176px] tracking-[-4%] leading-[142px] mb-[56px] text-[#F6F5FF4D] font-bold">
          Marouane Tabaa
        </h1>
        <div className="px-[64px] flex items-center justify-between">
          <p className=" text-lg sm:text-xl text-[#F6F5FF99] max-w-xl mb-6 font-light px-2">
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
