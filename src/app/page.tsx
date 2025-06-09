export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8">
            Building amazing digital experiences
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
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
                className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
