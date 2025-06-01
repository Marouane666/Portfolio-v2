import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const xToRef = useRef<((value: number) => void) | null>(null);
  const yToRef = useRef<((value: number) => void) | null>(null);
  const hoveredElementRef = useRef<HTMLElement | null>(null);

  // Initialize cursor animation
  useEffect(() => {
    xToRef.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    yToRef.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;

      if (xToRef.current) xToRef.current(x);
      if (yToRef.current) yToRef.current(y);

      if (hoveredElementRef.current) {
        const rect = hoveredElementRef.current.getBoundingClientRect();

        // Cursor's position relative to the element's center X and center Y
        //const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Compute vertical distance from the centerY ONLY at the centerX
        // This assumes the cursor is near the centerX line of the card
        const distanceY = e.clientY - centerY;

        // Apply rotation logic: 11° base tilt + distance-based offset
        // Negative when cursor is above centerY, positive when below
        const sensitivity = 0.1;
        const rotation = Math.max(
          -25,
          Math.min(25, 11 + distanceY * sensitivity)
        );

        gsap.to(cursorRef.current, {
          rotate: rotation,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle hover states
  interface TechStack {
    icon: string;
    name: string;
  }

  interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    stack: TechStack[];
    link: string;
  }

  const handleLinkHover = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovering(true);
    hoveredElementRef.current = e.currentTarget as HTMLElement;

    gsap.fromTo(
      cursorRef.current,
      { scale: 0, opacity: 1 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  };

  const handleLinkLeave = () => {
    setIsHovering(false);
    hoveredElementRef.current = null;

    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  const projects: Project[] = [
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
          icon: "/techs/typescript.png",
          name: "typescript",
        },
      ],
      link: "https://www.isya.ma",
    },
    {
      id: 2,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 2",
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
      ],
      link: "https://www.isya.ma",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[32px]">
      {/* Custom Cursor Element */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-50 w-40 h-20 pointer-events-none`}
        style={{
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
        }}
      >
        <Image
          src="/customCursor.svg"
          alt="Custom cursor"
          width={32}
          height={32}
          className="w-full h-full"
        />
      </div>

      <div className="w-full flex items-start">
        <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl">
          Select projects
        </h1>
      </div>

      <div
        id="projects"
        className="w-full flex flex-col items-center justify-center gap-[18vh]"
      >
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className="link-element w-full flex-col lg:flex-row flex items-stretch gap-[48px] 2xl:gap-[64px]"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            {/* Project Image */}
            <div className="w-full md:w-[60%] flex-1 flex items-center justify-center relative aspect-[4/3] rounded-[16px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Tech Stack Overlay */}
              <div className="absolute bottom-0 w-full max-w-xs sm:max-w-md flex items-center justify-center gap-4 sm:gap-10 rounded-[8px] sm:rounded-[12px] bg-[#10100E99] backdrop-blur-md shadow-lg py-[14px] mb-[24px]">
                {project.stack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                    <span className="text-[#F6F5FF99] text-xs sm:text-sm opacity-100">
                      {tech.name.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-[40%] h-full flex flex-col items-center justify-center flex-1 lg:aspect-[4/3] gap-4">
              <div className="flex max-w-[500px] 2xl:max-w-[600px] flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[40px]">
                <h1 className="font-space px-2 lg:px-0 font-normal text-[22px] sm:text-[48px] xl:text-[40px] 2xl:text-[48px] tracking-[-4%] text-[#F6F5FF]">
                  {project.title}
                </h1>
                <p className="font-space px-2 lg:px-0 text-[18px] font-light lg:text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
