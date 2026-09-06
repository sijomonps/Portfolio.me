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

  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setTimeout(() => setIsReducedMotion(true), 0)
    }
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)
    return () => mediaQuery.removeEventListener('change', handleMotionChange)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between px-4 pt-16 pb-4 sm:px-12 sm:pt-24 sm:pb-8"
    >
      <HeroVideoBackground assetPath={assetPath} />
      {!isReducedMotion && <FloatingElements />}

      {/* Center Editorial Title Block (Visual Focus of the Hero) */}
      <div className="relative z-10 mx-auto my-auto flex flex-col items-center justify-center text-center space-y-2 sm:space-y-4 px-2 sm:px-4">
          <AnimatedText className="flex flex-col items-center text-center">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-foreground/50 font-semibold mb-1 sm:mb-2">
              Thiruvalla, Kerala, India
            </p>
            <h1 className="font-display text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[7rem] tracking-wider uppercase font-bold text-foreground leading-none drop-shadow-2xl">
              SIJOMON P S
            </h1>
            <p className="font-sans text-[10px] xs:text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-foreground/80 font-medium mt-1 sm:mt-3">
              Full-Stack Developer | Web • Cloud • DevOps
            </p>
          </AnimatedText>
        </div>

        {/* Bottom Editorial Content Bar (Anchored at the Bottom with Safe Area) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          <AnimatedText>
            <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-transparent p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
              <p className="text-center  mx-auto font-sans text-xs sm:text-sm md:text-base leading-relaxed text-foreground/85 font-normal max-w-3xl">
                Building modern web applications for freelance clients—from code to cloud.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                {/* Social & Action Links */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
                  <a
                    className="
                      font-sans text-[11px] sm:text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-8 sm:h-9 px-3 sm:px-4
                    "
                    href="https://github.com/sijomonps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="invert dark:invert-0 mr-1.5 sm:mr-2"
                      src={assetPath("/github.svg")}
                      alt="GitHub"
                      width={14}
                      height={14}
                    />
                    GitHub
                  </a>

                  <a
                    className="
                      font-sans text-[11px] sm:text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-8 sm:h-9 px-3 sm:px-4
                    "
                    href="https://www.linkedin.com/in/sijomonps/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert mr-1.5 sm:mr-2"
                      src={assetPath("/linkedin.svg")}
                      alt="LinkedIn"
                      width={14}
                      height={14}
                    />
                    LinkedIn
                  </a>

                  <a
                    className="
                      font-sans text-[11px] sm:text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-8 sm:h-9 px-3 sm:px-4
                    "
                    href="mailto:sijomon700@gmail.com"
                  >
                    <Image
                      className="dark:invert mr-1.5 sm:mr-2"
                      src={assetPath("/mail.svg")}
                      alt="Email"
                      width={14}
                      height={14}
                    />
                    Email
                  </a>

                  <a
                    className="
                      font-sans text-[11px] sm:text-xs tracking-wider uppercase font-medium
                      rounded-full border border-white/20 bg-white/10
                      transition-all flex items-center justify-center
                      hover:bg-white/20 text-foreground
                      h-8 sm:h-9 px-3 sm:px-4
                    "
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert mr-1.5 sm:mr-2"
                      src={assetPath("/resume.svg")}
                      alt="Resume"
                      width={14}
                      height={14}
                    />
                    Resume
                  </a>
                </div>

                {/* Secondary Meta Information */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-sans text-foreground/60">
                  <a className="hover:text-foreground transition-colors" href="tel:+916235719647">
                    +91 62357 19647
                  </a>
                  <a className="hover:text-foreground transition-colors" href="mailto:sijomon700@gmail.com">
                    sijomon700@gmail.com
                  </a>
                  <span>Lets Connect</span>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
    </section>
  )
}