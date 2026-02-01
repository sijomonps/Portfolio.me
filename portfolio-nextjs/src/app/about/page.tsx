"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Code,
  Video,
  Palette,
  Rocket,
  MapPin,
  Calendar,
  Heart,
  Coffee,
  Zap,
  Target,
  Lightbulb,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "2024",
    title: "Expanding Skills",
    description: "Learning React, Next.js, and TypeScript. Building more complex web applications.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Started Web Development",
    description: "Began my journey into web development, learning HTML, CSS, and JavaScript.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Video Editing Journey",
    description: "Started exploring video editing with Premiere Pro and After Effects.",
    icon: Video,
  },
];

const values = [
  {
    icon: Target,
    title: "Attention to Detail",
    description: "Every pixel matters. I obsess over the small things that make a big difference.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Finding unique solutions to problems and bringing fresh perspectives to projects.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Technology evolves fast. I stay curious and keep learning new skills.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great work comes from great teamwork. I value open communication and feedback.",
  },
];

const facts = [
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Code, value: "50K+", label: "Lines of Code" },
  { icon: Heart, value: "100%", label: "Passion" },
  { icon: Zap, value: "∞", label: "Ideas" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".timeline-section",
            start: "top 80%",
          },
        }
      );

      // Values animation
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 rotate-6" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 -rotate-6" />
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#333]">
                  <Image
                    src="https://avatars.githubusercontent.com/u/150378561?v=4"
                    alt="Sijomon P.S"
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-lg"
                >
                  Web Developer
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-pink-600 text-white text-sm font-semibold shadow-lg"
                >
                  Video Editor
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              
              <div className="flex items-center gap-4 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-violet-400" />
                  <span>Thiruvalla, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-violet-400" />
                  <span>Available for Work</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Hi there! I&apos;m <span className="text-white font-semibold">Sijomon P S</span>, 
                a creative developer passionate about bringing ideas to life through code and design.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                With expertise in web development and video editing, I bridge the gap between 
                technical functionality and creative expression. I believe in creating digital 
                experiences that are not only visually appealing but also intuitive and user-friendly.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                When I&apos;m not coding or editing videos, you can find me exploring new technologies, 
                watching movies, or working on personal creative projects.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Code, label: "Web Developer" },
                  { icon: Video, label: "Video Editor" },
                  { icon: Palette, label: "Designer" },
                  { icon: Rocket, label: "Creator" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-[#333]"
                  >
                    <item.icon size={16} className="text-violet-400" />
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-[#111] border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <fact.icon className="w-8 h-8 mx-auto mb-3 text-violet-400" />
                <div className="text-3xl font-bold gradient-text mb-1">{fact.value}</div>
                <div className="text-sm text-gray-500">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that guide my work and approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card group p-6 rounded-2xl bg-[#161616] border border-[#222] hover:border-violet-500/50 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <value.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-500">A brief timeline of my development path</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500" />

            {timeline.map((item, index) => (
              <div key={index} className="timeline-item relative flex gap-8 mb-12 last:mb-0">
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#161616] border border-[#333] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <span className="text-violet-400 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
