import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function FibonacciSpiral() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const tunnelRef = useRef(null);
  
  const spiralItems = [
    { title: "Sacred Geometry", icon: "◉", color: "#8a876a" },
    { title: "Golden Ratio", icon: "Φ", color: "#9e9a7d" },
    { title: "Divine Proportion", icon: "∞", color: "#a8a48b" },
    { title: "Natural Patterns", icon: "❖", color: "#b6b29a" },
    { title: "Mathematical Beauty", icon: "π", color: "#c4c0a9" },
    { title: "Cosmic Harmony", icon: "☯", color: "#d2ceb8" },
  ];

  useEffect(() => {
    // Set initial state
    gsap.set(".spiral-item", { 
      opacity: 0,
      scale: 0.8,
      rotation: 0,
      transformOrigin: "center center"
    });
    
    // Create the spiral animation timeline
    const spiralTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.5,
        pin: true,
        markers: false,
        id: "spiral-scroll"
      }
    });
    
    // Tunnel entrance effect
    gsap.set(tunnelRef.current, { 
      opacity: 0,
      scale: 0.5,
      rotation: 0,
      transformOrigin: "center center"
    });
    
    spiralTL.to(tunnelRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    }, 0);
    
    // Animate each item along the spiral path
    spiralItems.forEach((_, i) => {
      spiralTL.to(`.spiral-item:nth-child(${i + 1})`, {
        motionPath: {
          path: "#spiralPath",
          align: "#spiralPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: i * 0.15,
          end: i * 0.15 + 0.3
        },
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
        duration: 1
      }, i * 0.2);
      
      // Add depth effect to items
      spiralTL.to(`.spiral-item:nth-child(${i + 1})`, {
        scale: 1.2,
        zIndex: spiralItems.length - i,
        boxShadow: "0 0 30px rgba(170, 167, 130, 0.3)",
        duration: 0.5
      }, i * 0.2 + 0.3);
      
      spiralTL.to(`.spiral-item:nth-child(${i + 1})`, {
        scale: 1,
        boxShadow: "0 0 10px rgba(170, 167, 130, 0.1)",
        duration: 0.5
      }, i * 0.2 + 0.8);
    });
    
    // Tunnel zoom effect
    spiralTL.to(tunnelRef.current, {
      scale: 2,
      duration: 4,
      ease: "power1.inOut"
    }, ">");
    
    // Background animation
    spiralTL.to(containerRef.current, {
      background: "radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 100%)",
      duration: 3
    }, 0);
    
    // Spiral glow effect
    spiralTL.to("#spiralPath", {
      attr: { "stroke-opacity": 0.5 },
      duration: 2
    }, 0);
    
    spiralTL.to("#spiralPath", {
      attr: { "stroke-opacity": 0 },
      duration: 2
    }, 3);
    
    // Final transition to normal scroll
    spiralTL.to(".spiral-item", {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: "power2.out"
    }, ">");
    
    spiralTL.to(tunnelRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power2.out"
    }, "<");
    
    // Particle animation
    const particles = gsap.utils.toArray(".particle");
    particles.forEach((particle, i) => {
      gsap.fromTo(particle, 
        { opacity: 0, scale: 0 },
        {
          opacity: () => gsap.utils.random(0.1, 0.3),
          scale: () => gsap.utils.random(0.2, 1),
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-50, 50),
          duration: gsap.utils.random(2, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1
        }
      );
    });
    
    // Tunnel scrolling effect
    gsap.to(".tunnel-layer", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: true
      },
      y: (i) => i * 200,
      ease: "none"
    });
    
    // Content section animations
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      opacity: 0,
      y: 100,
      duration: 1
    });
    
    gsap.utils.toArray(".content-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <section ref={containerRef} className="h-screen bg-gradient-to-b from-[#353535] to-[#252525] text-[#d2ceb8] relative overflow-hidden">
        {/* Shell tunnel effect */}
        <div ref={tunnelRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]">
          {/* Tunnel layers with Fibonacci pattern */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="tunnel-layer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${100 - i * 4}%`,
                height: `${100 - i * 4}%`,
                borderRadius: "50%",
                border: `1px solid rgba(138, 135, 106, ${0.1 + i * 0.02})`,
                boxShadow: "inset 0 0 30px rgba(138, 135, 106, 0.1)",
                zIndex: 20 - i
              }}
            />
          ))}
        </div>
        
        {/* Animated particles in the background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i}
              className="particle absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                background: "#8a876a",
                opacity: 0.1
              }}
            />
          ))}
        </div>
        
        {/* Fibonacci spiral path */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 1000" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] z-30"
        >
          <path
            id="spiralPath"
            d="M500,500
              m0,-250
              a250,250 0 1,1 -250,250
              a125,125 0 1,1 125,-125
              a62.5,62.5 0 1,1 -62.5,62.5
              a31.25,31.25 0 1,1 31.25,-31.25
              a15.625,15.625 0 1,1 -15.625,15.625"
            fill="none"
            stroke="rgba(138, 135, 106, 0.3)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
        
        {/* Spiral items */}
        <div className="absolute inset-0 z-40">
          {spiralItems.map((item, index) => (
            <div 
              key={index}
              className="spiral-item absolute w-60 h-60 rounded-xl flex flex-col items-center justify-center text-center backdrop-blur-sm"
              style={{
                background: `rgba(55, 55, 56, 0.5)`,
                border: `1px solid ${item.color}`,
                boxShadow: `0 0 20px ${item.color}20, inset 0 0 10px rgba(170, 167, 130, 0.1)`,
                color: item.color
              }}
            >
              <div className="text-6xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold mb-2">{item.title}</div>
              <div className="text-sm opacity-70 px-4">
                The divine proportion in nature
              </div>
              <div 
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${item.color}22, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Center element - Golden Ratio */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#8a876a] to-[#b6b29a] flex items-center justify-center z-50 shadow-[0_0_40px_rgba(170,167,130,0.3)]">
          <div className="text-[#252525] text-lg font-bold">φ 1.618</div>
          <div className="absolute w-full h-full rounded-full animate-ping opacity-20 bg-gradient-to-br from-[#8a876a] to-[#b6b29a]" />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
          <div className="w-6 h-10 rounded-full border border-[#8a876a] flex justify-center p-1">
            <div className="w-2 h-2 bg-[#8a876a] rounded-full animate-scroll-indicator"></div>
          </div>
          <p className="mt-2 text-[#8a876a]/70 text-sm">Scroll to explore the shell</p>
        </div>
      </section>
      
      {/* Content after the spiral animation */}
      <div ref={contentRef} className="min-h-screen bg-gradient-to-b from-[#252525] to-[#1a1a1a] text-[#d2ceb8] px-8 py-20 md:px-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a876a] to-[#c4c0a9]">
              Journey Through the Golden Spiral
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto text-center">
            As you scrolled through the Fibonacci shell, you experienced the mathematical harmony found throughout nature and the universe.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {title: "Nature's Blueprint", desc: "Fibonacci sequences appear in hurricanes, galaxies, and DNA"},
              {title: "Architectural Perfection", desc: "From pyramids to modern structures, the golden ratio creates timeless beauty"},
              {title: "Artistic Mastery", desc: "Da Vinci, Dali, and other masters embedded the golden ratio in their works"}
            ].map((item, index) => (
              <div 
                key={index} 
                className="content-card bg-[#353535] backdrop-blur-sm rounded-2xl p-8 border border-[#555456] hover:border-[#8a876a] transition-all duration-500 group"
              >
                <div className="text-5xl font-bold text-[#8a876a] mb-4">0{index+1}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-80 mb-6">
                  {item.desc}
                </p>
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8a876a] to-[#b6b29a] flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-6">Continue Your Mathematical Journey</h3>
            <button className="px-8 py-4 bg-gradient-to-r from-[#8a876a] to-[#b6b29a] rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#8a876a]/30 text-[#252525]">
              Explore More Patterns
            </button>
          </div>
        </div>
      </div>
      
      {/* <style jsx global>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.4; }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #252525;
          color: #d2ceb8;
          font-family: 'Georgia', serif;
        }
        .spiral-item {
          transition: all 0.3s ease-out;
          font-family: 'Times New Roman', serif;
        }
        .tunnel-layer {
          transition: transform 0.5s ease-out;
          will-change: transform;
        }
        .content-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.2);
        }
        .shell-texture {
          background: 
            radial-gradient(circle at 50% 50%, rgba(138, 135, 106, 0.05) 0%, transparent 60%),
            linear-gradient(45deg, rgba(55, 55, 56, 0.2) 25%, transparent 25%, transparent 75%, rgba(55, 55, 56, 0.2) 75%),
            linear-gradient(45deg, rgba(55, 55, 56, 0.2) 25%, transparent 25%, transparent 75%, rgba(55, 55, 56, 0.2) 75%);
          background-size: 100% 100%, 30px 30px, 30px 30px;
          background-position: 0 0, 0 0, 15px 15px;
        }
        .fractal-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
          z-index: 0;
        }
      `}</style> */}
      
      {/* Fractal video background */}
      <video autoPlay loop muted className="fractal-video">
        <source src="/fractal-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}