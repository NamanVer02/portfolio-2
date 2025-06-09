"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header Stats */}
      <header className="bg-black/80 backdrop-blur-sm">
        <div className="px-4 py-4">
          <div className="flex items-center">
            <img 
              src="/logo-light.svg" 
              alt="Logo" 
              className="w-10 h-10"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8">
            Building amazing digital experiences
          </p>
          <button className="bg-white hover:bg-neutral-200 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
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
