import Image from "next/image";
import Link from "next/link";

export function Projects() {
  

 
  const projects = [
    {
      id:1,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 1",
      description:
        "This comprehensive fleet management platform provides real-time tracking of vehicles, detailed historical route analysis, and insightful analytics on driver behaviors and vehicle performance. It also streamlines the management of documents and staff for each subscribing company. Built on a robust microservices architecture, the application ensures enhanced security with JWT authentication and role-based access controls.",
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
      id:2,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 1",
      description:
        "This comprehensive fleet management platform provides real-time tracking of vehicles, detailed historical route analysis, and insightful analytics on driver behaviors and vehicle performance. It also streamlines the management of documents and staff for each subscribing company. Built on a robust microservices architecture, the application ensures enhanced security with JWT authentication and role-based access controls.",
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
    <div className="w-full flex flex-col items-center justify-center gap-[48px]">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full my-[12vh] flex-col lg:flex-row flex items-center justify-start gap-[48px]"
        >
          <div className="w-full md:w-[60%] flex-1 flex  items-center justify-center relative aspect-[3/2] rounded-[16px] overflow-hidden">
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
            <div className="absolute bottom-0  w-full max-w-xs sm:max-w-md flex items-center justify-evenly sm:gap-10 rounded-[8px] sm:rounded-full bg-[#10100E99] backdrop-blur-md shadow-lg  py-2 mb-4">
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
                <span className="text-[#F6F5FF99] text-xs sm:text-sm opacity-100">REACT</span>
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
            test
          </div>

          <div className="w-full lg:w-[40%] flex flex-col min-w-[350px] px-[16px] items-start justify-between flex-1 lg:aspect-[3/2] gap-4 py-4">
            <div className="flex flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[64px]">
              <h1 className="font-space font-normal text-[22px] sm:text-[48px] leading-[54px] tracking-[-4%] text-[#F6F5FF]">
                Fleet Management Application
              </h1>
              <p className="font-space font-light lg:text-[14px] xl:text-[16px] 2xl:text-[24px] text-[#F6F5FF99] 2xl:leading-[30px]">
                {project.description}
              </p>
            </div>
            <Link
              href={project.link}
              className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"
            >
              <div className="bg-[#252526] px-[20px] py-[8px] xl:px-[40px] xl:py-[16px] rounded-[92px] flex justify-center items-center">
                visit
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
