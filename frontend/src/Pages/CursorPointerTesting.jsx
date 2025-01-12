import React, { useState, useEffect, useRef } from "react";

const CursorPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();

  // Update the actual cursor position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      // Add a new particle at the cursor position
      const newParticle = {
        id: Math.random().toString(36).substr(2, 9), // Unique ID
        x: event.clientX,
        y: event.clientY,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
        size: Math.random() * 5 + 2, // Random size between 2 and 7
        life: 1, // Initial life (opacity)
      };
      setParticles((prev) => [...prev, newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth the cursor movement using requestAnimationFrame
  const smoothCursor = () => {
    const smoothingFactor = 0.1; // Adjust this value for smoothness
    setSmoothPosition((prev) => ({
      x: prev.x + (position.x - prev.x) * smoothingFactor,
      y: prev.y + (position.y - prev.y) * smoothingFactor,
    }));

    requestRef.current = requestAnimationFrame(smoothCursor);
  };

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + (Math.random() - 0.5) * 2, // Random horizontal movement
            y: particle.y + (Math.random() - 0.5) * 2, // Random vertical movement
            life: particle.life - 0.02, // Fade out over time
          }))
          .filter((particle) => particle.life > 0) // Remove particles that are fully faded
      );
      requestRef.current = requestAnimationFrame(animateParticles);
    };

    requestRef.current = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      {/* Smooth cursor */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          width: "40px", // Increased size
          height: "40px", // Increased size
          backgroundColor: "rgba(0, 0, 255, 0.3)", // Semi-transparent blue
          border: "2px solid blue", // Border for better visibility
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Glow effect
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default CursorPointer;