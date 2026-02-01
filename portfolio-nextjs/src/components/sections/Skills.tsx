"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Video Editing",
    items: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Currently Learning",
    items: ["TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"],
    color: "from-violet-500 to-purple-500",
    isLearning: true,
  },
];

// Infinite marquee skills
const marqueeSkills = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", 
  "Tailwind CSS", "Node.js", "Git", "Figma", "Premiere Pro", "After Effects",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-6 py-3 rounded-full bg-[#161616] border border-[#333] text-gray-300 font-medium whitespace-nowrap hover:border-violet-500 hover:text-violet-400 transition-colors duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-[#161616] border border-[#222] overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Header */}
              <div className="relative mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-3`}>
                  <span className="text-white text-lg">
                    {groupIndex === 0 && "💻"}
                    {groupIndex === 1 && "🛠️"}
                    {groupIndex === 2 && "🎬"}
                    {groupIndex === 3 && "📚"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-sm ${
                      skillGroup.isLearning
                        ? "bg-violet-500/10 border border-violet-500/30 text-violet-400"
                        : "bg-[#1a1a1a] border border-[#333] text-gray-400"
                    } hover:border-violet-500 hover:text-white transition-colors duration-200`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
