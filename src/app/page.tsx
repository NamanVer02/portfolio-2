"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "./components/ShinyText";
import LiquidChrome from "./components/LiquidChrome";
import { ScrollReveal } from "./components/ScrollReveal";
import Lanyard from "./components/Lanyard";
import GlareHover from "./components/GlareHover";
import SlideUp from "./components/SlideUp";
import RevealText from "./components/RevealText";
import ScrollVelocity from "./components/ScrollVelocity";
import TiltedCard from "./components/TiltedCard";
import { projects } from "./data/projects";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="h-screen snap-start relative overflow-hidden flex flex-col justify-center">
        {/* LiquidChrome Background */}
        <div className="absolute inset-0 z-0">
          <LiquidChrome
            baseColor={[0.01, 0.01, 0.01]}
            speed={0.2}
            amplitude={0.3}
            frequencyX={1}
            frequencyY={1}
            interactive={true}
          />
        </div>

        {/* Header Logo */}
        <div className="absolute top-5 left-5 z-10">
          <div className="px-4 pt-4">
            <div className="flex items-center">
              <img src="/logo-light.svg" alt="Logo" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center flex-1 flex items-center justify-center">
          <div>
            <ShinyText
              text="NAMAN VERMA"
              disabled={false}
              speed={3}
              className="text-8xl font-bold mb-2"
            />
            <div className="text-lg font-semibold text-neutral-300">
              FULL STACK DEVELOPER | DEVOPS ENGINEER | UI/UX DESIGNER
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Velocity Text */}
      <section className="bg-black py-8">
        <ScrollVelocity
          texts={["PROJECTS"]}
          velocity={100}
          className="text-white font-bold"
          numCopies={8}
          scrollContainerRef={scrollContainerRef as React.RefObject<HTMLElement>}
        />
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center py-20">
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <motion.div
                    animate={{
                      filter: hoveredProject !== null && hoveredProject !== index 
                        ? "blur(4px) brightness(0.5)" 
                        : "blur(0px) brightness(1)",
                      scale: hoveredProject === index ? 1.02 : 1,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="relative z-10"
                    style={{
                      zIndex: hoveredProject === index ? 20 : 10,
                    }}
                  >
                    <TiltedCard
                      className="group cursor-pointer"
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.06}
                      glareEnable={false}
                    >
                      <motion.div 
                        className="overflow-hidden rounded-xl mb-3 relative"
                        animate={{
                          borderRadius: hoveredProject === index ? "16px" : "12px",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-84 object-cover"
                          animate={{
                            filter: hoveredProject === index 
                              ? "grayscale(0%) brightness(1.1) saturate(1.2)" 
                              : "grayscale(100%) brightness(1)",
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        />
                      </motion.div>
                      <div className="flex justify-between items-center">
                        <motion.h3 
                          className="text-lg text-white"
                          animate={{
                            color: hoveredProject === index ? "#93c5fd" : "#ffffff",
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="text-xs"
                              animate={{
                                color: hoveredProject === index ? "#d1d5db" : "#9ca3af",
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                            >
                              {tech}
                              {techIndex < project.technologies.length - 1 ? " " : ""}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </TiltedCard>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Velocity Text */}
      <section className="bg-black py-8">
        <ScrollVelocity
          texts={["ABOUT ME"]}
          velocity={-80}
          className="text-white font-bold"
          numCopies={8}
          scrollContainerRef={scrollContainerRef as React.RefObject<HTMLElement>}
        />
      </section>

      {/* About Section */}
      <section className="h-screen snap-start bg-black flex flex-col justify-center relative overflow-hidden">
        {/* Lanyard - Full Section Coverage, positioned to left */}
        <div
          className="absolute inset-0 w-full h-full z-20"
          style={{ left: "-25%" }}
        >
          <Lanyard position={[-4, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* Text Content - Positioned on the right with pointer-events */}
        <div className="relative z-10 h-full flex items-center justify-end p-8">
          <div className="max-w-xl space-y-8 bg-black/80 backdrop-blur-sm p-8 rounded-2xl">
            <div className="space-y-6">
              <RevealText
                delay={0.2}
                duration={0.4}
                staggerDelay={0.1}
                className="text-lg text-white leading-relaxed"
              >
                {`As someone who's explored various tech domains, I find it
                difficult to fit into a single role. What remains consistent is
                my curiosity and drive to learn emerging technologies.`}
              </RevealText>
              <RevealText
                delay={0.4}
                duration={0.4}
                staggerDelay={0.1}
                className="text-lg text-white leading-relaxed"
              >
                {`From conquering full-stack mountains (while still learning which
                end is up) to diving into DSA, from cross-platform mobile
                adventures to DevOps cloud-building experiments, from UI/UX
                creatives to photography expeditions - I'm a passionate fresher
                dabbling in everything with caffeinated enthusiasm and
                love for learning, even if my "Hello World" collection is more
                impressive than my actual expertise!`}
              </RevealText>
            </div>
          </div>
        </div>

        {/* Social Links - Bottom Right */}
        <div className="absolute bottom-8 right-16 z-60">
          <div className="flex flex-col items-end">
            <SlideUp delay={0.2} duration={0.5}>
              <a
                href="https://linkedin.com/in/NamanVer02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white transition-colors mb-2"
              >
                LinkedIn
              </a>
            </SlideUp>
            <SlideUp delay={0.1} duration={0.5}>
              <a
                href="https://instagram.com/namanver.02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </SlideUp>
          </div>
        </div>

        {/* Email - Bottom Left */}
        <div className="absolute bottom-8 left-16 z-60">
          <SlideUp delay={0.2} duration={0.5}>
            <a
              href="mailto:namanver.2002@gmail.com"
              className="text-sm text-neutral-300 hover:text-white transition-colors"
            >
              namanver.2002@gmail.com
            </a>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
