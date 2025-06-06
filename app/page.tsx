"use client";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useMusic} from "@/components/context/MusicContext";
import SoundWave from "@/components/SoundWave";
export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const {isPlaying, togglePlayback } = useMusic();
  
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = "84px";

    if (!("scrollBehavior" in document.documentElement.style)) {
      import("smoothscroll-polyfill").then((module) => {
        module.polyfill();
      });
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Set scroll padding to account for fixed navbar
    document.documentElement.style.scrollPaddingTop = "84px";

    // Add smooth scroll polyfill
    if (!("scrollBehavior" in document.documentElement.style)) {
      import("smoothscroll-polyfill").then((module) => {
        module.polyfill();
      });
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="w-full h-full bg-[#10100E] ">
      <AnimatePresence>
  {showScrollTop && (
    <motion.div
      key="button-group"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-4 right-4 z-[99999] flex flex-row items-end gap-x-3"
    >
      {/* Scroll to Top Button */}
      <motion.button
        key="scroll-button"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="items-center justify-center hover:scale-[115%] transition-transform inline-flex h-12 w-12 rounded-full bg-[#10100E] hover:bg-[#3a3a3a] transition-colors duration-200 border border-[#FFFFFF33]"
        aria-label="Go to top"
      >
        <Image
          src="/arrow.svg"
          alt="Top"
          width={0}
          height={0}
          className="size-5 rotate-180"
        />
      </motion.button>

      {/* Music Button */}
      <motion.button
        key="music-button"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }} 
        onClick={togglePlayback}
        className="bg-[#252526] hover:scale-[115%] transition-transform inline-flex items-center justify-center h-12 w-12 rounded-full text-[14px] font-bold cursor-pointer transition-all duration-300"
        aria-label="Music"
      >
        <SoundWave isPlaying={isPlaying} />
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>




      <section id="hero">
        <Hero />
      </section>

      <Navbar />

      <section
        id="projects"
        data-section="projects"
        className="min-h-screen px-[16px] md:px-[32px] xl:px-[48px] py-[18vh] overflow-x-hidden"
      >
        <div className="pt-20 -mt-20" />
        <Projects />
      </section>
        {/* <section
        id="fibonacci">
        <div className="h-full" />
        <SpiralExperience />  
        </section> */}
      <section
        id="stack"
        data-section="stack"
        className="min-h-screen px-[16px] md:px-[32px] xl:px-[48px] 2xl:px-[64px] py-[18vh] overflow-x-hidden border-t border-[#3E3E3E]"
      >
        <div className="pt-20 -mt-20" />
        <Stack />
      </section>

      <section
        id="about"
        data-section="about"
        className="min-h-screen px-[16px] md:px-[32px] xl:px-[48px] 2xl:px-[64px] py-[18vh] border-t border-[#3E3E3E] "
      >
        <div className="pt-20 -mt-20" />
        <About />
      </section>

      <section
        id="contact"
        data-section="contact"
        className="min-h-[calc(100vh-84px)] px-[16px] md:px-[32px] xl:px-[48px] 2xl:px-[64px] bg-[linear-gradient(167.99deg,rgba(255,255,255,0.01)_2.2%,rgba(255,255,255,0.03)_97.12%)] border-t border-[#3E3E3E]"
      >
        <div className="pt-20 -mt-20" />
        <Footer />
      </section>
    </main>
  );
}
