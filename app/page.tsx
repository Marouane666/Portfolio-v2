import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#10100E]">
      <HeroSection />
      <Navbar />
      <section
        id="projects"
        className="min-h-screen px-[32px] xl:px-[64px] pt-20 my-2 overflow-x-hidden"
      >
        <Projects />
      </section>

      <section
        id="stack"
        className="min-h-screen my-2 pt-20 px-[32px] xl:px-[64px]"
      >
        <h2 className="text-3xl font-bold mb-4">My Stack</h2>
        <p>... your tech stack details here ...</p>
      </section>

      <section
        id="about"
        className="min-h-screen my-2 pt-20 px-[32px] xl:px-[64px]"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>... your biography or about section here ...</p>
      </section>

      <section
        id="contact"
        className="min-h-screen my-2 pt-20 px-[32px] xl:px-[64px]"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>... your contact information or form here ...</p>
      </section>
    </main>
  );
}
