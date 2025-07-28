import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
} from "react-icons/si";

export default function ProjectsSection() {
  const projects = [
    {
      name: "BCStudentMart",
      description:
        "A peer-to-peer marketplace for Brooklyn College students to buy, sell, or donate textbooks and essentials. Features include image uploads, real-time search, user authentication, chat, and donation integration.",
      techStack: [<FaReact />, <SiFirebase />, <SiVite />, <SiTailwindcss />],
      link: "https://sagor2050.github.io/BCStudentMart/",
    },
    {
      name: "Bangladeshi Student Organization Website",
      description:
        "Responsive website for 500+ students and 100+ active members. Implemented secure authentication (JWT/OAuth), Stripe donations, and optimized backend with PostgreSQL and real-time updates for seamless user experience.",
      techStack: [<FaReact />, <SiNextdotjs />, <FaNodeJs />, <SiPostgresql />, <FaStripe />],
      link: null, // No live link provided yet
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0f0c29] text-white">
      <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
        Featured Projects
      </h3>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-cyan-400 transition-transform duration-300 hover:scale-105"
          >
            {/* Project Title */}
            <h4 className="text-xl font-semibold text-cyan-300">
              {project.name}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-200 leading-relaxed mt-3">
              {project.description}
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.techStack.map((Icon, i) => (
                <div
                  key={i}
                  className="text-xl bg-[#1c1b2f] p-2 rounded-full hover:scale-110 transition-transform"
                >
                  {Icon}
                </div>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium text-sm hover:bg-cyan-300 transition"
              >
                View Project ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
