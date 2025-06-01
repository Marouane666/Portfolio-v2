"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import MarouaneTabaa from "./MarouaneTabaa"; // Assuming this is a component that renders the name "Marouane Tabaa"
const Hero = () => {
  const [language, setLanguage] = useState<"fr" | "en">("en");
  const marouaneRef = useRef<HTMLImageElement | null>(null);
  const [marouaneHeight, setMarouaneHeight] = useState<number | null>(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;

    if (!img || !container) return;

    // Set initial state (tilted 3°)
    gsap.set(img, { rotation: 3 });

    // Calculate padding needed to prevent clipping (10% buffer) // 10% of max dimension

    // Hover animation
    container.addEventListener("mouseenter", () => {
      gsap.to(img, {
        rotation: -3,
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    // Mouse leave animation
    container.addEventListener("mouseleave", () => {
      gsap.to(img, {
        rotation: 3,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    return () => {
      container.removeEventListener("mouseenter");
      container.removeEventListener("mouseleave");
    };
  }, []);
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
      className="h-[calc(100svh-83px)] md:min-h-[calc(100vh-84px)] px-[16px] sm:px-[32px] xl:px-[48px] 2xl:px-[48px] flex flex-col items-end justify-end lg:justify-end relative"
    >
      <div className="flex items-start justify-between w-full">
        <div className=" w-[75px] h-[100px]  pointer-events-none" >
            <Image
              ref={imgRef}
              src={"/marouaneMac.png"}
              alt="Marouane"
              width={150}
              height={150}
              className="object-contain will-change-transform"
              style={{
                position: "absolute",
                padding: "10px", // Buffer space for transformations
              }}
            />
          </div>
        <div className="flex items-center justify-center">
          <div className="flex sm:hidden relative justify-between items-center rounded-[92px] px-[4px] py-[4px] font-bold bg-[#252526] mt-4 w-[88px] h-[48px] mr-2">
          <motion.div
            layoutId="toggleBall"
            className="absolute w-10 h-10 rounded-full bg-black top-1 left-1"
            animate={{
              x: language === "fr" ? 40 : 0, // 88 - 48 = 40px shift right
            }}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
          <div
            className={`z-10 uppercase rounded-full w-10 h-10 inline-flex items-center justify-center text-[14px] font-bold cursor-pointer transition-all duration-300 ${
              language === "en" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setLanguage("en")}
          >
            en
          </div>
          <div
            className={`z-10 uppercase rounded-full w-10 h-10 inline-flex items-center justify-center text-[14px] font-bold cursor-pointer transition-all duration-300 ${
              language === "fr" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setLanguage("fr")}
          >
            fr
          </div>
        </div>
        <button className="bg-[#252526] mt-4 md:hidden mr-3 z-10 rounded-full inline-flex items-center justify-center h-12 w-12 text-[14px] font-bold cursor-pointer transition-all duration-300">
          <Image
            src="/music.svg"
            alt="Music"
            width={0}
            height={0}
            className="size-5"
          />
        </button>
        </div>
        
      </div>

      <div className="pb-[6vh] flex flex-col  justify-between w-full overflow-x-hidden  h-full">
        <div className="mt-[64px] flex items-center justify-between">
          <div
            ref={containerRef}
            className="relative w-[220px] h-[320px] hidden md:flex items-center justify-center" // Added buffer space
            style={{
              margin: "-10px", // Compensate for increased size
            }}
          >
            <div className=" w-[200px] h-[300px] absolute pointer-events-none" />
            <Image
              ref={imgRef}
              src={"/marouaneMac.png"}
              alt="Marouane"
              width={200}
              height={300}
              className="object-contain will-change-transform"
              style={{
                position: "absolute",
                padding: "10px", // Buffer space for transformations
              }}
            />
          </div>
          <div className="hidden md:block text-end font-bold text-[120px] leading-n4p text-[#F6F5FF33]">
            <h1>
              Full stack <br /> dev
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div className="hidden sm:flex items-center  justify-between">
            {/* <Image
            src="/name.svg"
            alt="Marouane"
            width={0}
            height={0}
            className="w-full"
          /> */}
            <div className="w-full h-full py-6">
              <MarouaneTabaa />
            </div>

            {/* <div
      className="flex"
      style={{
        width: "calc(100vw - 96px)",
      }}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className="uppercase font-bold leading-none"
          style={{
            width: `calc((100vw - 96px) / 14)`,
            fontSize: "clamp(1rem, 8vw, 10rem)",
            display: "inline-block",
            textAlign: "center",
            fontFeatureSettings: "'kern' 0, 'liga' 0'",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div> */}
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
            <div className=" hidden md:flex items-center justify-end w-full lg:w-auto">
              <button className="bg-[#252526] hidden mr-3 z-10 rounded-full md:inline-flex items-center justify-center h-12 w-12 text-[14px] font-bold cursor-pointer transition-all duration-300">
                <Image
                  src="/paint.svg"
                  alt="Paint"
                  width={0}
                  height={0}
                  className="size-5"
                />
              </button>
              <button className="bg-[#252526] hidden mr-3 z-10 rounded-full md:inline-flex items-center justify-center h-12 w-12 text-[14px] font-bold cursor-pointer transition-all duration-300">
                <Image
                  src="/music.svg"
                  alt="Music"
                  width={0}
                  height={0}
                  className="size-5"
                />
              </button>
              {/* <div className="hidden  rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] md:flex justify-center items-center mr-[-2px]">
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
              </div> */}
              <div className="md:flex hidden relative justify-between items-center rounded-[92px] px-[4px] py-[4px] font-bold bg-[#252526] w-[88px] h-[48px]">
                <motion.div
                  layoutId="toggleBall"
                  className="absolute w-10 h-10 rounded-full bg-black top-1 left-1"
                  animate={{
                    x: language === "fr" ? 40 : 0, // 88 - 48 = 40px shift right
                  }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
                <div
                  className={`z-10 uppercase rounded-full w-10 h-10 inline-flex items-center justify-center text-[14px] font-bold cursor-pointer transition-all duration-300 ${
                    language === "en" ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  en
                </div>
                <div
                  className={`z-10 uppercase rounded-full w-10 h-10 inline-flex items-center justify-center text-[14px] font-bold cursor-pointer transition-all duration-300 ${
                    language === "fr" ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setLanguage("fr")}
                >
                  fr
                </div>
              </div>
            </div>
            {/* <div className="hidden  rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] md:flex justify-center items-center mr-[-2px]">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
