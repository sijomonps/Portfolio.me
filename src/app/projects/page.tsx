"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TEDxKCMT",
    description: "A website built for the TEDxKCMT club's event. Clean design reflecting the TEDx brand with modern aesthetics and smooth user experience.",
    tags: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/sijomonps/Tedxkcmt",
    live: null,
    emoji: "🎤",
    color: "from-red-500 to-orange-500",
    category: "web",
  },
  {
    id: 2,
    title: "Handmade Crafts Shop",
    description: "A responsive e-commerce website for handmade crafts. Features product listings with mobile-friendly design and beautiful product showcase.",
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sijomonps/Shopping-Website-for-my-Friend",
    live: null,
    emoji: "🛍️",
    color: "from-pink-500 to-rose-500",
    category: "web",
  },
  {
    id: 3,
    title: "Idea2Patent",
    description: "A web application project focused on innovation and patent ideas. Modern UI with clean functionality and intuitive navigation.",
    tags: ["CSS", "Web App"],
    github: "https://github.com/sijomonps/Idea2Patent",
    live: null,
    emoji: "💡",
    color: "from-yellow-500 to-amber-500",
    category: "web",
  },
  {
    id: 4,
    title: "Library Management",
    description: "A library management system with intuitive interface for managing books and users efficiently. Complete CRUD operations support.",
    tags: ["CSS", "Management System"],
    github: "https://github.com/sijomonps/Library-Managament",
    live: null,
    emoji: "📚",
    color: "from-blue-500 to-indigo-500",
    category: "web",
  },
  {
    id: 5,
    title: "CYDATA Event",
    description: "Event website for CYDATA with modern design and smooth user experience for attendees. Features event schedule and registration.",
    tags: ["CSS", "Event Website"],
    github: "https://github.com/sijomonps/CYDATA_event",
    live: null,
    emoji: "🎯",
    color: "from-green-500 to-emerald-500",
    category: "web",
  },
  {
    id: 6,
    title: "Insight Stickers",
    description: "Creative project featuring insights and visual content with engaging design elements and interactive components.",
    tags: ["CSS", "Creative"],
    github: "https://github.com/sijomonps/insightstikers",
    live: null,
    emoji: "📊",
    color: "from-purple-500 to-violet-500",
    category: "creative",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "creative", label: "Creative" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects I&apos;ve worked on. Each project represents 
              a unique challenge and learning opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-violet-600 text-white"
                    : "bg-[#161616] text-gray-400 border border-[#333] hover:border-violet-500"
                }`}
              >
                {category.id !== "all" && <Filter size={14} />}
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-2xl bg-[#161616] border border-[#222] overflow-hidden"
                >
                  {/* Project Image */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl opacity-50 group-hover:scale-125 transition-transform duration-500">
                        {project.emoji}
                      </span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/sijomonps?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
              >
                <Github size={18} />
                View All on GitHub
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
