import { useEffect, useRef,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
export function Projects() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const xToRef = useRef<((value: number) => void) | null>(null);
  const yToRef = useRef<((value: number) => void) | null>(null);
  const hoveredElementRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInProjectsRef = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const mobileTechOverlayRefs = useRef<(HTMLDivElement | null)[]>([]);
const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);

// MOBILE ONLY initialization (in a useEffect or useGSAP)
useEffect(() => {
  mobileTechOverlayRefs.current.forEach(overlay => {
    if (overlay) {
      // Force immediate hidden state
      gsap.set(overlay, {
        y: '155%', 
        opacity: 1,
        immediateRender: true
      });
    }
  });
}, []);

// 2. Mobile animation functions (separate from desktop)
// MOBILE ONLY click handler
const handleMobileClick = (index: number) => {
  // If clicking the currently active one, hide it
  if (activeMobileIndex === index) {
    gsap.to(mobileTechOverlayRefs.current[index], {
      y: '155%',
      opacity: 1,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => setActiveMobileIndex(null)
    });
    return;
  }

  // First hide any currently active overlay
  if (activeMobileIndex !== null) {
    gsap.to(mobileTechOverlayRefs.current[activeMobileIndex], {
      y: '155%',
      opacity: 1,
      duration: 0.3,
      ease: 'power2.in'
    });
  }

  // Then show the new one
  gsap.to(mobileTechOverlayRefs.current[index], {
    y: '0%',
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
    delay: activeMobileIndex !== null ? 0.1 : 0, // Small delay if replacing another
    onStart: () => setActiveMobileIndex(index)
  });
};
  // Inside your component
const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
const techOverlayRefs = useRef<(HTMLDivElement | null)[]>([]);

// Setup GSAP animations
useGSAP(() => {
  // Initialize all tech overlays to be hidden (below the container)
  techOverlayRefs.current.forEach((overlay) => {
    if (!overlay) return;
    gsap.set(overlay, { y: '150%', opacity: 1 });
  });
}, []);

const handleProjectHover = (index: number) => {
  const overlay = techOverlayRefs.current[index];
  if (!overlay) return;
  
  gsap.to(overlay, {
    y: '0%',
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out'
  });
};

