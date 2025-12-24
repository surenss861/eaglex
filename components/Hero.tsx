'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { CONTACT } from '@/lib/constants'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !headlineRef.current) return

    // GSAP Timeline - One hero timeline only
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    // Headline fade + slight translate
    const lines = headlineRef.current.querySelectorAll('.line')
    tl.from(lines, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
    })

    // CTA buttons fade up
    if (ctaRef.current) {
      tl.from(
        ctaRef.current.children,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
        },
        '-=0.3'
      )
    }

    // Slow background parallax
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.2,
          duration: 0.3,
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-width Hero Background with Real Truck Imagery */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      >
        {/* Strong dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div ref={headlineRef} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <span className="line block">Reliable Trucking & Logistics</span>
              <span className="line block">
                Across <span className="text-primary-light">Ontario & Quebec</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
            >
              End-to-end trucking and logistics solutions for businesses that need 
              reliability, coverage, and control.
            </motion.p>
          </div>

          {/* Business-Focused CTA Row */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center justify-center group text-lg px-10 py-5"
            >
              Request a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center group text-lg"
            >
              <MessageSquare className="mr-2" size={22} />
              Contact Sales
            </Link>
          </div>

          {/* Trust micro-line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-400 flex flex-wrap gap-4"
          >
            <span>Serving Ontario & Quebec</span>
            <span>•</span>
            <span>Commercial Logistics</span>
            <span>•</span>
            <span>White Glove Capable</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
