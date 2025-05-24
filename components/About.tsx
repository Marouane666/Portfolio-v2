"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const About = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Easly",
      period: "04/2021 - 06/2021",
      description: "Architected a stock management system using Java Swing and MySQL, designing normalized database schemas for inventory tracking. Automated report generation reduced manual work by 25 hours/week while implementing role-based access control for security."
    },
    {
        title: "Full Stack Developer",
        company: "Universal Platform",
        period: "01/2023 - 06/2023",
        description: "Built a university collaboration portal using Laravel backend with React.js frontend, featuring real-time updates with WebSockets. Developed course sharing modules and tutor matching algorithms, handling 50+ concurrent users with Redis caching and REST API integrations."
      },
      {
        title: "Junior Developer",
        company: "Vertx",
        period: "2023 - 2024",
        description: "Collaborated on architecture design of a microservices-based fleet management system using React Vite + TypeScript frontend and Spring Boot backend. Implemented real-time tracking via WebSockets and Kafka event streaming for inter-service communication. Designed PostgreSQL schemas with geospatial indexing in a distributed system, reducing query times by 40% through query optimization and caching strategies."
      },
      {
        title: "Web Developer & IT Manager",
        company: "Isya",
        period: "2024 - Present",
        description: "Developing real estate platform with React TS/Vite frontend and Spring Boot/MySQL backend. Implementing JWT authentication and property search algorithms, while optimizing MySQL queries to handle listings. Managing deployments with Docker containerization."
      }
  ];

  const education = [
    {
      degree: "High School Diploma in Mathematical Sciences",
      institution: "High school",
      period: "2019",
      description: "In 2019, I completed the Baccalauréat in Science Mathematics A, which focused on advanced mathematics and physics. This program honed my quantitative skills and critical thinking, preparing me for technical challenges in scientific and technological fields.",
    },
    {
        degree: "University Diploma in Technology (DUT)",
        institution: "High School of Technology (EST) in Agadir",
        period: "2021",
        description: "I earned an Associate Degree in Software Engineering from the High School of Technology in Agadir, where I developed a solid foundation in coding and theoretical subjects like networking.",
      },

      {
        degree: "Bachelor in Mathematics and Computer Science",
        institution: "Faculty of Sciences Ibn Zohr in Agadir",
        period: "2023",
        description: "In 2023, I graduated with a Bachelor's degree in Mathematics and Computer Science from the Faculty of Sciences Ibn Zohr in Agadir. This program provided me with a solid foundation in mathematics, focusing on statistics and probability.",
      },
    // Add more education items
  ];
  return (
    <div id="xp" className="w-full flex flex-col items-center justify-center gap-[48px]">
      <div className="w-full my-[12vh] flex-col lg:flex-row flex items-stretch  justify-center gap-[48px] 2xl:gap-[64px] ">
  {/* Text Section - Now includes both about and experience */}
  <div className="relative  w-full lg:w-[50%] flex flex-col min-w-[350px] items-center lg:items-center">
    {/* About Section */}
    <div className="w-full flex flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[40px] max-w-[500px] 2xl:max-w-[600px]">
      <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl">
        about
      </h1>
      <p className="font-space font-light lg:text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
        Hello! I am a dedicated full stack developer with a profound
        dedication to building efficient and intuitive web applications. My
        professional path is decorated with extensive experience in both
        backend and frontend realms, using technologies such as Laravel,
        Spring Boot, Express.js, and React.js. From designing scalable
        system architectures to deploying sophisticated microservices, my
        journey in web development is driven by a relentless curiosity and a
        passion for problem-solving.
      </p>
    </div>
    
    {/* mini navbar */}
    <div className="sticky top-[84px] bg-[#10100E] w-full gap-[16px] max-w-[500px] 2xl:max-w-[600px] mt-10 2xl:mt-[48px] flex items-start justify-start py-[16px]">
      <Link href={"/"} className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"> 
        <div className="bg-[#252526] gap-[8px] px-[24px] py-[18px] rounded-[92px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
          <p>Resume</p>
        </div>
      </Link>
      <Link href={"/"} className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"> 
        <div className="bg-[#252526] gap-[8px] p-[18px] rounded-[92px] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </div>
      </Link>
      <Link href={"/"} className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"> 
        <div className="bg-[#252526] gap-[8px] p-[18px] rounded-[92px] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
      </Link>
      <div className="flex gap-2 p-1 rounded-full bg-[#252526] w-full md:w-fit">
            <button
               onClick={() => {
                setActiveTab("work");
                document.getElementById("xp")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex-1 md:flex-none px-4 py-3 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold ${
                activeTab === "work"
                  ? "bg-[#10100E] text-[#F6F5FF]"
                  : "hover:bg-[#3A3A3A] text-[#F6F5FF66]"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 md:flex-none px-4 py-3 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold ${
                activeTab === "education"
                  ? "bg-[#10100E] text-[#F6F5FF]"
                  : "hover:bg-[#3A3A3A] text-[#F6F5FF66]"
              }`}
            >
              Education
            </button>
          </div>
    </div>
    
    {/* Experience Section */}
    <div className="flex flex-col gap-8 w-full max-w-[500px] 2xl:max-w-[600px] mt-16">
      <div className="w-full space-y-8">
        <div className="flex flex-col items-start space-y-6">
          
        </div>
      </div>

      <div className="w-full space-y-6 md:space-y-14">
        {activeTab === "work"
          ? workExperience.map((exp, index) => (
              <div key={index} className="">
                <h3 className="text-lg md:text-xl font-bold text-[#F6F5FF]">
                  {exp.title}
                </h3>
                <div className="flex items-end justify-start gap-6 mt-2">
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {exp.period}
                  </p>
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {exp.company}
                  </p>
                </div>
                <p className="text-[#F6F5FFB2] text-sm md:text-lg mt-5 w-full">
                  {exp.description}
                </p>
              </div>
            ))
          : education.map((edu, index) => (
              <div key={index} className="">
                <h3 className="text-lg md:text-xl font-bold text-[#F6F5FF]">
                  {edu.degree}
                </h3>
                <div className="flex items-start md:items-end justify-start gap-6 mt-2">
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {edu.period}
                  </p>
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-[#F6F5FFB2] text-sm md:text-lg mt-5 w-full">
                  {edu.description}
                </p>
              </div>
            ))}
      </div>
    </div>
  </div>

  {/* Sticky Image Section */}
  <div className="w-full md:w-[50%] flex-1 flex items-center justify-center relative aspect-[4/3] rounded-[32px] overflow-hidden max-h-[60vh] sticky top-[25vh] h-[calc(100vh-24vh)]">
    <Image
      src="/me.png"
      alt="Marouane Tabaa"
      fill
      className="object-cover rounded-[32px]"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</div>
    </div>
    
  );
};