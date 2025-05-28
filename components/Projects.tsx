import Image from "next/image";
import Link from "next/link";
import MathButtonWith3DShapes from "./MathButtonWith3DShapes";

export function Projects() {
  const projects = [
    {
      id: 1,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 1",
      description:
        "Fleet management platform with real-time vehicle tracking, historical route analysis & driver analytics. Offers document/staff management tools. Built with microservices architecture, JWT authentication & role-based access.",
      stack: [
        {
          icon: "/techs/spring.png",
          name: "springboot",
        },
        {
          icon: "/techs/kafka.png",
          name: "kafka",
        },
        {
          icon: "/techs/postgres.png",
          name: "postgres",
        },
        {
          icon: "/techs/typescript.png",
          name: "typescript",
        },
      ],
      link: "https://www.isya.ma",
    },
    {
      id: 2,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 1",
      description:
        "Fleet management platform with real-time vehicle tracking, historical route analysis & driver analytics. Offers document/staff management tools. Built with microservices architecture, JWT authentication & role-based access.",
      stack: [
        {
          icon: "/techs/spring.png",
          name: "springboot",
        },
        {
          icon: "/techs/kafka.png",
          name: "kafka",
        },
        {
          icon: "/techs/postgres.png",
          name: "postgres",
        },
        {
          icon: "/techs/typescript.png",
          name: "typescript",
        },
      ],
      link: "https://www.isya.ma",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[32px]">
      <div className="w-full flex items-start">
        <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl">
          projects
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-[18vh]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full  flex-col lg:flex-row flex items-stretch gap-[48px] 2xl:gap-[64px]"
          >
            <div className="w-full  md:w-[60%] flex-1 flex  items-center justify-center relative aspect-[4/3] rounded-[16px] lg:rounded-[32px] overflow-hidden">
              <Image
                src={project.image}
                alt="Fleet management"
                fill
                className="object-cover"
              />

              {/* Tech Display Overlay */}
              {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex justify-center items-center gap-8 sm:gap-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg pl-4 py-2 pr-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/typescript.png"
                  alt="TS"
                  width={20}
                  height={20}
                  className="opacity-100"
                />
                <span className="text-white text-xs sm:text-sm opacity-100">
                  TYPESCRIPT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/react.png"
                  alt="React"
                  width={20}
                  height={20}
                  className="opacity-100"
                />
                <span className="text-white text-xs sm:text-sm opacity-100">REACT</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/postgres.png"
                  alt="PostgreSQL"
                  width={20}
                  height={20}
                  className="opacity-100"
                />
                <span className="text-white text-[16px]  text-xs sm:text-sm opacity-100">
                  POSTGRESQL
                </span>
              </div>
            </div> */}
              <div className="absolute bottom-0  w-full max-w-xs sm:max-w-md flex items-center justify-center gap-4 sm:gap-10 rounded-[8px] sm:rounded-[12px] bg-[#10100E99] backdrop-blur-md shadow-lg  py-[14px] mb-[32px]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/techs/typescript.png"
                    alt="TS"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                  <span className="text-[#F6F5FF99] text-xs sm:text-sm opacity-100">
                    TYPESCRIPT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/techs/react.png"
                    alt="React"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                  <span className="text-[#F6F5FF99] text-xs sm:text-sm opacity-100">
                    REACT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/techs/postgres.png"
                    alt="PostgreSQL"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                  <span className="text-[#F6F5FF99] text-[16px]  text-xs sm:text-sm opacity-100">
                    POSTGRESQL
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%] h-full flex flex-col  items-center justify-center flex-1 lg:aspect-[4/3] gap-4">
              <div className="flex max-w-[500px] 2xl:max-w-[600px] flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[40px]">
                <h1 className="font-space px-2 lg:px-0 font-normal text-[22px] sm:text-[48px] xl:text-[40px] 2xl:text-[48px] leading-[54px] tracking-[-4%] text-[#F6F5FF]">
                  Fleet Management Application
                </h1>
                <p className="font-space px-2 lg:px-0 text-[18px] font-light lg:text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
                  {project.description}
                </p>
              </div>
              <div className="w-full gap-[16px] max-w-[500px] 2xl:max-w-[600px] mt-10 2xl:mt-[48px] flex items-start justify-start">
                <Link
                  href={project.link}
                  className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"
                >
                  {/* <div className="bg-[#252526]  gap-[8px] px-[20px] inline-flex h-12 xl:px-[40px] 2xl:px-[24px] xl:py-[18px] rounded-[92px] justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-globe-icon lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <p>visit</p>
                  </div> */}
                  {/* <MathButtonWith3DShapes /> */}
                </Link>
                <Link
                  href={project.link}
                  className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"
                >
                  <div className="bg-[#252526] inline-flex h-12 w-12 rounded-[92px] justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-github-icon lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
