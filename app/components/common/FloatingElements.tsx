'use client'

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

const allTechWords = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "Python", "Django", "MongoDB", "MySQL", 
  "Docker", "Git", "GitHub", "AWS", "Linux", "Vercel", "Render", 
  "Cloud", "DevOps", "API", "CI/CD", "Responsive", "Full Stack", "Web"
]

interface FloatingItem {
  id: number
  text: string
  x: number
  y: number
  xOffset: number
  yOffset: number
  duration: number
  parallaxSpeed: number
  rotation: number
  scale: number
  itemOpacity: number
}

function checkOverlap(
  newItem: { x: number, y: number }, 
  existingItems: { x: number, y: number }[], 
  minDistance = 15
) {
  return existingItems.some(item => {
    const dx = Math.abs(newItem.x - item.x)
    const dy = Math.abs(newItem.y - item.y)
    return Math.sqrt(dx * dx + dy * dy) < minDistance
  })
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingItem[]>([])
  const [windowHeight, setWindowHeight] = useState(1000)
  const { scrollY } = useScroll()

  // Wait until mounted to get real window height to avoid hydration mismatch
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setWindowHeight(window.innerHeight)
    })
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  // Fade out only during the final 100vh of the Hero scroll (between 1300vh and 1400vh for a 14x multiplier)
  const fadeStart = windowHeight * 13.0
  const fadeEnd = windowHeight * 14.0
  // Master container goes from 1 to 0, individual item opacities handle their subtle look
  const masterOpacity = useTransform(scrollY, [fadeStart, fadeEnd], [1, 0])

  useEffect(() => {
    // Determine number of elements based on screen width
    const width = window.innerWidth
    let count = 6 // Mobile default
    if (width > 1024) count = 16 // Desktop
    else if (width > 768) count = 10 // Tablet

    // Shuffle and pick words
    const shuffled = [...allTechWords].sort(() => 0.5 - Math.random())
    const selectedWords = shuffled.slice(0, count)

    const newElements: FloatingItem[] = []
    
    selectedWords.forEach((word, index) => {
      let x: number, y: number
      let attempts = 0
      const maxAttempts = 50

      do {
        const region = Math.floor(Math.random() * 4) // 0: top, 1: bottom, 2: left, 3: right
        if (region === 0) { // top
          y = Math.random() * 15
          x = Math.random() * 100
        } else if (region === 1) { // bottom
          y = 85 + Math.random() * 15
          x = Math.random() * 100
        } else if (region === 2) { // left
          y = 15 + Math.random() * 70
          x = Math.random() * 15
        } else { // right
          y = 15 + Math.random() * 70
          x = 85 + Math.random() * 15
        }
        attempts++
      } while (checkOverlap({ x, y }, newElements) && attempts < maxAttempts)

      newElements.push({
        id: index,
        text: word,
        x, y,
        xOffset: (Math.random() - 0.5) * 240, // Horizontal drift: -120px to +120px
        yOffset: (80 + Math.random() * 140) * (Math.random() > 0.5 ? 1 : -1), // Vertical drift: 80px to 220px (up or down)
        duration: 25 + Math.random() * 25, // Unique duration (25s to 50s)
        parallaxSpeed: -(0.03 + Math.random() * 0.07), // Subtle unique vertical shift on scroll
        rotation: (Math.random() - 0.5) * 30, // -15 to +15 degrees
        scale: 0.9 + Math.random() * 0.2, // 0.9 to 1.1
        itemOpacity: 0.30 + Math.random() * 0.15, // 0.30 to 0.45
      })
    })

    const frameId = window.requestAnimationFrame(() => {
      setElements(newElements)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  if (elements.length === 0) return null

  return (
    <motion.div 
      className="absolute inset-0 z-[5] overflow-hidden pointer-events-none"
      style={{ opacity: masterOpacity }}
    >
      {elements.map((item) => (
        <FloatingWord key={item.id} item={item} scrollY={scrollY} />
      ))}
    </motion.div>
  )
}

function FloatingWord({ item, scrollY }: { item: FloatingItem, scrollY: MotionValue<number> }) {
  const parallaxY = useTransform(scrollY, (value: number) => value * item.parallaxSpeed)
  
  return (
    <motion.div
      style={{ y: parallaxY, left: `${item.x}vw`, top: `${item.y}vh` }}
      className="absolute pointer-events-none"
    >
      <motion.div
        className="absolute font-sans font-medium text-white blur-[1px] text-sm sm:text-base tracking-wider uppercase select-none"
        initial={{ 
          opacity: 0,
          rotate: item.rotation,
          scale: item.scale
        }}
        animate={{
          x: [
            "0px",
            `${item.xOffset}px`,
            "0px"
          ],
          y: [
            "0px",
            `${item.yOffset}px`,
            "0px"
          ],
          opacity: item.itemOpacity
        }}
        transition={{
          duration: item.duration,
          repeat: Infinity,
          ease: "easeInOut",
          opacity: { duration: 2, ease: "easeOut", repeat: 0 } // only fade in once
        }}
      >
        {item.text}
      </motion.div>
    </motion.div>
  )
} 