import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full md:min-h-[calc(100vh-20px)]">
      {/* Text Section */}
      <div className="flex flex-col gap-[40px] md:gap-0 md:justify-between w-full md:w-[50%] p-4">
        <div>
          <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl mb-6 md:mb-[40px]">
            about
          </h1>
          <p className="w-full md:w-[90%] text-sm sm:text-lg md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] font-light">
            Hello! I am a dedicated full stack developer with a profound
            dedication to building efficient and intuitive web applications. My
            professional path is decorated with extensive experience in both
            backend and frontend realms, using technologies such as Laravel,
            Spring Boot, Express.js, and React.js. From designing scalable
            system architectures to deploying sophisticated microservices, my
            journey in web development is driven by a relentless curiosity and a
            passion for problem-solving. I thrive in dynamic environments,
            pushing the envelope of what&apos;s possible to deliver high-quality
            solutions that not only meet but exceed expectations. When not
            coding, I pursue new technologies, indulge in technical innovation,
            and contribute to projects that are set to redefine the industry
            standard.
          </p>
        </div>
        <div className="flex items-start justify-start gap-4">
          <button className="px-6 py-3 md:px-[40px] md:py-[16px] rounded-[92px] font-bold bg-[#252526] text-sm sm:text-lg md:text-xs lg:text-base">
            MY RESUME
          </button>
          <button className="p-3 md:p-4 rounded-full bg-[#252526]">
            <img src="/github.svg" alt="Github" className="size-8 md:size-5 lg:w-8 lg:h-8" />
          </button>
          <button className="p-3 md:p-4 rounded-full bg-[#252526]">
            <img src="/linkedin.svg" alt="Linkedin" className="size-8 md:size-5 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative md:min-h-[calc(100vh-100px)] w-full md:w-[50%] h-[60vh] md:h-auto overflow-hidden">
        <Image
          src="/me.png"
          alt="Marouane Tabaa"
          fill
          className="object-cover rounded-[32px]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};