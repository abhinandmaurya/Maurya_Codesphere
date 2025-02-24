"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Square, Pentagon } from "lucide-react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const controls = useAnimationControls();
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Regenerate particles on resize
      generateParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateParticles = useCallback(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * (windowSize.width || window.innerWidth),
      y: Math.random() * (windowSize.height || window.innerHeight),
      id: i,
    }));
    setParticles(newParticles);
  }, [windowSize]);

  // Generate initial particles
  useEffect(() => {
    generateParticles();
  }, [generateParticles]);

  const generateRandomMovement = useCallback(
    () => ({
      x: Math.random() * (windowSize.width || window.innerWidth),
      y: Math.random() * (windowSize.height || window.innerHeight),
      scale: 0.8 + Math.random() * 0.4,
      rotate: Math.random() * 360,
    }),
    [windowSize]
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(200, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating geometric shapes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={generateRandomMovement()}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {particle.id % 2 === 0 ? (
            <Square
              className="text-[#c8ff00] opacity-20"
              size={20 + Math.random() * 30}
            />
          ) : (
            <Pentagon
              className="text-[#c8ff00] opacity-20"
              size={20 + Math.random() * 30}
            />
          )}
        </motion.div>
      ))}

      {/* Dynamic spotlight system */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          background:
            "radial-gradient(800px circle at 0 0, rgba(200, 255, 0, 0.15), transparent 70%)",
          width: "100%",
          height: "100%",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "screen",
        }}
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          scale: [1, 1.1, 1],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
        }}
      />

      {/* Pulsating core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-40 h-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200, 255, 0, 0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      {/* Rotating geometric patterns */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, transparent 48%, rgba(200, 255, 0, 0.1) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(200, 255, 0, 0.1) 50%, transparent 52%)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />

      {/* Interactive ripple effect */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(200, 255, 0, 0.2)",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [0, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
