'use client'

import Script from "next/script"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import CourseTimeline from "./components/education/CourseTimeline"
import Navbar from "./components/common/Navbar"
import MySkills from './components/sections/MySkills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Gallery from './components/sections/Gallery'
import SectionJumpToggle from './components/common/SectionJumpToggle'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Sijomon P S",
        url: "https://sijomonps.github.io/",
        jobTitle: "Full-Stack Developer",
        image: "https://sijomonps.github.io/avatar.jpg",
        email: "mailto:sijomon700@gmail.com",
        sameAs: [
          "https://github.com/sijomonps",
          "https://www.linkedin.com/in/sijomonps/",
        ],
      },
      {
        "@type": "WebSite",
        name: "Sijomon P S Portfolio",
        url: "https://sijomonps.github.io/",
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MySkills />

        <section id="education" className="min-h-screen w-full flex items-center justify-center px-6 py-16 sm:px-12">
          <div className="w-full max-w-5xl">
            <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>
            <CourseTimeline />
          </div>
        </section>

        <Experience />
        <Projects />
        <Gallery />
      </main>
      <SectionJumpToggle />
    </>
  )
}
