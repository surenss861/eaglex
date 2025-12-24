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

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !headlineRef.current) return

    // Slow, heavy GSAP timeline - vertical reveal
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Text revealing upward - slow and heavy
    const lines = headlineRef.current.querySelectorAll('.line')
    tl.from(lines, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.2,
    })

    // CTA - sharp, immediate
    tl.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4')

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
      {/* Full-width Hero Background - Real Warehouse/Fleet with Cinematic Grading */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
          filter: 'grayscale(20%) brightness(0.4) contrast(1.1)',
        }}
      >
        {/* Cinematic overlay: dark gradient bottom to top, vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/40" />
        <div 
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 200px rgba(0,0,0,0.8), inset 0 0 400px rgba(0,0,0,0.4)',
          }}
        />
      </div>

      {/* Subtle noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
        }}
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
              className="text-2xl md:text-3xl text-white/80 font-light tracking-tight max-w-3xl"
            >
              White-glove trucking & logistics across Ontario and Quebec.
            </motion.p>
          </div>

          {/* CTA - sharp, immediate */}
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
