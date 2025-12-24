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
      {/* Full-width Hero Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      >
        {/* Heavy dark overlay */}
        <div className="absolute inset-0 bg-charcoal/95" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <div ref={headlineRef} className="mb-16">
            <h1 className="text-display mb-8 text-white">
              <span className="line block">LOGISTICS.</span>
              <span className="line block">DONE RIGHT.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-2xl md:text-3xl text-white/70 font-light tracking-tight max-w-3xl"
            >
              Reliable trucking and logistics across Ontario & Quebec.
            </motion.p>
          </div>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group"
            >
              Request Quote
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Line divider animating across */}
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
