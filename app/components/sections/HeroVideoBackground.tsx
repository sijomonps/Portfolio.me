'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Configurable constants for Apple / Nothing style video scrubbing
const VIDEO_START_TIME = 0.2  // Seconds: Start playback slightly after first frame to prevent flicker
const VIDEO_END_OFFSET = 3.0  // Seconds: Trim out the last 3 seconds of the video
const SCRUB_SMOOTHNESS = 0.10 // Lerp factor (0.08 - 0.12 for silky inertia)

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

    let animationFrameId: number
    let targetTime = VIDEO_START_TIME
    let currentTime = VIDEO_START_TIME

    const getTrimmedBounds = () => {
      const duration = video.duration && isFinite(video.duration) ? video.duration : 10
      const endTime = Math.max(VIDEO_START_TIME + 0.5, duration - VIDEO_END_OFFSET)
      const startTime = Math.min(VIDEO_START_TIME, endTime - 0.1)
      return { startTime, endTime }
    }

    const updateScrollProgress = () => {
      const heroElement = document.getElementById('home')
      if (!heroElement) return

      const rect = heroElement.getBoundingClientRect()
      const totalScroll = heroElement.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return

      // Compute scroll progress within the pinned Hero track [0, 1]
      const currentScroll = -rect.top
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll))

      // Map progress strictly between VIDEO_START_TIME and (video.duration - 3s)
      const { startTime, endTime } = getTrimmedBounds()
      targetTime = startTime + progress * (endTime - startTime)
    }

    const render = () => {
      if (video && video.readyState >= 2) {
        const { startTime, endTime } = getTrimmedBounds()
        const diff = targetTime - currentTime

        if (Math.abs(diff) > 0.002) {
          currentTime += diff * SCRUB_SMOOTHNESS
          // Clamp time strictly within trimmed bounds: [VIDEO_START_TIME, video.duration - 3s]
          const nextTime = Math.max(startTime, Math.min(endTime, currentTime))
          if (Math.abs(video.currentTime - nextTime) > 0.005) {
            video.currentTime = nextTime
          }
        } else if (Math.abs(video.currentTime - targetTime) > 0.005) {
          currentTime = targetTime
          video.currentTime = targetTime
        }
      }
      animationFrameId = requestAnimationFrame(render)
    }

    const handleScroll = () => {
      updateScrollProgress()
    }

    const handleLoadedData = () => {
      video.pause()
      const { startTime } = getTrimmedBounds()
      video.currentTime = startTime
      currentTime = startTime
      targetTime = startTime
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
    window.addEventListener('resize', updateScrollProgress)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateScrollProgress)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleLoadedData)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Fallback Poster Background */}
      <Image
        src={assetPath('/hero/hero-poster.webp')}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-center"
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
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
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
