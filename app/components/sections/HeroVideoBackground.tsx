import Image from 'next/image'

interface Props {
  assetPath: (path: string) => string
}

export default function HeroVideoBackground({ assetPath }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-background">
      {/* Static Hero Background Image (First frame of hero video) */}
      <Image
        src={assetPath('/hero/hero-poster.webp')}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-[50%_35%] pointer-events-none"
        priority
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
