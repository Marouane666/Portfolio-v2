"use client";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Set scroll padding to account for fixed navbar
    document.documentElement.style.scrollPaddingTop = "84px";
    
    // Add smooth scroll polyfill
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then((module) => {
        module.polyfill();
      });
    }
  }, []);

  return (
    <main className="w-full h-full bg-[#10100E] ">
      <section id="hero">
        <Hero />
      </section>
      
      <Navbar />
      
      <section
        id="projects"
        data-section="projects"
        className="min-h-screen px-[16px] md:px-[32px] xl:px-[48px] 2xl:px-[64px] py-[18vh] overflow-x-hidden"
      >
        <div className="pt-20 -mt-20" />
        <Projects />
      </section>

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