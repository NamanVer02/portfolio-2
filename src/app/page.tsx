"use client";

import ShinyText from "./components/ShinyText";
import LiquidChrome from "./components/LiquidChrome";
import { ScrollReveal, RevealText } from "./components/ScrollReveal";
import Lanyard from "./components/Lanyard";
import GlareHover from "./components/GlareHover";

export default function Home() {
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
          <div className="max-w-xl space-y-8 bg-neutral-950/80 backdrop-blur-sm p-8 rounded-2xl pointer-events-auto">
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
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured Projects
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
                  technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
                  status: "Live",
                },
                {
                  title: "Task Management App",
                  description:
                    "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
                  technologies: [
                    "Next.js",
                    "TypeScript",
                    "MongoDB",
                    "Socket.io",
                  ],
                  status: "In Progress",
                },
                {
                  title: "Weather Dashboard",
                  description:
                    "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
                  technologies: ["React", "Python", "FastAPI", "Chart.js"],
                  status: "Live",
                },
                {
                  title: "Social Media Analytics",
                  description:
                    "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
                  technologies: ["Vue.js", "Django", "Redis", "D3.js"],
                  status: "Live",
                },
                {
                  title: "DevOps Pipeline Tool",
                  description:
                    "CI/CD automation tool with container orchestration, automated testing, and deployment monitoring.",
                  technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
                  status: "Beta",
                },
                {
                  title: "AI Chat Assistant",
                  description:
                    "Intelligent chatbot with natural language processing, context awareness, and multi-language support.",
                  technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
                  status: "In Progress",
                },
              ].map((project, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(23, 23, 23, 0.3)"
                    borderRadius="12px"
                    borderColor="rgb(38, 38, 38)"
                    glareColor="#ffffff"
                    glareOpacity={0.1}
                    glareAngle={-45}
                    glareSize={200}
                    transitionDuration={600}
                    className="group"
                  >
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
                          {project.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
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

                      <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlareHover>
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
