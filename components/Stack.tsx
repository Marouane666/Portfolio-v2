import Image from "next/image";
const Stack = () => {
  const technologies = [
    { name: "React", logo: "/stack/react.svg" },
    { name: "Spring", logo: "/stack/spring.svg" },
    { name: "Rust", logo: "/stack/rust.svg" },
    { name: "typescript", logo: "/stack/typescript.svg" },
    { name: "postgress", logo: "/stack/postgres.svg" },
    { name: "Apache kafka", logo: "/stack/kafka.svg" },
    { name: "go", logo: "/stack/go.svg" },
    { name: "express", logo: "/stack/express.svg" },
  ];

  return (
    <section className=" flex flex-col md:flex-row justify-center">
      <div className="flex items-start justify-start md:hidden mb-4">
        <h1 className="flex text-start text-5xl lg:text-5xl font-bold">
          <span className="text-[#F6F5FF33] bg-clip-text ">My stack</span>
        </h1>
      </div>

      <div className=" md:px-8  w-full lg:max-w-4xl relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 mx-auto overflow-hidden">
          {/* Heading */}

          <h1 className="hidden md:block absolute z-10 left-1/2 -translate-x-1/2 top-[-120px] md:left-auto md:right-[-20%] lg:right-[-30%] md:top-1/2 md:-translate-y-1/2 text-4xl lg:text-5xl font-bold text-center  px-8 py-4 rounded-[32px] w-full md:w-fit ">
            <span className="text-[#F6F5FF33] bg-clip-text ">My Stack</span>
          </h1>

          {/* First Row */}
          {technologies.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
                ${index === 0 ? "sm:rounded-tl-[32px]" : ""}
                ${index === 2 ? "sm:rounded-tr-[32px]" : ""}
                ${index === 0 ? "rounded-tl-[32px]" : ""}
                ${index === 1 ? "rounded-tr-[32px] sm:rounded-tr-none" : ""}
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

          {/* Second Row */}
          {technologies.slice(3, 5).map((tech, index) => (
            <div
              key={index}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
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

          {/* Empty block */}
          <div className="hidden sm:block border-b border-[#3e3e3e] aspect-square" />

          {/* Third Row */}
          {technologies.slice(5).map((tech, index) => (
            <div
              key={index}
              className={`
                p-4 sm:p-6 bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border border-[#3e3e3e]
                aspect-square
                ${index === 0 ? "sm:rounded-bl-[32px]" : ""}
                ${index === 2 ? "rounded-br-[32px]" : ""}
                ${index === 1 ? "rounded-bl-[32px] sm:rounded-bl-none" : ""}
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
        </div>
      </div>
    </section>
  );
};

export default Stack;
