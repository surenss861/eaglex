'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
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

    // Headline line-by-line reveal
    const lines = headlineRef.current.querySelectorAll('.line')
    tl.from(lines, {
      opacity: 0,
      y: 40,
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

    // Hero image parallax on scroll (subtle: ±30px)
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.3,
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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/75 to-navy-900/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div ref={headlineRef} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
              <span className="line block">Professional White Glove Logistics</span>
              <span className="line block">
                Across <span className="text-gradient bg-gradient-to-r from-primary-light to-teal-light bg-clip-text text-transparent">Ontario & Quebec</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              Fast delivery, careful handling, full in-home setup — 
              trusted logistics from delivery to final placement.
            </motion.p>
          </div>

          {/* Strong CTA Row */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center justify-center group text-lg px-10 py-5"
            >
              Request Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </Link>
            <Link
              href="/quote"
              className="btn-secondary inline-flex items-center justify-center group text-lg px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-navy-900"
            >
              <Calendar className="mr-2" size={22} />
              Schedule Setup
            </Link>
            {CONTACT.phone.visible && (
              <a
                href={CONTACT.phone.href}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center group text-lg"
              >
                <Phone className="mr-2" size={22} />
                Call Now
              </a>
            )}
          </div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 text-base text-gray-200"
          >
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="w-2 h-2 bg-primary-light rounded-full" />
              Fully Insured & Bonded
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="w-2 h-2 bg-primary-light rounded-full" />
              Background-Checked Crews
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="w-2 h-2 bg-primary-light rounded-full" />
              Damage-Free Guarantee
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
