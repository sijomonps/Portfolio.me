"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Web Developer",
  "Video Editor",
  "Creative Designer",
  "Content Creator",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText === role) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
      );
      gsap.fromTo(
        ".hero-stats",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work
            </motion.div>

            {/* Title */}
            <h1 ref={textRef} className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-400">Hello, I&apos;m</span>
              <br />
              <span className="gradient-text">Sijomon P S</span>
            </h1>

            {/* Typewriter */}
            <div className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-4 h-8">
              A passionate{" "}
              <span className="text-violet-400 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="hero-subtitle text-gray-500 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Crafting beautiful digital experiences through code and creativity. 
              I love building sleek websites and creating engaging visual content 
              that leaves a lasting impression.
            </p>

            {/* Stats */}
            <div className="hero-stats flex flex-wrap justify-center lg:justify-start gap-8 mb-10 py-6 border-y border-[#222]">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">26+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">220+</div>
                <div className="text-sm text-gray-500">Contributions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/projects">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles size={18} />
                  View Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin-slow" />
              
              {/* Inner Glow Ring */}
              <div className="absolute inset-4 rounded-full border border-violet-500/20 animate-pulse-ring" />

              {/* Avatar */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-[#333] shadow-2xl">
                <Image
                  src="https://avatars.githubusercontent.com/u/150378561?v=4"
                  alt="Sijomon P.S"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-violet-600 flex items-center justify-center text-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-pink-600 flex items-center justify-center text-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                🎬
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-500" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
