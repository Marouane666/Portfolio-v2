import Image from "next/image";
import Link from "next/link";

export function Projects() {
  type TechStack = {
    icon: string;
    name: string;
  };

  type Project = {
    title: string;
    description: string;
    image: string;
    stack: TechStack[];
    link?: string;
  };
  const projects = [
    {
      image: "/projects/isya.png",
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
      image: "/projects/isya.png",
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
          key={project.title}
          className="w-full my-[12vh] flex items-start justify-start gap-[48px]"
        >
          <div className="w-[60%] flex-1 flex items-center justify-center relative aspect-[3/2] rounded-[16px] overflow-hidden">
            <Image
              src={project.image}
              alt="Fleet management"
              fill
              className="object-cover"
            />

            {/* Tech Display Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-8   rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/typescript.png"
                  alt="TS"
                  width={20}
                  height={20}
                />
                <span className="text-white text-sm">TYPESCRIPT</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/react.png"
                  alt="React"
                  width={20}
                  height={20}
                />
                <span className="text-white text-sm">REACT</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/techs/postgres.png"
                  alt="PostgreSQL"
                  width={20}
                  height={20}
                />
                <span className="text-white text-[16px]">POSTGRESQL</span>
              </div>
            </div>
          </div>

          <div className="w-[40%] flex flex-col min-w-[350px] items-start justify-between flex-1 h-[100%]  aspect-[3/2]">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <h1 className="font-space font-normal text-[48px] leading-[54px] tracking-[-4%] text-[#F6F5FF]">
                Fleet Management Application
              </h1>
              <p className="font-space font-light text-[20px] text-[#F6F5FF99] leading-[30px]">
                {project.description}
              </p>
            </div>
            <Link
              href={project.link}
              className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"
            >
              <div className="bg-[#252526] px-[40px] py-[16px] rounded-[92px] flex justify-center items-center">
                visit
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
