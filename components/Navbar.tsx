"use client";
import { useEffect, useState } from 'react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [manuallyHovered, setManuallyHovered] = useState<string | null>(null);

  useEffect(() => {
    const sections = ['hero', 'projects', 'stack', 'about'];
    const observers: IntersectionObserver[] = [];

    sections.forEach(sectionId => {
      const section = document.querySelector(
        sectionId === 'hero'
          ? `#${sectionId}`
          : `[data-section="${sectionId}"]`
      );
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (sectionId === 'hero') {
              setActiveSection(null);
            } else {
              setActiveSection(sectionId);
            }
          }
        },
        {
          root: null,
          rootMargin: '-20% 0px -20% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const getLinkClass = (section: string) => 
    `font-space uppercase font-bold  text-[15px] transition-all duration-300 ${
      (activeSection === section || manuallyHovered === section) ? 
      'text-[#F6F5FF] underline decoration-4 underline-offset-[32px]' : 
      'text-[#F6F5FF66]'
    } relative lg:before:content-['>'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 ${
      (activeSection === section || manuallyHovered === section) ? 
      'before:opacity-100' : 'before:opacity-0'
    } hover:text-[#F6F5FF] hover:before:opacity-100`;

  return (
    <nav className="overflow-x-hidden sticky top-0 z-50 bg-[#10100E] border-t border-b px-[16px] md:px-[32px] xl:px-[48px] border-[#F6F5FF33] h-[84px] flex items-center justify-center overflow-hidden">
      <div className="w-full py-4 flex items-center justify-evenly">
        <ul className="w-full flex items-center justify-between">
          {['projects', 'stack', 'about'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={getLinkClass(section)}
                onMouseEnter={() => setManuallyHovered(section)}
                onMouseLeave={() => setManuallyHovered(null)}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className=" mr-[-1px]">
            <a
              href="#contact"
              className={`font-space rounded-[100px] items-center inline-flex h-[40px] px-[12px] uppercase font-bold transition-all duration-300 ${
                activeSection === 'contact' ? 
                'bg-[#10100e] border border-white text-[#F6F5FF]' : 
                'bg-white text-[#10100E] hover:border hover:border-white hover:bg-[#10100e] hover:text-[#F6F5FF]'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}