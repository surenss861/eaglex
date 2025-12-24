'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const conveyorRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !headlineRef.current) return

    // Slow, heavy GSAP timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Text revealing upward - slow and heavy
    const lines = headlineRef.current.querySelectorAll('.line')
    tl.from(lines, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.2,
    })

    // CTA slides in with intent
    tl.from('.hero-cta', {
      opacity: 0,
      x: -40,
      duration: 0.8,
    }, '-=0.4')

    // Animated grid - subtle, continuous
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '50px 50px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    }

    // Conveyor belt lines - continuous horizontal movement
    if (conveyorRef.current) {
      gsap.to(conveyorRef.current, {
        backgroundPosition: '200px 0',
        duration: 8,
        repeat: -1,
        ease: 'linear',
      })
    }

    // Very slow background parallax
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.15,
          duration: 0.8,
          ease: 'power1.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
    >
      {/* Full-width Hero Background - Warehouse/Fleet */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      >
        {/* Heavy dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/98 via-charcoal/95 to-charcoal/98" />
      </div>

      {/* Animated Grid Overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none"
      />

      {/* Moving Conveyor Belt Lines */}
      <div
        ref={conveyorRef}
        className="absolute inset-0 conveyor-line pointer-events-none opacity-30"
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <div ref={headlineRef} className="mb-16">
            <h1 className="text-display mb-8 text-white tracking-tight">
              <span className="line block">LOGISTICS.</span>
              <span className="line block">EXECUTED WITH PRECISION.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-2xl md:text-3xl text-white/70 font-light tracking-tight max-w-3xl"
            >
              White-glove trucking & logistics across Ontario and Quebec.
            </motion.p>
          </div>

          {/* CTA with intent */}
          <div className="hero-cta">
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group"
            >
              Request Quote
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Line divider animating across - like loading dock opening */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </section>
  )
}
