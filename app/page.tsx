
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import { Xp } from "@/components/Xp";

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#10100E]">
      <Hero />
      <Navbar />
      <section
        id="projects"
        className="min-h-screen px-[16px] xl:px-[64px] pt-20 my-2 overflow-x-hidden"
      >
        <Projects />
      </section>

      <section
        id="stack"
        className="min-h-screen px-[16px] xl:px-[64px] pt-20 my-2 overflow-x-hidden border-t border-[#3E3E3E]"
      >
        <Stack />
      </section>

      <section
        id="about"
        className="min-h-screen px-[16px] xl:px-[64px] pt-20 my-2 border-t border-[#3E3E3E]"
      >
        <About />    
      </section>

      <section
        id="experience"
        className="min-h-screen px-[16px] xl:px-[64px] pt-20 my-2"
      >
        <Xp />
      </section>

      <section
        id="contact"
        className="min-h-[50vh] my-2 mt-[200px] px-[32px] xl:px-[64px] bg-[linear-gradient(167.99deg,rgba(255,255,255,0.01)_2.2%,rgba(255,255,255,0.03)_97.12%)] border-t border-[#3E3E3E]"
      >
        <Footer />
      </section>
    </main>
  );
}
