'use client'

import AnimatedText from "../common/AnimatedText"

interface EducationItem {
  period: string
  title: string
  institution: string
  score?: string
  details?: string
}

const educationTimeline: EducationItem[] = [
  {
    period: "2025 - 2027",
    title: "Master of Computer Applications (Information Technology)",
    institution: "Marian College Kuttikkanam (Autonomous), Kerala",
  },
  {
    period: "2022 - 2025",
    title: "Bachelor of Commerce (Computer Applications)",
    institution: "Kristu Jyoti College of Management and Technology, Kottayam",
  },
  {
    period: "2020 - 2022",
    title: "Higher Secondary (Commerce Stream)",
    institution: "St. Johns HSS Eraviperoor",
  },
  {
    period: "2019 - 2020",
    title: "Secondary School",
    institution: "SCS Higher Secondary School, Thiruvalla",
  }
]

export default function CourseTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl pl-8 sm:pl-10">
      <div className="absolute left-2 top-0 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800 sm:left-3" />

      <div className="space-y-8">
        {educationTimeline.map((item) => (
          <AnimatedText key={`${item.title}-${item.period}`}>
            <article className="relative rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-6">
              <span className="absolute -left-[30px] top-6 h-3 w-3 rounded-full bg-black dark:bg-white sm:-left-[34px]" />

              <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-foreground/50">{item.period}</p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl tracking-wide uppercase font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-foreground/80 font-medium">{item.institution}</p>
              {item.score && <p className="mt-1 font-sans text-xs uppercase tracking-wider font-semibold text-foreground/75">{item.score}</p>}
              {item.details && <p className="mt-2 font-sans text-sm text-foreground/70 leading-relaxed">{item.details}</p>}
            </article>
          </AnimatedText>
        ))}
      </div>
    </div>
  )
}