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
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'MARIANRESEARCH',
    category: 'Live Project',
    summary:
      'Research management platform developed for Marian College Kuttikkanam to streamline research paper submission, review, approval, and administration through a role-based workflow.',
    stack: ['Node.js', 'Express.js','Next.js', 'MongoDB', 'Docker'],
    highlights: [
      
    ],
    impact: 'Full Stack',
    link: 'https://research-portal-marian.vercel.app/',
    featured: true,
  },
  {
    title: 'MarkGPT',
    category: 'Chrome Extension',
    summary:
      'Chrome extension that helps users bookmark important conversations across ChatGPT, Claude, and Gemini - Ai Assisted Project',
    stack: ['JavaScript', 'HTML', 'PowerShell'],
    highlights: [
    
    ],
    impact: '120+ Users',
    link: 'https://chromewebstore.google.com/detail/eimdlmdbonaemjmfnnnknjejlijpmcij?utm_source=item-share-cb',
    github: 'https://github.com/sijomonps/MarkGPT',
    featured: false,
  },
  {
    title: 'TEDxKCMT Event Website',
    category: 'Event Website',
    summary:
      'Official TEDxKCMT event website created to improve event visibility and simplify ticket registrations - No Ai Used',
    stack: ['HTML', 'CSS'],
    highlights: [
    ],
    impact: 'Real Event Website',
    link: 'https://sijomonps.github.io/Tedxkcmt/',
    github: 'https://github.com/sijomonps/Tedxkcmt',
  },
  {
    title: 'Flappy Aljo',
    category: 'Browser Game',
    summary:
      "Fun competitive browser game built using a friend's face, custom sounds, and leaderboard mechanics - Ai Assisted Project'",
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    highlights: [
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
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wider uppercase font-bold text-foreground">
              FEATURED PROJECTS
            </h1>
            <p className="mt-3 max-w-2xl mx-auto font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
              I enjoy building practical products that solve real problems, improve workflows, and create engaging user experiences.
            </p>
          </div>
        </AnimatedText>
        
        <div className="relative z-0 mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <AnimatedText key={project.title}>
              <article
                className={`group relative h-full overflow-hidden rounded-xl border bg-white/[0.08] p-4 sm:p-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20 ${
                  project.featured
                    ? 'md:col-span-2 border-amber-400/50 shadow-amber-900/30 md:p-6'
                    : 'border-white/15'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-xl ring-1 ring-amber-400/30" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-sans rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-foreground/80">
                      {project.category}
                    </span>
                    <span className="font-sans rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] sm:text-xs font-medium text-foreground/80">
                      {project.impact}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-bold text-foreground leading-none">{project.title}</h2>
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-foreground/80 transition-colors duration-300 hover:text-foreground"
                      >
                        GitHub
                        <FiArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-normal sm:leading-relaxed">{project.summary}</p>

                <div className="mt-3 space-y-1 text-xs sm:text-sm text-foreground/75">
                  {project.highlights.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 px-2 py-0.5 text-[10px] sm:text-xs dark:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide underline underline-offset-4"
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