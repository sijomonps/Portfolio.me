"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Project Manager",
    company: "Tech Company",
    image: "https://avatars.githubusercontent.com/u/150378561?v=4",
    content: "Sijomon delivered exceptional work on our project. His attention to detail and creative approach made our website stand out. Highly recommended!",
  },
  {
    id: 2,
    name: "Colleague",
    role: "Designer",
    company: "Creative Studio",
    image: "https://avatars.githubusercontent.com/u/150378561?v=4",
    content: "Working with Sijomon was a pleasure. He understood our vision perfectly and translated it into beautiful, functional code.",
  },
  {
    id: 3,
    name: "Mentor",
    role: "Senior Developer",
    company: "Tech Institute",
    image: "https://avatars.githubusercontent.com/u/150378561?v=4",
    content: "Sijomon shows great potential and dedication. His quick learning ability and passion for development are truly impressive.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Feedback from people I&apos;ve worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-2xl bg-[#161616] border border-[#222] overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Quote Icon */}
              <div className="relative mb-4">
                <Quote className="w-10 h-10 text-violet-500/30" />
              </div>

              {/* Content */}
              <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#333]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
