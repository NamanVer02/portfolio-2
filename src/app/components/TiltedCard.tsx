"use client";

import React, { useRef, useState } from "react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
  transitionEasing?: string;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  glarePosition?: string;
  glareBorderRadius?: string;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  tiltMaxAngleX = 20,
  tiltMaxAngleY = 20,
  perspective = 1000,
  scale = 1.05,
  transitionDuration = 400,
  transitionEasing = "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
  glareEnable = false,
  glareMaxOpacity = 0.7,
  glareColor = "#ffffff",
  glarePosition = "bottom",
  glareBorderRadius = "0",
}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(${scale}, ${scale}, ${scale})`
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateY = (tiltMaxAngleY * (x - 0.5)).toFixed(2);
    const rotateX = (tiltMaxAngleX * (0.5 - y)).toFixed(2);

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glareEnable) {
      const glareX = x * 100;
      const glareY = y * 100;
      const glareOpacity = Math.min(glareMaxOpacity, Math.max(0, (x + y) / 2));

      setGlareStyle(
        `background: radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 50%); opacity: ${glareOpacity};`
      );
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    setGlareStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: `transform ${transitionDuration}ms ${transitionEasing}`,
      }}
    >
      {children}
      {glareEnable && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: glareStyle.includes("background:") 
              ? glareStyle.split("background:")[1].split(";")[0] 
              : "none",
            opacity: glareStyle.includes("opacity:") 
              ? parseFloat(glareStyle.split("opacity:")[1].split(";")[0]) 
              : 0,
            borderRadius: glareBorderRadius,
            transition: `opacity ${transitionDuration}ms ${transitionEasing}`,
          }}
        />
      )}
    </div>
  );
};

export default TiltedCard; 