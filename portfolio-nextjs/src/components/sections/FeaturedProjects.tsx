"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "TEDxKCMT",
    description: "A website built for the TEDxKCMT club's event. Clean design reflecting the TEDx brand with modern aesthetics.",
    image: "/projects/tedx.png",
    tags: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/sijomonps/Tedxkcmt",
    live: null,
    emoji: "🎤",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 2,
    title: "Handmade Crafts Shop",
    description: "A responsive e-commerce website for handmade crafts. Features product listings with mobile-friendly design.",
    image: "/projects/crafts.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sijomonps/Shopping-Website-for-my-Friend",
    live: null,
    emoji: "🛍️",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Idea2Patent",
    description: "A web application project focused on innovation and patent ideas. Modern UI with clean functionality.",
    image: "/projects/idea2patent.png",
    tags: ["CSS", "Web App"],
    github: "https://github.com/sijomonps/Idea2Patent",
    live: null,
    emoji: "💡",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 4,
    title: "Library Management",
    description: "A library management system with intuitive interface for managing books and users efficiently.",
    image: "/projects/library.png",
    tags: ["CSS", "Management System"],
    github: "https://github.com/sijomonps/Library-Managament",
    live: null,
    emoji: "📚",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 bg-[#111] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl bg-[#161616] border border-[#222] overflow-hidden"
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#1a1a1a] text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
            >
              View All Projects
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