const handleProjectLeave = (index: number) => {
  const overlay = techOverlayRefs.current[index];
  if (!overlay) return;
  
  gsap.to(overlay, {
    y: '150%',
    opacity: 1,
    duration: 0.5,
    ease: 'power2.in'
  });
};

  // Initialize cursor animation
  useEffect(() => {
    // Set initial hidden state
    gsap.set(cursorRef.current, { scale: 0, opacity: 0, rotate: 11 });

    // Create smooth follow animations
    xToRef.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    yToRef.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const targetX = mouseX - 16;
      const targetY = mouseY - 16;

      if (hoveredElementRef.current && isInProjectsRef.current) {
        const rect = hoveredElementRef.current.getBoundingClientRect();

        // Define all 4 corners
        const corners = [
          { x: rect.left, y: rect.top, rotation: 9 }, // Top Left
          { x: rect.right, y: rect.top, rotation: -9 }, // Top Right
          { x: rect.left, y: rect.bottom, rotation: -9 }, // Bottom Left
          { x: rect.right, y: rect.bottom, rotation: 9 }, // Bottom Right
        ];

        // Find the closest corner
        let closestCorner = corners[0];
        let minDist = Infinity;
        for (const corner of corners) {
          const dx = mouseX - corner.x;
          const dy = mouseY - corner.y;
          const dist = dx * dx + dy * dy;
          if (dist < minDist) {
            minDist = dist;
            closestCorner = corner;
          }
        }

        // Animate rotation to fixed value based on closest corner
        gsap.to(cursorRef.current, {
          rotate: closestCorner.rotation,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Animate position to follow the mouse
      xToRef.current?.(targetX);
      yToRef.current?.(targetY);
    };

    const handleContainerEnter = () => {
      isInProjectsRef.current = true;
    };

    const handleContainerLeave = () => {
      isInProjectsRef.current = false;
      hoveredElementRef.current = null;

      // FAST exit animation (0.2s) when leaving entire container
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.2,
        ease: "power3.in",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const projectsEl = projectsRef.current;
    if (projectsEl) {
      projectsEl.addEventListener("mouseenter", handleContainerEnter);
      projectsEl.addEventListener("mouseleave", handleContainerLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (projectsEl) {
        projectsEl.removeEventListener("mouseenter", handleContainerEnter);
        projectsEl.removeEventListener("mouseleave", handleContainerLeave);
      }
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
    hoveredElementRef.current = e.currentTarget as HTMLElement;

    // Kill any ongoing animations
    if (animationRef.current) animationRef.current.kill();

    // Smooth enter animation
    animationRef.current = gsap.fromTo(
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
    hoveredElementRef.current = null;

    // SLOW exit animation (0.5s) when leaving project but staying in container
    if (isInProjectsRef.current) {
      if (animationRef.current) animationRef.current.kill();

      animationRef.current = gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      image: "/projects/isyaa.png",
      title: "Fleet Management Application 1",
      description:
        "Fleet management platform with real-time vehicle tracking, historical route analysis & driver analytics. Offers document/staff management tools. Built with microservices architecture, JWT authentication & role-based access.",
      stack: [
        { icon: "/techs/spring.png", name: "springboot" },
        { icon: "/techs/kafka.png", name: "kafka" },
        { icon: "/techs/typescript.png", name: "typescript" },
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
        { icon: "/techs/spring.png", name: "springboot" },
        { icon: "/techs/kafka.png", name: "kafka" },
        { icon: "/techs/postgres.png", name: "postgres" },
      ],
      link: "https://www.isya.ma",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[32px]">
      {/* Custom Cursor Element */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 w-40 h-20 pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          scale: 0,
          opacity: 0,
        }}
      >
        <Image
          src="/customCursor.svg"
          alt="Custom cursor"
          width={32}
          height={32}
          className="w-full h-full md:block hidden" 
        />
      </div>

      <div className="w-full flex items-start">
        <h1 className="capitalize text-[#F6F5FF33] font-bold text-5xl md:text-7xl">
          projects
        </h1>
      </div>

      <div
        ref={projectsRef}
        id="projects"
        className="w-full flex flex-col items-center justify-center gap-[18vh]"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            className="w-full flex-col lg:flex-row flex items-stretch gap-[48px] 2xl:gap-[64px] group"
          >
            {/* Project Image and Details - Wrapped in Link for md and up */}
            <Link
              href={project.link}
              className="link-element w-full flex-col lg:flex-row hidden md:flex  items-stretch gap-[48px] 2xl:gap-[64px] md:flex-1"
              onMouseEnter={(e) => {handleLinkHover(e);
                handleProjectHover(index);
              }}
              onMouseLeave={(e) => {handleLinkLeave();
                handleProjectLeave(index);
              }}
            >
              {/* Project Image */}
              <div 
                  className="w-full md:w-[60%] flex-1 flex items-center justify-center relative aspect-[4/3] rounded-[16px] overflow-hidden">
                <Image
                  
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Tech Stack Overlay */}
                <div ref={el => techOverlayRefs.current[index] = el} className="absolute bottom-0 w-full max-w-xs sm:max-w-md flex items-center justify-center gap-4 sm:gap-10 rounded-[8px] sm:rounded-[12px] bg-[#10100E99] backdrop-blur-md shadow-lg py-[14px] mb-[24px]">
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
                <div className="flex w-full xl:max-w-[500px] 2xl:max-w-[600px] flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[40px]">
                  <h1 className="font-space px-2 lg:px-0 font-normal text-[22px] sm:text-[48px] xl:text-[40px] 2xl:text-[48px] tracking-[-4%] text-[#F6F5FF]">
                    {project.title}
                  </h1>
                  <p className="font-space px-2 lg:px-0 text-[18px] font-light lg:text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
             <div
              className="link-element w-full flex-col lg:flex-row flex md:hidden  items-stretch gap-[48px] 2xl:gap-[64px] md:flex-1"
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
                  onClick={() => handleMobileClick(index)}
                />

                {/* Tech Stack Overlay */}
                <div ref={el => mobileTechOverlayRefs.current[index] = el} className="absolute bottom-0 w-full max-w-xs sm:max-w-md flex items-center justify-center gap-4 sm:gap-10 rounded-[8px] sm:rounded-[12px] bg-[#10100E99] backdrop-blur-md shadow-lg py-[14px] mb-[24px]">
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
                <div className="flex w-full xl:max-w-[500px] 2xl:max-w-[600px] flex-col items-start justify-start gap-[18px] md:gap-[26px] 2xl:gap-[40px]">
                  <h1 className="font-space px-2 lg:px-0 font-normal text-[22px] sm:text-[48px] xl:text-[40px] 2xl:text-[48px] tracking-[-4%] text-[#F6F5FF]">
                    {project.title}
                  </h1>
                  <p className="font-space px-2 lg:px-0 text-[18px] font-light lg:text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#F6F5FF99] 2xl:leading-[30px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>       
            {/* Visit Button - Only visible below md */}
            <div className="w-full gap-[16px] max-w-[500px] 2xl:max-w-[600px] mt-2 2xl:mt-[48px] flex md:hidden items-start justify-start">
                <Link
                  href={project.link}
                  className="uppercase font-bold text-[16px] leading-[20px] tracking-[-4%]"
                >
                  <div className="bg-[#252526]  gap-[8px] px-[20px] inline-flex h-12 xl:px-[40px] 2xl:px-[24px] xl:py-[18px] rounded-[92px] justify-center items-center">
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
                      className="lucide lucide-globe-icon lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <p>visit</p>
                  </div>
                  {/* <MathButtonWith3DShapes /> */}
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}


