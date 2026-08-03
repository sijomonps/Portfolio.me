'use client'

import { useEffect, useState } from 'react'

type Props = {
  sectionId: string
  gradientColors: {
    start: string
    end: string
  }
}

export default function GradientBackground({ sectionId, gradientColors }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById(sectionId)
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [sectionId])

  return (
    <>
      <div
        className="pointer-events-none fixed -z-10 rounded-full w-[200px] h-[200px] blur-[40px] -bottom-[40px] -right-[40px] sm:w-[400px] sm:h-[500px] sm:blur-[80px] sm:-bottom-[100px] sm:-right-[100px]"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.start}, ${gradientColors.end})`,
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
      <div
        className="pointer-events-none fixed -z-10 rounded-full w-[300px] h-[300px] blur-[40px] -bottom-[40px] -left-[40px] sm:w-[500px] sm:h-[500px] sm:blur-[80px] sm:-bottom-[100px] sm:-left-[100px]"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.end}, ${gradientColors.start})`,
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
    </>
  )
}