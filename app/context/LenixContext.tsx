'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { createContext, useContext, useEffect, useRef } from 'react';

type LenisContextType = {
  lenis: ReactLenis | null;
};

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ReactLenis | null>(null);

  useEffect(() => {
    // Initialize Lenis after component mounts
    if (typeof window !== 'undefined') {
      lenisRef.current = new ReactLenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,
        normalizeWheel: true,
      });

      // RAF integration
      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);
    }

    return () => {
      // Cleanup Lenis instance
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);