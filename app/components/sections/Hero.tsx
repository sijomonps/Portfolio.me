'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"
import HeroVideoBackground from "./HeroVideoBackground"

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const assetPath = (path: string) => `${basePath}${path}`
  const resumeUrl = "/Resume.pdf"

  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)
    return () => mediaQuery.removeEventListener('change', handleMotionChange)
  }, [])

  return (
    <section
      id="home"
      className={`relative w-full ${isReducedMotion ? 'min-h-screen py-16' : 'h-[500vh]'}`}
    >
      <div className={`${isReducedMotion ? 'relative min-h-screen' : 'sticky top-0 h-screen'} w-full overflow-hidden flex flex-col justify-between px-6 pt-24 pb-8 sm:px-12`}>
        <HeroVideoBackground assetPath={assetPath} isReducedMotion={isReducedMotion} />
        <FloatingElements />

        {/* Center Editorial Title Block (Visual Focus of the Hero) */}
        <main className="relative z-10 mx-auto my-auto flex flex-col items-center justify-center text-center space-y-4 px-4">
          <AnimatedText className="flex flex-col items-center text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/50 font-semibold mb-2">
              Thiruvalla, Kerala, India
            </p>
            <h1 className="font-display text-7xl sm:text-9xl md:text-[10rem] tracking-wider uppercase font-bold text-foreground leading-none drop-shadow-2xl">
              SIJOMON P S
            </h1>
            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground/80 font-medium mt-3">
              Full-Stack Developer | MCA Student
            </p>
          </AnimatedText>
        </main>

        {/* Bottom Editorial Content Bar (Anchored at the Bottom) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <AnimatedText>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/85 font-normal max-w-3xl">
                Commerce to code — I chose curiosity over comfort. Now I build real web 
                applications and look forward to growing fast by taking ownership in a 
                small, driven team.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                {/* Social & Action Links */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    className="
                      font-sans text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-9 px-4
                    "
                    href="https://github.com/sijomonps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="invert dark:invert-0 mr-2"
                      src={assetPath("/github.svg")}
                      alt="GitHub"
                      width={16}
                      height={16}
                    />
                    GitHub
                  </a>

                  <a
                    className="
                      font-sans text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-9 px-4
                    "
                    href="https://www.linkedin.com/in/sijomonps/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert mr-2"
                      src={assetPath("/linkedin.svg")}
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                    LinkedIn
                  </a>

                  <a
                    className="
                      font-sans text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-9 px-4
                    "
                    href="mailto:sijomon700@gmail.com"
                  >
                    <Image
                      className="dark:invert mr-2"
                      src={assetPath("/mail.svg")}
                      alt="Email"
                      width={16}
                      height={16}
                    />
                    Email Me
                  </a>

                  <a
                    className="
                      font-sans text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-9 px-4
                    "
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert mr-2"
                      src={assetPath("/resume.svg")}
                      alt="Resume"
                      width={16}
                      height={16}
                    />
                    Resume
                  </a>
                </div>

                {/* Secondary Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-foreground/60">
                  <a className="hover:text-foreground transition-colors" href="tel:+916235719647">
                    +91 62357 19647
                  </a>
                  <a className="hover:text-foreground transition-colors" href="mailto:sijomon700@gmail.com">
                    sijomon700@gmail.com
                  </a>
                  <span>Open to roles</span>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}