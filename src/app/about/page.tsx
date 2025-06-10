export default function About() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="h-screen snap-start bg-black flex flex-col justify-center">
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
              About Me
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-64 h-64 mx-auto md:mx-0 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  Hi, I'm Naman Verma
                </h2>
                <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                  A passionate full-stack developer with a love for creating
                  beautiful, functional, and user-friendly applications. I have
                  experience in modern web technologies and enjoy turning
                  complex problems into simple, elegant solutions.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, reading tech blogs, or working on personal
                  projects that challenge me to grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="h-screen snap-start bg-neutral-950 flex flex-col justify-center">
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                  ],
                  icon: "🎨",
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "REST APIs",
                  ],
                  icon: "⚙️",
                },
                {
                  category: "Tools & Other",
                  skills: [
                    "Git",
                    "Docker",
                    "AWS",
                    "Figma",
                    "VS Code",
                    "Postman",
                  ],
                  icon: "🛠️",
                },
              ].map((skillSet, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg transition duration-300"
                >
                  <div className="text-4xl mb-4 text-center">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">
                    {skillSet.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-neutral-300 text-center"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience/Timeline Section */}
      <section className="h-screen snap-start bg-black flex flex-col justify-center">
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              My Journey
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Full-Stack Developer",
                  company: "Current Position",
                  description:
                    "Building scalable web applications and leading frontend development initiatives.",
                },
                {
                  year: "2023",
                  title: "Frontend Developer",
                  company: "Previous Company",
                  description:
                    "Focused on React development and creating responsive user interfaces.",
                },
                {
                  year: "2022",
                  title: "Started Coding Journey",
                  company: "Self-taught",
                  description:
                    "Began learning web development through online courses and personal projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 p-6 rounded-lg hover:bg-neutral-950 transition duration-300"
                >
                  <div className="md:w-24 flex-shrink-0">
                    <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 mb-2">{item.company}</p>
                    <p className="text-neutral-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
