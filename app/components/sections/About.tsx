'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

export default function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const assetPath = (path: string) => `${basePath}${path}`

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 sm:px-12">
      <div className="relative max-w-3xl w-full">
        <div className="space-y-12">
          <AnimatedText>
            <div className="flex flex-col items-center mb-8">
              <Image
                className="rounded-full border border-black/10 dark:border-white/20 shadow-xl mb-6"
                src={assetPath("/avatar.jpg")}
                alt="Profile Picture"
                width={120}
                height={120}
                priority
              />
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wider uppercase font-bold text-center">
                ABOUT ME
              </h1>
            </div>
          </AnimatedText>

          <div className="space-y-8 sm:space-y-10">
            <AnimatedText>
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase font-bold text-foreground">
                  Creative Foundation
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 font-sans text-base sm:text-lg leading-relaxed text-foreground/85 marker:text-foreground/40">
                  <li>Started with video editing, portrait drawing, and visual storytelling.</li>
                  <li>Developed creativity, attention to detail, and confidence.</li>
                </ul>
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase font-bold text-foreground">
                  Development Journey
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 font-sans text-base sm:text-lg leading-relaxed text-foreground/85 marker:text-foreground/40">
                  <li>Transitioned from Commerce into software development through continuous learning.</li>
                  <li>Build modern full-stack web applications and deploy them independently.</li>
                </ul>
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase font-bold text-foreground">
                  Career Goals
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 font-sans text-base sm:text-lg leading-relaxed text-foreground/85 marker:text-foreground/40">
                  <li>Seeking opportunities as a Full-Stack or Web Developer.</li>
                  <li>Passionate about Web, Cloud, and DevOps technologies.</li>
                </ul>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  )
}