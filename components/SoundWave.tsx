"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SoundWave = ({ isPlaying }: { isPlaying: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const optRef = useRef({
    width: 0,
    height: 0,
    midY: 0,
    sinHeight: 0,
    strokeColor: "white",
    strokeWidth: 2,
    flatRatio: 0.15,         // Flat area % on each side
    totalPoints: 3000,       // Number of points
    speed: 0.03,           // Speed of wave motion
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      optRef.current.width = w;
      optRef.current.height = h;
      optRef.current.midY = h / 2;
      canvas.width = w * 2;
      canvas.height = h * 2;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(2, 2);
    ctx.strokeStyle = optRef.current.strokeColor;
    ctx.lineWidth = optRef.current.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let time = 0;

    const render = () => {
  const {
    width,
    height,
    midY,
    sinHeight,
    flatRatio,
    totalPoints,
    speed,
  } = optRef.current;

  const flatLeftX = width * flatRatio;
  const flatRightX = width * (1 - flatRatio);
  const waveWidth = flatRightX - flatLeftX;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (let i = 0; i <= totalPoints; i++) {
    const x = (width / totalPoints) * i;
    let y = midY;

    if (x >= flatLeftX && x <= flatRightX) {
      const progress = (x - flatLeftX) / waveWidth;
      const phase = progress * Math.PI * 2 + time;
      const envelope = Math.sin(Math.PI * progress); // keeps wave 0 at edges
      const sine = Math.sin(phase) * envelope;
      y = midY + sine * sinHeight;
    }

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
  time += speed;
  animationRef.current = requestAnimationFrame(render);
};






    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    gsap.to(optRef.current, {
      sinHeight: isPlaying ? 8 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [isPlaying]);

  return (
    <div className="px-2 w-full h-[80px] pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default SoundWave;
