"use client";
import { useState } from "react";

export const Xp = () => {
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
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left Column - Full width on mobile */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex flex-col items-center md:items-start md:block space-y-6">
          <h2 className="text-3xl md:text-5xl font-normal text-[#F6F5FF]">
            Experience
          </h2>

          {/* Full-width switcher on mobile */}
          <div className="flex gap-2 p-1 rounded-full bg-[#252526] w-full md:w-fit">
            <button
              onClick={() => setActiveTab("work")}
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
      </div>

      {/* Right Column - Full width on mobile */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-14">
        {activeTab === "work"
          ? workExperience.map((exp, index) => (
              <div key={index} className="">
                <h3 className="text-lg md:text-xl font-bold text-[#F6F5FF]">
                  {exp.title}
                </h3>
                <div className="flex items-end justify-start gap-6 mt-2">
                  {" "}
                  {/* 8px = mt-2 */}
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {exp.period}
                  </p>
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {exp.company}
                  </p>
                </div>
                <p className="text-[#F6F5FFB2] text-sm md:text-lg mt-5 w-full md:w-[85%]">
                  {exp.description}
                </p>{" "}
                {/* 20px = mt-5 */}
              </div>
            ))
          : education.map((edu, index) => (
              <div key={index} className="">
                <h3 className="text-lg md:text-xl font-bold text-[#F6F5FF]">
                  {edu.degree}
                </h3>
                <div className="flex items-start md:items-end justify-start gap-6 mt-2">
                  {" "}
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {edu.period}
                  </p>
                  {/* 8px = mt-2 */}
                  <p className="font-light text-[#F6F5FF66] text-sm md:text-base">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-[#F6F5FFB2] text-sm md:text-lg mt-5 w-full md:w-[85%]">
                  {edu.description}
                </p>{" "}
                {/* 20px = mt-5 */}
              </div>
            ))}
      </div>
    </div>
  );
};
