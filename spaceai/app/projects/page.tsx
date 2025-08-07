"use client";
import Image from "next/image";
import { FiExternalLink, FiCode, FiUsers } from "react-icons/fi";

const projects = [
  {
    title: "AI Resume Parser",
    image: "/images/slider-1-1.jpg",
    description:
      "Built an AI-powered resume parser using OpenAI APIs and Python. Extracts, scores, and classifies resumes based on job roles with 93% accuracy.",
    tech: ["Python", "OpenAI", "FastAPI", "MongoDB"],
    link: "https://github.com/your-repo/resume-parser",
  },
  {
    title: "Turf Booking Platform",
    image: "/images/slider-1-2.jpg",
    description:
      "Developed a full-stack turf booking system using Next.js and FastAPI. Admin dashboard, real-time slot availability, and secure payments integrated.",
    tech: ["Next.js", "Tailwind", "FastAPI", "Stripe"],
    link: "#",
  },
  {
    title: "Car Accessories Brand (Fallinns)",
    image: "/images/about-five-1-2.jpg",
    description:
      "End-to-end eCommerce brand setup including branding, Shopify store, product photography, and marketing automations.",
    tech: ["Shopify", "Klaviyo", "Meta Ads", "GTM"],
    link: "#",
  },
  {
    title: "SaaS Dashboard for MSME Research",
    image: "/images/slider-1-1.jpg",
    description:
      "Created a dashboard that collects online market data, structures it by product categories, and generates instant reports for startups.",
    tech: ["Python", "BeautifulSoup", "Tailwind", "Next.js"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-white text-gray-900">
      {/* Hero */}
      <div className="text-center py-24 px-6 bg-[#f4f2ff]">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          A collection of real-world work I've built to solve client problems, launch businesses, and experiment with modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-purple-700 font-medium mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-700 font-semibold text-sm hover:underline"
                >
                  View Project <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#a259ff] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Build Something Similar?</h2>
        <p className="mb-6">Let’s talk. I can help you bring your idea to life.</p>
        <a
          href="/contact"
          className="bg-white text-[#a259ff] px-6 py-3 font-semibold rounded-full hover:shadow-lg transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
