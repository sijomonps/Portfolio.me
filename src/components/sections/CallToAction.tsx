"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-10 bg-purple-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute inset-20 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            Open to Collaborations
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Create <span className="gradient-text">Something Amazing</span> Together
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;m always excited to 
            discuss new opportunities and creative ideas. Let&apos;s connect and build 
            something extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <a
              href="https://github.com/sijomonps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View GitHub
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-[#222]"
        >
          <p className="text-gray-500 mb-4">Or drop me an email directly at</p>
          <a
            href="mailto:sijomon700@gmail.com"
            className="text-xl font-semibold text-violet-400 hover:text-violet-300 transition-colors"
          >
            sijomon700@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
