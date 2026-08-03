'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Configurable constants for Apple-style video completion pinning
export const VIDEO_START_TIME = 0.2         // Seconds: Start slightly after 0s to prevent flicker
export const VIDEO_END_OFFSET = 3.0         // Seconds: Trim off unwanted video outro frames
export const HERO_SCROLL_MULTIPLIER = 2.8   // Viewport height multiplier per second of usable video duration
export const SCRUB_SMOOTHNESS = 0.08        // Lerp factor for video scrubbing inertia

interface Props {
  assetPath: (path: string) => string
  isReducedMotion?: boolean
  onTrackHeightChange?: (heightVh: number) => void
}

export default function HeroVideoBackground({ assetPath, isReducedMotion = false, onTrackHeightChange }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isReducedMotion) return

    const video = videoRef.current
    if (!video) return

    let animationFrameId: number
    let targetTime = VIDEO_START_TIME
    let currentTime = VIDEO_START_TIME

    // Cached layout metrics to eliminate scroll reflows & layout thrashing
    let cachedHeroTop = 0
    let cachedMaxScroll = 0

    const updateMeasurements = () => {
      const heroElement = document.getElementById('home')
      if (heroElement) {
        const height = heroElement.offsetHeight
        cachedHeroTop = heroElement.offsetTop
        cachedMaxScroll = height > window.innerHeight ? height - window.innerHeight : height
      }
    }

    const getTrimmedBounds = () => {
      const duration = video.duration && isFinite(video.duration) ? video.duration : 10
      const endTime = Math.max(VIDEO_START_TIME + 0.5, duration - VIDEO_END_OFFSET)
      const startTime = Math.min(VIDEO_START_TIME, endTime - 0.1)
      return { startTime, endTime }
    }

    const updateScrollProgress = () => {
      if (cachedMaxScroll <= 0) return

      // Zero-reflow scroll progress calculation using cached metrics
      const scrollY = window.scrollY
      const currentScroll = scrollY - cachedHeroTop
      const progress = Math.max(0, Math.min(1, currentScroll / cachedMaxScroll))

      // Map progress strictly between VIDEO_START_TIME and VIDEO_END_TIME
      const { startTime, endTime } = getTrimmedBounds()
      targetTime = startTime + progress * (endTime - startTime)
    }

    const render = () => {
      if (video && video.readyState >= 2) {
        const { startTime, endTime } = getTrimmedBounds()
        const diff = targetTime - currentTime

        if (Math.abs(diff) > 0.0015) {
          currentTime += diff * SCRUB_SMOOTHNESS
          // Clamp time strictly within trimmed bounds: [VIDEO_START_TIME, VIDEO_END_TIME]
          const nextTime = Math.max(startTime, Math.min(endTime, currentTime))
          if (Math.abs(video.currentTime - nextTime) > 0.005) {
            video.currentTime = nextTime
          }
        } else {
          currentTime = targetTime
          video.currentTime = Math.max(startTime, Math.min(endTime, targetTime))
        }
      }
      animationFrameId = requestAnimationFrame(render)
    }

    const handleScroll = () => {
      updateScrollProgress()
    }

    const handleResize = () => {
      updateMeasurements()
      updateScrollProgress()
    }

    const handleLoadedData = () => {
      video.pause()
      const { startTime, endTime } = getTrimmedBounds()
      const usableDuration = Math.max(1, endTime - startTime)
      
      // Calculate dynamic scroll track height based on usable video duration
      const dynamicVh = Math.max(350, Math.round(usableDuration * HERO_SCROLL_MULTIPLIER * 100))
      if (onTrackHeightChange) {
        onTrackHeightChange(dynamicVh)
      }

      video.currentTime = startTime
      currentTime = startTime
      targetTime = startTime
      updateMeasurements()
      updateScrollProgress()
      setIsReady(true)
    }

    updateMeasurements()

    if (video.readyState >= 2) {
      handleLoadedData()
    } else {
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('canplay', handleLoadedData)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleLoadedData)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isReducedMotion, onTrackHeightChange])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Immediate Fallback Poster Background */}
      <Image
        src={assetPath('/hero/hero-poster.webp')}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-[50%_35%] pointer-events-none"
        priority
      />

      {/* Pinned Video Element with Intelligent Subject Framing */}
      <video
        ref={videoRef}
        src={assetPath('/hero/hero-video.mp4')}
        poster={assetPath('/hero/hero-poster.webp')}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-[50%_35%] transition-opacity duration-500 ${
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
