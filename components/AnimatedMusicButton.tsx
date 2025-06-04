// components/AnimatedMusicButton.jsx
import { useEffect, useRef } from 'react';
import { useMusic } from '@/components/context/MusicContext';

const AnimatedMusicButton = ({ size = 48, color = "#fff" }) => {
  const { isPlaying, togglePlayback } = useMusic();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const bars = useRef<{ height: number; speed: number; phase: number }[]>([]);

  // Initialize bars with random heights for animation
  useEffect(() => {
    bars.current = Array(5).fill(0).map(() => ({
      height: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  // Draw the button state
  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = size / 2 - 4;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw circle background
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fill();
      
      // Draw border
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      if (isPlaying) {
        // Draw animated sound waves
        const barWidth = 4;
        const barSpacing = 3;
        const totalWidth = (barWidth * 5) + (barSpacing * 4);
        const startX = centerX - totalWidth / 2;
        
        bars.current.forEach((bar, i) => {
          // Animate bar height
          bar.phase += bar.speed;
          const heightFactor = 0.5 + Math.sin(bar.phase) * 0.5;
          const barHeight = (radius * 1.4) * bar.height * heightFactor;
          
          ctx.fillStyle = color;
          ctx.fillRect(
            startX + i * (barWidth + barSpacing), 
            centerY - barHeight / 2, 
            barWidth, 
            barHeight
          );
        });
        
        // Continue animation
        animationRef.current = requestAnimationFrame(draw);
      } else {
        // Draw play icon
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX - radius/3, centerY - radius/2);
        ctx.lineTo(centerX - radius/3, centerY + radius/2);
        ctx.lineTo(centerX + radius/2, centerY);
        ctx.closePath();
        ctx.fill();
      }
      
      // Cancel any pending animation if paused
      if (!isPlaying && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    draw();

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isPlaying, color, size]);

  // Handle click
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AnimatedMusicButtonProps {
    size?: number;
    color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Bar {
    height: number;
    speed: number;
    phase: number;
}

const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    togglePlayback();
};

  return (
    <div className="music-button-container">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onClick={handleClick}
        className="cursor-pointer transition-transform hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      />
    </div>
  );
};

export default AnimatedMusicButton;