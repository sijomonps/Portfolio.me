"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/sijomonps", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sijomonps/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/zeejo.ae/", icon: Instagram, label: "Instagram" },
  { href: "mailto:sijomon700@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111] border-t border-[#222] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <motion.span
                className="text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                S<span className="text-violet-500">.</span>
              </motion.span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Crafting digital experiences with passion and precision. Let&apos;s build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-600 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Sijomon P.S. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> in Kerala
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
