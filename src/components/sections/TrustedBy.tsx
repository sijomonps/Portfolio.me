"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🖌️" },
  { name: "Premiere Pro", icon: "🎬" },
];

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#111] border-y border-[#222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Technologies I Work With
          </h3>
          <p className="text-2xl font-bold">
            Building with <span className="gradient-text">Modern Tools</span>
          </p>
        </motion.div>

        {/* Infinite Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111] to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-2xl group-hover:border-violet-500 group-hover:bg-[#222] transition-all duration-200">
                  {logo.icon}
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
