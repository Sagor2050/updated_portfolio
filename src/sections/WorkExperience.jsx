import React from "react";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

export default function WorkExperience() {
  const workExperience = [
    {
      title: "Research Assistant",
      company: "Brooklyn College, CUNY",
      location: "Brooklyn, NY",
      duration: "July 2025 – Present",
      description:
        "Conducting research on curriculum mining, software vulnerabilities, and defect detection. Actively contributing to open-source academic repositories, code reviews, and automation pipelines under the guidance of Prof. Hui Chen.",
      link: "mailto:hui.chen@brooklyn.cuny.edu", // Professor contact
      technologies: [<FaPython />, <SiGithub />],
    },
    {
      title: "Volunteer Web Developer",
      company: "Bangladeshi Student Organization, Brooklyn College",
      location: "Brooklyn, NY",
      duration: "March 2024 – Present",
      description:
        "Designed and developed a responsive community platform serving 500+ users. Implemented secure authentication with JWT/OAuth and integrated Stripe for donations. Built with React, Next.js, and Node.js, ensuring real-time data handling and PostgreSQL optimization.",
      technologies: [<FaReact />, <SiNextdotjs />, <FaNodeJs />, <SiPostgresql />],
    },
    {
      title: "IT Support Specialist",
      company: "SHBO",
      location: "Dhaka, Bangladesh",
      duration: "Feb 2020 – May 2021",
      description:
        "Provided IT support and maintained the company’s website using HTML, CSS, and JavaScript. Ensured stable operations for 15+ staff and increased event traffic by 30% through digital initiatives and social media strategy.",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
  ];

  return (
    <section id="work" className="py-20 px-6 bg-[#0f0c29] text-white">
      <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
        Work Experience
      </h3>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-cyan-400 transition-transform duration-300 hover:scale-105"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h4 className="text-xl font-semibold text-cyan-300">
                {job.title}
              </h4>
              <p className="text-sm text-gray-300 italic">
                {job.duration}
              </p>
            </div>

            {/* Company & Location */}
            <p className="text-sm text-gray-400 mb-3">
              {job.company}, {job.location}
              {job.link && (
                <>
                  {" "}
                  —{" "}
                  <a
                    href={job.link}
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </>
              )}
            </p>

            {/* Description */}
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              {job.description}
            </p>

            {/* Tech Icons */}
            <div className="flex flex-wrap gap-3">
              {job.technologies.map((Icon, i) => (
                <div
                  key={i}
                  className="text-xl bg-[#1c1b2f] p-2 rounded-full hover:scale-110 transition-transform"
                >
                  {Icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
