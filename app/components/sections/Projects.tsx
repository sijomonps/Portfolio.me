'use client'

import AnimatedText from '../common/AnimatedText'
import GradientBackground from '../common/GradientBackground'
import { FiArrowUpRight } from 'react-icons/fi'

type Project = {
  title: string
  category: string
  summary: string
  stack: string[]
  highlights: string[]
  impact: string
  link: string
  github: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'MarkGPT',
    category: 'Chrome Extension',
    summary:
      'Chrome extension that helps users bookmark important conversations across ChatGPT, Claude, and Gemini.',
    stack: ['JavaScript', 'HTML', 'PowerShell'],
    highlights: [
      'Built bookmarking system for AI chats.',
      'Works across multiple AI platforms.',
      '60+ users actively using extension.',
    ],
    impact: '60+ Users',
    link: 'https://chromewebstore.google.com/detail/eimdlmdbonaemjmfnnnknjejlijpmcij?utm_source=item-share-cb',
    github: 'https://github.com/sijomonps/MarkGPT',
    featured: true,
  },
  {
    title: 'Focus - Study Management System',
    category: 'Productivity App',
    summary:
      'Productivity-focused study management platform built to help students organize learning and track progress efficiently.',
    stack: ['Django', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Introduced to 30+ users.',
      'Improved features using real feedback.',
      'Focused on usability and productivity.',
    ],
    impact: '30+ Users Introduced',
    link: 'https://f0cus.pythonanywhere.com/',
    github: 'https://github.com/sijomonps/FOCUS_MiniProjectMCA-2',
  },
  {
    title: 'TEDxKCMT Event Website',
    category: 'Event Website',
    summary:
      'Official TEDxKCMT event website created to improve event visibility and simplify ticket registrations.',
    stack: ['HTML', 'CSS'],
    highlights: [
      'Built for real TEDx event.',
      'Deployed and used publicly.',
      'Improved registration accessibility.',
    ],
    impact: 'Real Event Website',
    link: 'https://sijomonps.github.io/Tedxkcmt/',
    github: 'https://github.com/sijomonps/Tedxkcmt',
  },
  {
    title: 'Flappy Aljo',
    category: 'Browser Game',
    summary:
      "Fun competitive browser game built using a friend's face, custom sounds, and leaderboard mechanics.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    highlights: [
      '50+ classmates played competitively.',
      'Real-time leaderboard system.',
      'Created as a fun community experience.',
    ],
    impact: '50+ Players',
    link: 'https://sijomonps.github.io/My-Flappy-Aljo/',
    github: 'https://github.com/sijomonps/My-Flappy-Aljo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 sm:px-10 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#B45309',
            end: '#7C2D12'
          }}
        />

        <AnimatedText>
          <div className="text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Featured Projects
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-foreground/80">
              I enjoy building practical products that solve real problems, improve workflows, and create engaging user experiences.
            </p>
          </div>
        </AnimatedText>
        
        <div className="relative z-0 mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <AnimatedText key={project.title}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border bg-white/[0.08] p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20 ${
                  project.featured
                    ? 'md:col-span-2 border-amber-400/50 shadow-amber-900/30 md:p-7'
                    : 'border-white/15'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-400/30" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold text-foreground/80">
                      {project.impact}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold leading-tight">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      Live
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      GitHub
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-foreground/80 leading-relaxed">{project.summary}</p>

                <div className="mt-5 space-y-2 text-sm text-foreground/75">
                  {project.highlights.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide underline underline-offset-4"
                >
                  View Project
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </AnimatedText>
          ))}
        </div>

        <div className="relative z-10 mt-8 flex justify-center">
          <a
            href="https://github.com/sijomonps?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-105 transition transform duration-200 dark:bg-black dark:text-white"
            aria-label="View more projects on GitHub"
          >
            View more projects (30+)
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}