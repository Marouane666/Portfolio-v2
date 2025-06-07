"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import MarouaneTabaa from "./MarouaneTabaa";
import { useMusic } from "./context/MusicContext";
import SoundWave from "./SoundWave";
const Hero = () => {
  const [language, setLanguage] = useState<"fr" | "en">("en");
  const marouaneRef = useRef<HTMLImageElement | null>(null);
  const [marouaneHeight, setMarouaneHeight] = useState<number | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgMobileRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerMobileRef = useRef<HTMLDivElement | null>(null);
  const { isPlaying, togglePlayback } = useMusic();
  useEffect(() => {
  const container = containerRef.current;
  const img = imgRef.current;

  if (!container || !img) return;

  let floatTween: gsap.core.Tween | null = null;
  let scaleTween: gsap.core.Tween | null = null;
  let isHovering = false;

  const handleMouseEnter = () => {
    isHovering = true;
    
    // Kill any existing tweens to avoid conflicts
    if (floatTween) floatTween.kill();
    if (scaleTween) scaleTween.kill();

    // Start the scale animation
    scaleTween = gsap.to(img, {
      rotation: 3,
      scale: 2,
      transformOrigin: "top left",
      duration: 1,
      ease: "sine.out",
      onComplete: () => {
        // Only start floating if we're still hovering
        if (isHovering) {
          floatTween = gsap.to(img, {
            y: "-=10",
            duration: 1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        }
      }
    });
  };

  const handleMouseLeave = () => {
    isHovering = false;
    
    // Kill all animations
    if (floatTween) floatTween.kill();
    if (scaleTween) scaleTween.kill();

    // Reset to initial state
    gsap.to(img, {
      rotation: 0,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "sine.inOut"
    });
  };

  container.addEventListener("mouseenter", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mouseenter", handleMouseEnter);
    container.removeEventListener("mouseleave", handleMouseLeave);
    
    // Clean up any running animations
    if (floatTween) floatTween.kill();
    if (scaleTween) scaleTween.kill();
  };
}, []);
useEffect(() => {
  const container = containerMobileRef.current;
  const img = imgMobileRef.current;

  if (!container || !img) return;

  let floatTween: gsap.core.Tween | null = null;
  let scaleTween: gsap.core.Tween | null = null;
  let isAnimating = false;

  const handleClick = () => {
    // Kill any existing tweens to avoid conflicts
    if (floatTween) floatTween.kill();
    if (scaleTween) scaleTween.kill();

    if (!isAnimating) {
      // Start the animation sequence
      scaleTween = gsap.to(img, {
        rotation: 3,
        scale: 2,
        transformOrigin: "top left",
        duration: 1,
        ease: "sine.out",
        onComplete: () => {
          floatTween = gsap.to(img, {
            y: "-=10",
            duration: 1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        }
      });
      isAnimating = true;
    } else {
      // Reset to initial state
      gsap.to(img, {
        rotation: 0,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "sine.inOut"
      });
      isAnimating = false;
    }
  };

  container.addEventListener("click", handleClick);

  return () => {
    container.removeEventListener("click", handleClick);
    
    // Clean up any running animations
    if (floatTween) floatTween.kill();
    if (scaleTween) scaleTween.kill();
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
      className="h-[calc(100svh-84px)] px-[16px] sm:px-[32px] xl:px-[48px] flex flex-col items-start justify-end lg:justify-start relative !overflow-y-hidden"
    >
      {/* mobile section */}
      <div className="flex md:hidden items-start justify-between w-full">
        <div ref={containerMobileRef} className="block lg:hidden w-auto h-full relative items-center justify-start mt-4">
          <div className="w-auto flex items-center">
            <Image
            ref={imgMobileRef}
            src={"/marouaneMac.png"}
            alt="Marouane"
            width={150}
            height={75}
            className="object-contain will-change-transform w-[25vw]"
            
          />
          </div>
          
        </div>
        <div className="flex items-center justify-center">
          <div className="flex lg:hidden transition-colors duration-300 hover:bg-[#FFFFFF26] relative justify-between items-center rounded-[92px] px-[4px] py-[4px] font-bold bg-[#252526] mt-4 w-[88px] h-[48px] mr-2">
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
          <button onClick={togglePlayback} className="bg-[#252526]  hover:bg-[#FFFFFF26] mt-4 md:hidden mr-3 z-10 rounded-full inline-flex items-center justify-center h-12 w-12 text-[14px] font-bold cursor-pointer transition-all duration-300">
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
        <div className="mt-[2vh] 2xl:mt-[5vh] flex items-center justify-between">
          <div
            ref={containerRef}
            className="relative w-auto h-full  hidden md:flex items-center justify-start"
          >
            <div className="w-auto flex items-center">
              <Image
                ref={imgRef}
                src={"/marouaneMac.png"}
                alt="Marouane"
                width={150}
                height={75}
                className="object-contain will-change-transform w-[13vh] xl:w-[15vh] 2xl:w-[18vh] h-auto"
              />
            </div>
          </div>

          {/* Text container */}
          <div className="hidden md:flex w-1/2 h-full items-center justify-end">
            <h1 className="text-[70px] text-end leading-none text-[#F6F5FF33] font-bold">
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
            <div className="w-full h-full py-4">
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
            <p className="text-[20px] sm:text-[35px]  md:text-[20px] mt-4 text-[#F6F5FF99] w-full lg:max-w-3xl lg:mb-6 font-light">
              Hi! I am Marouane a{" "}
              <span className="font-bold text-white">full stack developer</span>{" "}
              based in Morocco,
              <br /> I build secure, scalable and efficient web applications.
            </p>
            {/* <h1 className="text-[100vw]">test</h1> */}
            <div className=" hidden md:flex items-center justify-end w-full lg:w-auto">
              
              <button className="bg-[#252526] hidden mr-3 z-10 rounded-full md:inline-flex items-center justify-center hover:scale-[115%] transition-transform h-12 w-12 hover:bg-[#FFFFFF26] text-[14px] font-bold cursor-pointer transition-all duration-300">
                <Image
                  src="/paint.svg"
                  alt="Paint"
                  width={0}
                  height={0}
                  className="size-5"
                />
              </button>
              <button onClick={togglePlayback} className="bg-[#252526] hover:scale-[115%] transition-transform hover:bg-[#FFFFFF26] hidden mr-3 z-10 rounded-full md:inline-flex items-center justify-center h-12 w-12 text-[14px] font-bold cursor-pointer transition-all duration-300">
                <SoundWave isPlaying={isPlaying} />
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
              <div className="md:flex hidden transition-colors duration-300 relative hover:bg-[#FFFFFF26] justify-between items-center rounded-[92px] px-[4px] py-[4px] font-bold bg-[#252526] w-[88px] h-[48px]">
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
