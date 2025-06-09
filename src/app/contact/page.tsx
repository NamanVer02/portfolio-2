"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-300 mb-12">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-700 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-700 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-400 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-700 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-700 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-200 resize-vertical"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-white">
                    Let's Connect
                  </h2>
                  <p className="text-neutral-300 mb-8">
                    I'm always open to discussing new opportunities, interesting
                    projects, or just having a friendly chat about technology
                    and development.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "📧",
                      title: "Email",
                      value: "your.email@example.com",
                      link: "mailto:your.email@example.com",
                    },
                    {
                      icon: "📱",
                      title: "Phone",
                      value: "+1 (555) 123-4567",
                      link: "tel:+15551234567",
                    },
                    {
                      icon: "📍",
                      title: "Location",
                      value: "Your City, Country",
                      link: "#",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-2xl">{contact.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {contact.title}
                        </h3>
                        {contact.link.startsWith("#") ? (
                          <p className="text-neutral-300">{contact.value}</p>
                        ) : (
                          <a
                            href={contact.link}
                            className="text-neutral-300 hover:text-white transition duration-200"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "GitHub",
                        icon: "🐙",
                        link: "https://github.com/yourusername",
                      },
                      {
                        name: "LinkedIn",
                        icon: "💼",
                        link: "https://linkedin.com/in/yourprofile",
                      },
                      {
                        name: "Twitter",
                        icon: "🐦",
                        link: "https://twitter.com/yourusername",
                      },
                      {
                        name: "Portfolio",
                        icon: "🌐",
                        link: "https://yourwebsite.com",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition duration-300"
                        title={social.name}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's work together to bring your ideas to life.
          </p>
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-white hover:bg-neutral-200 text-black font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
