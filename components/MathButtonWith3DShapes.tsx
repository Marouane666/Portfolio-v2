import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

const MathSymbols3D = ({ isHover, mouseX, mouseY }) => {
  const symbols = ['Σ', '∫', '√', 'π', '∞', '∂', '∆', '∑', '∏', 'Ω'];
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    if (isHover) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY / 200,
        0.1
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX / 200,
        0.1
      );
    } else {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {symbols.map((symbol, i) => {
        const angle = (i / symbols.length) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
          >
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.5}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {symbol}
              <meshStandardMaterial
                color={i % 2 === 0 ? '#61dafb' : '#f2056f'}
                metalness={0.5}
                roughness={0.2}
              />
            </Text3D>
          </mesh>
        );
      })}
    </group>
  );
};

const MathButtonWith3DShapes = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - bounds.left - bounds.width / 2);
    mouseY.set(e.clientY - bounds.top - bounds.height / 2);
  };

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* 3D Canvas for mathematical shapes */}
      <div className="absolute w-full h-full pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <MathSymbols3D isHover={isHover} mouseX={mouseX} mouseY={mouseY} />
        </Canvas>
      </div>

      {/* Button */}
      <motion.div
        className="bg-[#252526] gap-2 px-5 inline-flex h-12 items-center rounded-full justify-center relative z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onMouseLeave={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        whileHover={{ backgroundColor: "#333334" }}
      >
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
          className="lucide lucide-globe"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <span>visit</span>
      </motion.div>
    </div>
  );
};

export default MathButtonWith3DShapes;