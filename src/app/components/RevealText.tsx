"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  // Split text into lines if it's a string
  const lines =
    typeof children === "string"
      ? children.split("\n").filter((line) => line.trim())
      : [children];

  return (
    <div ref={ref} className={`relative ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="relative overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration,
              delay: delay + index * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default RevealText;
