"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export const About = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasRendered(true);
    }, 0); // Ensures it runs after the first paint
    return () => clearTimeout(timer);
  }, []);

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Easly",
      period: "04/2021 - 06/2021",
      description:
        "Built a Java Swing/MySQL stock system with normalized DB schemas, automated reports (saving 25 hrs/week), and role-based access control.",
    },
    {
      title: "Full Stack Developer",
      company: "Universal Platform",
      period: "01/2023 - 06/2023",
      description:
        "Created a Laravel/React university portal with WebSockets, course sharing, tutor matching, and Redis caching, supporting 50+ users via REST APIs",
    },
    {
      title: "Junior Developer",
      company: "Vertx",
      period: "2023 - 2024",
      description:
        "Co-designed a fleet management system using React Vite/TS + Spring Boot microservices. Enabled real-time tracking via WebSockets/Kafka, optimized PostgreSQL with geospatial indexing (40% faster queries).",
    },
    {
      title: "Web Developer & IT Manager",
      company: "Isya",
      period: "2024 - Present",
      description:
        "Developed real estate platform: React TS/Vite + Spring Boot/MySQL. Features JWT auth, optimized property search, MySQL tuning, and Dockerized deployments.",
    },
  ];

  const education = [
    {
      degree: "High School Diploma in Mathematical Sciences",
      institution: "High school",
      period: "2019",
      description:
        "In 2019, I completed the Baccalauréat in Science Mathematics A, which focused on advanced mathematics and physics. This program honed my quantitative skills and critical thinking, preparing me for technical challenges in scientific and technological fields.",
    },
    {
      degree: "University Diploma in Technology (DUT)",
      institution: "High School of Technology (EST) in Agadir",
      period: "2021",
      description:
        "I earned an Associate Degree in Software Engineering from the High School of Technology in Agadir, where I developed a solid foundation in coding and theoretical subjects like networking.",
    },

    {
      degree: "Bachelor in Mathematics and Computer Science",
      institution: "Faculty of Sciences Ibn Zohr in Agadir",
      period: "2023",
      description:
        "In 2023, I graduated with a Bachelor's degree in Mathematics and Computer Science from the Faculty of Sciences Ibn Zohr in Agadir. This program provided me with a solid foundation in mathematics, focusing on statistics and probability.",
    },
  ];

  return (
    <div
      id="xp"
      className="w-full flex flex-col items-center justify-center gap-[48px]"
    >
      <div className="w-full my-[12vh] flex-col sm:flex-row flex items-stretch justify-center gap-[48px] 2xl:gap-[64px]">
        {/* Mobile Image - Only shows on small screens */}

        {/* Text Section */}
        <div className="relative w-full sm:w-[50%] flex flex-col sm:min-w-[350px] items-center justify-start lg:items-center">
          {/* About Section */}
          <div className="w-full flex flex-col items-start justify-start gap-[24px] md:gap-[26px] 2xl:gap-[40px] max-w-[500px] 2xl:max-w-[600px] overflow-x-hidden">
            <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl">
              about
            </h1>
            <div className="flex mb-2 sm:hidden w-full aspect-[4/3] rounded-[16px] overflow-hidden relative overflow-x-hidden  items-center">
              <Image
                src="/marouane3d.png"
                alt="Marouane Tabaa"
                fill
                className="object-cover object-top rounded-[16px] "
                sizes="100vw"
              />
            </div>
            <p className="font-space px-0 lg:px-0 font-light text-[18px] md:text-base 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
              Full stack developer skilled in Laravel, Spring Boot, Express.js,
              and React.js. Passionate about building efficient, scalable web
              apps and microservices. Strong problem-solver with a
              curiosity-driven approach to development.
            </p>
          </div>

          {/* mini navbar */}
          <div className="sticky top-[84px] max-w-[500px] 2xl:max-w-[600px] bg-[#10100E] w-full  items-center justify-between mt-10 2xl:mt-[48px] flex py-[16px]  gap-4">
            <div className="flex gap-2">
              <Link
                href={"/"}
                className="uppercase font-bold text-[16px] leading-[20px]"
              >
                <div className="bg-[#252526] hover:scale-[110%] transition-transform transition-colors duration-300 relative hover:bg-[#FFFFFF26] gap-[4px] px-[12px] inline-flex h-[48px]  rounded-[92px] justify-center items-center">
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
                    className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"
                  >
                    <path d="M12 17V3" />
                    <path d="m6 11 6 6 6-6" />
                    <path d="M19 21H5" />
                  </svg>
                  <p className="text-[15px]">Resume</p>
                </div>
              </Link>
              <Link
                href={"/"}
                className="uppercase font-bold text-[15px] leading-[20px]"
              >
                <div className="bg-[#252526] hover:scale-[115%] transition-transform transition-colors duration-300 relative hover:bg-[#FFFFFF26] rounded-[92px] inline-flex h-[48px] w-[48px] justify-center items-center">
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
                <div className="bg-[#252526] hover:scale-[115%] transition-transform transition-colors duration-300 relative hover:bg-[#FFFFFF26] inline-flex h-[48px] w-[48px] rounded-[92px] justify-center items-center">
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
            <div className="hidden lg:flex transition-colors duration-300 hover:bg-[#FFFFFF26] relative rounded-full px-1 py-1 bg-[#252526] justify-center items-center gap-0 font-bold h-12">
              {/* Work Tab */}
              <motion.div
                layout
                onClick={() => setActiveTab("work")}
                className={`relative z-10 rounded-full inline-flex items-center gap-2 justify-center h-10 px-4 text-sm cursor-pointer transition-all duration-300 ${
                  activeTab === "work" ? "text-white" : "text-white/40"
                }`}
              >
                {activeTab === "work" && (
                  <motion.div
                    layoutId="toggleBall"
                    className="absolute inset-0 bg-[#10100E] rounded-full z-0"
                  />
                )}
                <Image
                  src="/work.svg"
                  alt="Work"
                  width={24}
                  height={24}
                  style={{ strokeWidth: 2 }}
                  className={`z-10 transition-all duration-300 ${
                    activeTab === "work" ? "opacity-100" : "opacity-40"
                  }`}
                />
                <span className="z-10">Work</span>
              </motion.div>

              {/* Education Tab */}
              <motion.div
                layout
                onClick={() => setActiveTab("education")}
                className={`relative z-10 rounded-full inline-flex items-center gap-2 justify-center h-10 px-4 text-sm cursor-pointer transition-all duration-300 ${
                  activeTab === "education" ? "text-white" : "text-white/40"
                }`}
              >
                {activeTab === "education" && (
                  <motion.div
                    layoutId="toggleBall"
                    className="absolute inset-0 bg-[#10100E] rounded-full z-0"
                  />
                )}
                <Image
                  src="/education.svg"
                  alt="Education"
                  width={24}
                  height={24}
                  className={`z-10 transition-all duration-300 ${
                    activeTab === "education" ? "opacity-100" : "opacity-40"
                  }`}
                />
                <span className="z-10">Education</span>
              </motion.div>
            </div>

            <div className="lg:hidden relative flex rounded-[92px] px-[4px] font-bold py-[4px] bg-[#252526] justify-center items-center w-[88px] h-12">
              {/* Work Tab */}
              <motion.div
                layout
                onClick={() => setActiveTab("work")}
                className={`relative z-10 rounded-full inline-flex items-center justify-center h-10 w-10 cursor-pointer transition-all duration-300 ${
                  activeTab === "work" ? "text-white" : "text-white/40"
                }`}
              >
                {activeTab === "work" && (
                  <motion.div
                    layoutId="toggleBall"
                    className="absolute inset-0 bg-black rounded-full z-0"
                  />
                )}
                <Image
                  src="/work.svg"
                  alt="Work"
                  width={20}
                  height={20}
                  className={`z-10 transition-all duration-300 ${
                    activeTab === "work" ? "opacity-100" : "opacity-40"
                  }`}
                />
              </motion.div>

              {/* Education Tab */}
              <motion.div
                layout
                onClick={() => setActiveTab("education")}
                className={`relative z-10 rounded-full inline-flex items-center justify-center h-10 w-10 cursor-pointer transition-all duration-300 ${
                  activeTab === "education" ? "text-white" : "text-white/40"
                }`}
              >
                {activeTab === "education" && (
                  <motion.div
                    layoutId="toggleBall"
                    className="absolute inset-0 bg-black rounded-full z-0"
                  />
                )}
                <Image
                  src="/education.svg"
                  alt="Education"
                  width={20}
                  height={20}
                  className={`z-10 transition-all duration-300 ${
                    activeTab === "education" ? "opacity-100" : "opacity-40"
                  }`}
                />
              </motion.div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-8 w-full max-w-[500px] 2xl:max-w-[600px] overflow-x-hidden">
            <div className="w-full space-y-8">
              <div className="flex flex-col items-start space-y-6"></div>
            </div>

            <div className="w-full space-y-10 md:space-y-14">
              {activeTab === "work"
                ? workExperience.map((exp, index) => (
                    <div key={index} className="">
                      <h3 className="text-lg md:text-xl font-bold text-[#F6F5FF]">
                        {exp.title}
                      </h3>
                      <div className="flex items-end justify-start gap-6 mt-2">
                        <p className="font-light text-[#F6F5FF66] text-[14px] md:text-base">
                          {exp.period}
                        </p>
                        <p className="font-light text-[#F6F5FF66] text-[14px] md:text-base">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-[#F6F5FFB2] text-[16px] md:text-lg mt-5 w-full">
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
                      <p className="text-[#F6F5FFB2] text-[16px] md:text-lg mt-5 w-full">
                        {edu.description}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Desktop Image - Only shows on screens larger than sm */}
        <div className="hidden sm:block w-full md:w-[50%] flex-1 flex items-center justify-center relative aspect-[4/3] rounded-[32px] overflow-hidden max-h-[70vh] sticky top-[25vh] h-[60vh]">
          <div className="w-full h-full">
            <Image
              src="/marouane3d.png"
              alt="Marouane Tabaa"
              fill
              className="parallax-image object-cover object-top rounded-[32px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
