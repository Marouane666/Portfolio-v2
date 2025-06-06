"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // };

  return (
    <div className="max-h-[100svh-84px] w-full flex flex-col items-center justify-center min-h-screen gap-[80px] relative">
      {/* Go to top button - positioned on the border */}
      {/* <button 
        onClick={scrollToTop}
        className="mt-4 lg:mr-[-32px] items-center justify-center absolute top-0 right-0 inline-flex h-12 w-12 rounded-full bg-[#10100E] hover:bg-[#3a3a3a] transition-colors duration-200 border border-[#FFFFFF33]  gap-1"
        aria-label="Go to top"
      >
        <Image
              src="/arrow.svg"
              alt="Top"
              width={0}
              height={0}
              className="size-5 rotate-180"
               />
        
      </button> */}

      <div className="flex flex-col w-full items-center justify-center">
        {/* <h1 className="text-[#F6F5FF33] font-bold text-5xl mb-[40px] md:hidden">
        Get in<br/>touch
        </h1> */}
        <h1 className=" text-[#F6F5FF33] font-bold text-5xl md:text-7xl mb-6 md:mb-[40px]">
          Get in touch
        </h1>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <button className="px-6 md:px-[40px] inline-flex h-12 -rotate-3 hover:rotate-0 hover:scale-[105%] rounded-[92px] transition-transform
 duration-300 font-bold bg-white text-sm sm:text-lg md:text-xs lg:text-base  items-center gap-2">
          <img
                src="/mail2.svg"
                alt="Mail"
                className="size-6"
              />
              <h2 className="text-base text-[#141412] font-bold">Marouanetabaa@gmail.com</h2>
          </button>
          <div className="flex gap-2">
            <Link
                href={"/"}
                className="uppercase font-bold text-[15px] leading-[20px]"
              >
                <div className="bg-[#252526] transition-colors duration-300 relative hover:bg-[#FFFFFF26] hover:scale-[115%] transition-transform  rounded-[92px] inline-flex h-[48px] w-[48px] justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
              </Link>
              <Link
                href={"/"}
                className="uppercase font-bold text-[16px] leading-[20px]"
              >
                <div className="bg-[#252526] transition-colors duration-300 hover:scale-[115%] transition-transform relative hover:bg-[#FFFFFF26] inline-flex h-[48px] w-[48px] rounded-[92px] justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 mb-16">
        <h1 className="text-[clamp(0.75rem,0.4274rem+1.4337vw,1rem)] text-[#F6F5FF99]">© 2024 Marouane Tabaa. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;