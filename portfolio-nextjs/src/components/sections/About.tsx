"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Video, Rocket, Palette, Coffee, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Code, label: "Web Developer", color: "text-blue-400" },
  { icon: Video, label: "Video Editor", color: "text-pink-400" },
  { icon: Rocket, label: "Creator", color: "text-green-400" },
  { icon: Palette, label: "Designer", color: "text-purple-400" },
];

const facts = [
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Code, value: "50K+", label: "Lines of Code" },
  { icon: Heart, value: "100%", label: "Passion" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-[#111] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(124, 58, 237, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="about-text">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I&apos;m Sijomon P S 👋
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a creative developer based in{" "}
                <span className="text-violet-400 font-semibold">Thiruvalla, Kerala</span>, 
                passionate about bringing ideas to life through code and design.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                With expertise in web development and video editing, I bridge the gap 
                between technical functionality and creative expression. I believe in 
                creating digital experiences that are not only visually appealing but 
                also intuitive and user-friendly.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently learning and growing every day, I&apos;m always excited to take 
                on new challenges and collaborate on innovative projects. Whether it&apos;s 
                a website, web application, or video content, I bring dedication and 
                creativity to every project I undertake.
              </p>
            </div>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#333]"
                >
                  <item.icon size={18} className={item.color} />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group p-6 rounded-2xl bg-[#161616] border border-[#222] text-center overflow-hidden"
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <fact.icon className="w-8 h-8 mx-auto mb-3 text-violet-400" />
                  <div className="text-2xl font-bold text-white mb-1">{fact.value}</div>
                  <div className="text-sm text-gray-500">{fact.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
