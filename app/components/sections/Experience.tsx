'use client'

import AnimatedText from '../common/AnimatedText'
import GradientBackground from '../common/GradientBackground'
type Highlight = {
  title: string
  organization: string
  period: string
  points: string[]
}

const highlights: Highlight[] = [
  {
    title: 'Industry-Ready Full-Stack Certification',
    organization: 'NxtWave Disruptive Technologies',
    period: 'Dec 2023 - Present',
    points: [
      'Building practical projects across frontend and backend technologies.',
      'Strengthening real-world fundamentals through consistent coding practice.',
    ],
  },
  {
    title: 'NASA Space Apps Challenge Participant',
    organization: 'Global Hackathon',
    period: '2025',
    points: [
      'Collaborated in a fast-paced environment to solve problem statements under time pressure.',
      'Improved teamwork and rapid ideation skills through hands-on hackathon execution.',
    ],
  },
  {
    title: 'TEDxKCMT Core Team Member',
    organization: 'TEDxKCMT',
    period: 'Event Team Contribution',
    points: [
      'Built the event ticket website with a clear, user-friendly interface.',
      'Created promotional content and supported smooth event coordination.',
    ],
  },
]



const certificatesUrl = 'https://www.linkedin.com/in/sijomonps/details/certifications/'

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 sm:px-10 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="experience"
          gradientColors={{
            start: '#1E3A8A',
            end: '#0F766E'
          }}
        />

        <AnimatedText>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wider uppercase font-bold mb-12 text-center relative z-10">
            CERTIFICATIONS AND INVOLVEMENT
          </h2>
        </AnimatedText>

        <div className="relative z-0 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <AnimatedText key={item.title}>
              <article className="h-full rounded-2xl border border-white/20 bg-white/[0.08] p-6 backdrop-blur-xl shadow-lg">
                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-wide uppercase font-bold leading-snug">{item.title}</h3>
                <p className="mt-1 font-sans text-sm font-medium text-foreground/75">{item.organization}</p>

                <div className="mt-4 space-y-2 font-sans text-sm text-foreground/80 leading-relaxed">
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText className="relative z-10 mt-8">
          <a
            href={certificatesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-black/15 bg-white/75 px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-white dark:border-white/20 dark:bg-black/45 dark:hover:bg-black/60"
          >
            View More Certificates
          </a>
        </AnimatedText>


      </div>
    </section>
  )
}
