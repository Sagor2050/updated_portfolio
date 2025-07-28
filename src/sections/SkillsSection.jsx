import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus, SiPostgresql, SiTailwindcss, SiVite, SiFirebase, SiGithub,
} from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-400", level: 85 },
      { name: "Python", icon: <FaPython />, color: "text-yellow-400", level: 90 },
      { name: "Java", icon: <FaJava />, color: "text-red-400", level: 80 },
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", level: 88 },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300", level: 85 },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React.js", icon: <FaReact />, color: "text-cyan-300", level: 90 },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400", level: 80 },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400", level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400", level: 85 },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400", level: 70 },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-300", level: 88 },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-200", level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300", level: 75 },
    ],
  },
  {
    category: "Course Work",
    items: [
      { name: "DSA (C++)", icon: <SiCplusplus />, color: "text-blue-400", level: 85 },
      { name: "OOP (Java)", icon: <FaJava />, color: "text-red-400", level: 80 },
      { name: "Web Dev", icon: <FaReact />, color: "text-cyan-300", level: 90 },
      { name: "Computing in Python", icon: <FaPython />, color: "text-yellow-400", level: 85 },
    ],
  },
];

export default function SkillsSection() {
  const [progress, setProgress] = useState(skills.flatMap(group => group.items.map(() => 0)));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate progress fill when visible
  useEffect(() => {
    if (!visible) return;

    const totalSkills = skills.flatMap(group => group.items);
    let currentProgress = [...progress];

    const interval = setInterval(() => {
      let updated = currentProgress.map((val, i) => {
        const target = totalSkills[i].level;
        return val < target ? val + 2 : val;
      });
      currentProgress = updated;
      setProgress(updated);

      // Stop when all skills reach target
      if (updated.every((val, i) => val >= totalSkills[i].level)) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 bg-[#0f0c29] text-white"
    >
      <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
        Technical Skills
      </h3>
      <div className="space-y-10 max-w-4xl mx-auto">
        {skills.map((group, groupIndex) => (
          <div key={group.category}>
            <h4 className="text-xl font-semibold text-indigo-400 mb-6">
              {group.category}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((skill, skillIndex) => {
                const flatIndex =
                  skills
                    .slice(0, groupIndex)
                    .reduce((sum, g) => sum + g.items.length, 0) + skillIndex;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]"
                  >
                    {/* Circular Progress */}
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: `conic-gradient(#06b6d4 ${progress[flatIndex]}%, #1c1b2f 0%)`,
                        transition: "background 0.3s linear",
                      }}
                    >
                      <div className="absolute w-16 h-16 rounded-full bg-[#0f0c29] flex items-center justify-center text-2xl">
                        <span className={skill.color}>{skill.icon}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
