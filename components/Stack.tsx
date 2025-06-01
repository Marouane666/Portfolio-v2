import Image from "next/image";

const Stack = () => {
  const technologies = [
    { name: "React", logo: "/stack/react.svg" },
    { name: "Spring", logo: "/stack/spring.svg" },
    { name: "Rust", logo: "/stack/rust.svg" },
    { name: "Typescript", logo: "/stack/typescript.svg" },
    { name: "Postgres", logo: "/stack/postgres.svg" },
    { name: "Apache Kafka", logo: "/stack/kafka.svg" },
    { name: "Go", logo: "/stack/go.svg" },
    { name: "Express", logo: "/stack/express.svg" },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className=" w-full flex items-start md:items-center  justify-start md:justify-center mb-[32px]">
        <h1 className="flex text-start text-5xl lg:text-7xl font-bold">
          <span className="pl-4 text-[#F6F5FF33] bg-clip-text ">My stack</span>
        </h1>
      </div>

      <div className="md:px-8 w-full lg:max-w-4xl relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 mx-auto overflow-hidden">
          {/* Heading */}

          {/* First Row - 3 items */}
          {technologies.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
                ${index === 0 ? "rounded-tl-[16px]" : ""}
                ${index === 1 ? "rounded-tr-[16px] sm:rounded-tr-none" : ""}
                ${index === 2 ? "rounded-tr-none sm:rounded-tr-[16px]" : ""}
              `}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:size-12 object-contain"
                />
                <span className="text-sm sm:text-base text-[#F6F5FF4D] font-normal uppercase">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}

          {/* Second Row - 3 items */}
          {technologies.slice(3, 6).map((tech, index) => (
            <div
              key={index + 3}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
                ${index === 2 ? "sm:rounded-br-[16px]" : ""}
              `}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                <span className="text-sm sm:text-base text-[#F6F5FF4D] font-normal uppercase">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}

          {/* Third Row - 2 items */}
          {technologies.slice(6).map((tech, index) => (
            <div
              key={index + 6}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
                ${index === 0 ? "sm:rounded-bl-[16px]" : ""}
                ${index === 0 ? "rounded-bl-[16px]" : ""}
                ${index === 1 ? "rounded-br-[16px]" : ""}
                ${index === 1 ? "sm:rounded-br-[16px]" : ""}
              `}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                <span className="text-sm sm:text-base text-[#F6F5FF4D] font-normal uppercase">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}

          {/* Empty block for the last cell in the third row on larger screens */}
          {/* <div className="hidden sm:block border-b border-[#3e3e3e] aspect-square rounded-br-[16px]" /> */}
        </div>
      </div>
    </section>
  );
};

export default Stack;