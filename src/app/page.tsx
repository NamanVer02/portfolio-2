"use client";

import ShinyText from "./components/ShinyText";
import LiquidChrome from "./components/LiquidChrome";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen px-4 overflow-hidden">
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
        <div className="relative z-10 text-center">
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating responsive and modern web applications",
                icon: "💻",
              },
              {
                title: "UI/UX Design",
                description:
                  "Designing beautiful and intuitive user interfaces",
                icon: "🎨",
              },
              {
                title: "Mobile Apps",
                description: "Building cross-platform mobile applications",
                icon: "📱",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-neutral-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
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
      </section>
    </div>
  );
}
