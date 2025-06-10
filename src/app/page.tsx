"use client";

import { useState } from "react";
import ShinyText from "./components/ShinyText";
import LiquidChrome from "./components/LiquidChrome";
import { ScrollReveal, RevealText } from "./components/ScrollReveal";
import Lanyard from "./components/Lanyard";
import GlareHover from "./components/GlareHover";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce",
      icon: "🛒",
      technologies: ["React", "Node.js"],
      status: "Live",
    },
    {
      title: "Task Manager",
      icon: "📋",
      technologies: ["Next.js", "TypeScript"],
      status: "In Progress",
    },
    {
      title: "Weather App",
      icon: "🌤️",
      technologies: ["React", "Python"],
      status: "Live",
    },
    {
      title: "Analytics",
      icon: "📊",
      technologies: ["Vue.js", "Django"],
      status: "Live",
    },
    {
      title: "DevOps Tool",
      icon: "🚀",
      technologies: ["Docker", "K8s"],
      status: "Beta",
    },
    {
      title: "AI Assistant",
      icon: "🤖",
      technologies: ["Python", "AI"],
      status: "In Progress",
    },
    {
      title: "Portfolio",
      icon: "🎨",
      technologies: ["Next.js", "3D"],
      status: "Live",
    },
    {
      title: "Blog CMS",
      icon: "📝",
      technologies: ["Strapi", "React"],
      status: "Live",
    },
    {
      title: "Chat App",
      icon: "💬",
      technologies: ["Socket.io", "React"],
      status: "Beta",
    },
    {
      title: "Music Player",
      icon: "🎵",
      technologies: ["React", "Web Audio"],
      status: "In Progress",
    },
    {
      title: "Photo Editor",
      icon: "📷",
      technologies: ["Canvas", "WebGL"],
      status: "Beta",
    },
    {
      title: "Game Engine",
      icon: "🎮",
      technologies: ["Three.js", "Physics"],
      status: "In Progress",
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
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

      {/* About Section */}
      <section className="h-screen snap-start bg-black flex flex-col justify-center relative overflow-hidden">
        {/* Lanyard - Full Section Coverage, positioned to left */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{ left: "-25%" }}
        >
          <Lanyard position={[-4, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* Text Content - Positioned on the right with pointer-events */}
        <div className="relative z-20 h-full flex items-center justify-end p-8 pointer-events-none">
          <div className="max-w-xl space-y-8 bg-black/80 backdrop-blur-sm p-8 rounded-2xl pointer-events-auto">
            <div className="space-y-6">
              <h2 className="text-lg text-white leading-relaxed">
                As someone who's explored various tech domains, I find it
                difficult to fit into a single role. What remains consistent is
                my curiosity and drive to learn emerging technologies.
              </h2>
              <h2 className="text-lg text-white leading-relaxed">
                From conquering full-stack mountains (while still learning which
                end is up) to diving into DSA dungeons, from cross-platform
                mobile adventures to DevOps cloud-building experiments, from
                UI/UX creative valleys to photography peak expeditions - I'm a
                passionate fresher dabbling in everything with caffeinated
                enthusiasm and a genuine love for learning, even if my "Hello
                World" collection is more impressive than my actual expertise!
              </h2>
            </div>
          </div>
        </div>

        {/* Social Links - Bottom Right */}
        <div className="absolute bottom-8 right-16 z-20">
          <div className="flex flex-col items-end pointer-events-auto">
            <div className="text-sm text-neutral-300 cursor-pointer">
              LinkedIn
            </div>
            <div className="text-sm text-neutral-300 cursor-pointer ">
              Instagram
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="h-screen snap-start bg-black flex flex-col justify-center">
        <div className="container mx-auto px-8 flex-1 flex items-center">
          <div className="w-full">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Featured Projects
              </h2>
            </ScrollReveal>

            <div
              className="flex flex-wrap gap-2 max-w-md mx-auto justify-start"
              style={{ minHeight: "320px" }}
            >
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={0.3 + index * 0.05}>
                  <div
                    className="relative transition-all duration-500 ease-in-out"
                    style={{
                      width: hoveredProject === index ? "140px" : "70px",
                      height: hoveredProject === index ? "140px" : "70px",
                      zIndex: hoveredProject === index ? 20 : 1,
                      flexShrink: 0,
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="rgba(23, 23, 23, 0.4)"
                      borderRadius="8px"
                      borderColor="rgb(38, 38, 38)"
                      glareColor="#ffffff"
                      glareOpacity={0.15}
                      glareAngle={-45}
                      glareSize={100}
                      transitionDuration={300}
                      className="cursor-pointer w-full h-full"
                    >
                      <div
                        className={`h-full flex flex-col items-center justify-center text-center relative transition-all duration-300 ${
                          hoveredProject === index ? "p-3" : "p-1"
                        }`}
                      >
                        {/* Icon */}
                        <div
                          className={`transition-all duration-300 ${
                            hoveredProject === index
                              ? "text-4xl mb-2"
                              : "text-xl"
                          }`}
                        >
                          {project.icon}
                        </div>

                        {/* Title - only show on hover */}
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredProject === index
                              ? "max-h-20 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <h3 className="text-sm font-semibold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Status Badge - only show on hover */}
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredProject === index
                              ? "max-h-10 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                              project.status === "Live"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : project.status === "Beta"
                                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        {/* Technologies - visible on hover */}
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredProject === index
                              ? "max-h-20 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="flex flex-wrap gap-1 justify-center">
                            {project.technologies
                              .slice(0, 2)
                              .map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-1.5 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </GlareHover>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="h-screen snap-start bg-neutral-900 flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center flex-1 flex items-center">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Have a project in mind? I'd love to hear about it.
            </p>
            <button className="bg-white hover:bg-neutral-200 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
