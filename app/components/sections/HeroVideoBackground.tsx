'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Configurable constants for video pinning
export const VIDEO_START_TIME = 0.2
export const VIDEO_END_OFFSET = 3.0
export const SCRUB_SMOOTHNESS = 0.08

interface Props {
  assetPath: (path: string) => string
  isReducedMotion?: boolean
}

export default function HeroVideoBackground({ assetPath, isReducedMotion = false }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isReducedMotion) return
    const video = videoRef.current
    if (!video) return

    let animationFrameId: number | null = null
    let targetTime = VIDEO_START_TIME
    let currentTime = VIDEO_START_TIME
    let lastSetTime = -1

    const getTrimmedBounds = () => {
      // Fallback duration in case metadata isn't fully loaded in production
      const duration = video.duration && isFinite(video.duration) ? video.duration : 10.006
      const endTime = Math.max(VIDEO_START_TIME + 0.5, duration - VIDEO_END_OFFSET)
      const startTime = Math.min(VIDEO_START_TIME, endTime - 0.1)
      return { startTime, endTime }
    }

    const render = () => {
      if (!video || video.readyState < 2) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const { startTime, endTime } = getTrimmedBounds()
      const diff = targetTime - currentTime

      if (Math.abs(diff) > 0.001) {
        currentTime += diff * SCRUB_SMOOTHNESS
        const nextTime = Math.max(startTime, Math.min(endTime, currentTime))
        
        // Prevent setting currentTime repeatedly for tiny decimals to avoid decoder jitter
        if (Math.abs(lastSetTime - nextTime) > 0.005) {
          video.currentTime = nextTime
          lastSetTime = nextTime
        }
        animationFrameId = requestAnimationFrame(render)
      } else {
        currentTime = targetTime
        const nextTime = Math.max(startTime, Math.min(endTime, targetTime))
        if (Math.abs(lastSetTime - nextTime) > 0.005) {
          video.currentTime = nextTime
          lastSetTime = nextTime
        }
        animationFrameId = null // Pause render loop when not scrubbing
      }
    }

    const startRender = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const updateScrollProgress = () => {
      const heroElement = document.getElementById('home')
      if (!heroElement) return

      const rect = heroElement.getBoundingClientRect()
      const maxScroll = rect.height - window.innerHeight

      if (maxScroll <= 0) return

      // Map progress strictly based on current element position in viewport
      const currentScroll = -rect.top
      const progress = Math.max(0, Math.min(1, currentScroll / maxScroll))

      const { startTime, endTime } = getTrimmedBounds()
      targetTime = startTime + progress * (endTime - startTime)
      
      startRender()
    }

    const handleScroll = () => updateScrollProgress()
    const handleResize = () => updateScrollProgress()

    const handleLoadedData = () => {
      video.pause()
      const { startTime } = getTrimmedBounds()
      
      if (Math.abs(video.currentTime - startTime) > 0.05) {
        video.currentTime = startTime
      }
      currentTime = startTime
      targetTime = startTime
      lastSetTime = startTime
      
      updateScrollProgress()
      setIsReady(true)
    }

    if (video.readyState >= 2) {
      handleLoadedData()
    } else {
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('canplay', handleLoadedData)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    startRender()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleLoadedData)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [isReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-background">
      {/* Immediate Fallback Poster Background */}
      <Image
        src={assetPath('/hero/hero-poster.webp')}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-[50%_35%] pointer-events-none"
        priority
      />

      {/* Pinned Video Element */}
      <video
        ref={videoRef}
        src={assetPath('/hero/hero-video.mp4')}
        poster={assetPath('/hero/hero-poster.webp')}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-[50%_35%] transition-opacity duration-700 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark Luxury Gradient Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-background" />

      {/* Subtle Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

      {/* Soft Fade Transition into Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
