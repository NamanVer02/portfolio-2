export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
      image: "🛒",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "PostgreSQL",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team functionality.",
      image: "📋",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/taskmanager",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "🌤️",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization.",
      image: "📊",
      technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description:
        "A mobile-first recipe application with search, favorites, and meal planning features.",
      image: "🍳",
      technologies: ["React Native", "Expo", "Firebase", "Spoonacular API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/recipe-finder",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Framer Motion.",
      image: "💼",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              My Projects
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              Here are some of the projects I've worked on. Each one represents
              a unique challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <div className="p-8">
                    <div className="text-6xl mb-6 text-center">
                      {project.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-3">
                        TECHNOLOGIES USED
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-black hover:bg-gray-800 text-white text-center py-3 px-6 rounded-lg transition duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-black hover:bg-black hover:text-white text-black text-center py-3 px-6 rounded-lg transition duration-300"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
                >
                  <div className="text-4xl mb-4 text-center">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white text-gray-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white text-gray-600 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black hover:bg-gray-800 text-white text-center py-2 px-4 rounded text-sm transition duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black hover:bg-black hover:text-white text-black text-center py-2 px-4 rounded text-sm transition duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "TypeScript", icon: "📘" },
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "AWS", icon: "☁️" },
                { name: "Docker", icon: "🐳" },
                { name: "Git", icon: "📦" },
                { name: "Figma", icon: "🎨" },
                { name: "Tailwind", icon: "💨" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's collaborate on your next project and bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}
