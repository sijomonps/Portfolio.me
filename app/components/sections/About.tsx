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

          <div className="space-y-10">
            <AnimatedText>
              <div className="space-y-5 font-sans text-base sm:text-lg leading-relaxed text-foreground/85">
                <p>
                  My journey into development started with creativity.
                  During my Commerce degree, I spent most of my time building
                  skills in video editing, portrait drawing, and expressing ideas
                  visually. Stepping out of my comfort zone during college helped
                  me grow, take initiative, and confidently showcase my work.
                </p>
                <p>
                  That creative mindset naturally led me into software
                  development. Today, I build modern web applications with
                  a focus on real-world impact, bringing the same creativity,
                  attention to detail, and curiosity into every project.
                  I aim to grow in an environment where I can take ownership
                  and learn by working on real challenges.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-4xl tracking-wide uppercase font-bold text-foreground">
                  CAREER GOALS
                </h2>
                <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/85">
                  I am looking for opportunities where I can contribute as a Full-Stack or Web Developer,
                  gain hands-on product experience, and grow into a dependable engineer who builds scalable,
                  user-friendly digital solutions.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  )
}