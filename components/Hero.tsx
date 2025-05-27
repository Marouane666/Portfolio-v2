"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
const Hero = () => {
  const [language, setLanguage] = useState<"fr" | "en">("en");
  const marouaneRef = useRef<HTMLImageElement | null>(null);
  const [marouaneHeight, setMarouaneHeight] = useState<number | null>(null);
  useEffect(() => {
    if (marouaneRef.current) {
      const updateHeight = () => {
        setMarouaneHeight(marouaneRef.current?.offsetHeight || null);
      };

      updateHeight(); // Set initial height

      window.addEventListener("resize", updateHeight); // Handle responsive resizes
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);
  return (
    <div
      id="hero"
      className="h-[calc(100svh-83px)] md:min-h-[calc(100vh-84px)] px-[16px] sm:px-[32px] xl:px-[48px] 2xl:px-[48px] flex flex-col items-end justify-between relative"
    ><div className="flex sm:hidden rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] justify-center items-center mt-4">
            <div
              className={`items-center justify-center uppercase rounded-full w-10 inline-flex h-10 text-[14px] font-bold cursor-pointer transition-all duration-300 ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("en")}
            >
              en
            </div>
            <div
              className={`items-center justify-center uppercase rounded-full w-10 inline-flex h-10 text-[14px] cursor-pointer transition-all duration-300 ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setLanguage("fr")}
            >
              fr
            </div>
          </div>
      <div className="pb-[6vh] flex flex-col-reverse  justify-end w-full overflow-x-hidden">
        <div className="hidden sm:flex items-center  justify-between">
          <Image
            src="/name.svg"
            alt="Marouane"
            width={0}
            height={0}
            className="w-full"
          />
        </div>

        <div
          className="flex justify-between items-center sm:hidden"
          style={{ height: marouaneHeight || "auto" }}
        >
          <div
            className="flex m-0 items-start justify-start w-3/4"
            style={{ height: marouaneHeight || "auto" }}
          >
            <Image
              src="/TabaaSolo.svg"
              alt="Marouane"
              width={0}
              height={0}
              className="w-3/4 sm:hidden"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* <div className="w-1/4  h-full flex justify-end items-end">
            <a
              href="#contact"
              className="font-space  bg-[#252526] flex items-center justify-center size-11
             rounded-full"
            >
              <Image
              src="/arrow.svg"
              alt="Top"
              width={0}
              height={0}
              className="size-5   sm:hidden"
               />
            </a>
          </div> */}
        </div>
        <Image
          src="/MarouaneSolo.svg"
          alt="Marouane"
          width={0}
          height={0}
          className="w-full mb-[4vw] sm:hidden"
          ref={marouaneRef}
        />

        <div className="flex items-center mb-[6vh] justify-between">
          <p className="text-[18px] sm:text-[35px]  md:text-[20px] mt-4 text-[#F6F5FF99] w-full lg:max-w-3xl lg:mb-6 font-light">
            Hi! I am Marouane a{" "}
            <span className="font-bold text-white">full stack developer</span>{" "}
            based in Morocco,
            <br /> I build secure, scalable and efficient web applications.
          </p>
          {/* <h1 className="text-[100vw]">test</h1> */}
          <div className="hidden  rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] md:flex justify-center items-center mr-[-2px]">
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
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
