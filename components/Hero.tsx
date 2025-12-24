'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-offwhite to-primary/5"
    >
      {/* Subtle angled overlay - soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal/5 pointer-events-none" />

      {/* Optional: Very subtle light sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear',
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & CTA */}
          <div>
            <div ref={headlineRef} className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                <span className="line block text-gray-900">White Glove Logistics</span>
                <span className="line block text-gray-900">
                  & <span className="text-gradient">Red Carpet Setup</span>
                </span>
                <span className="line block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-500 font-normal">
                  Serving Ontario & Quebec
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                From delivery to full in-home setup — handled with care, 
                precision, and professionalism.
              </motion.p>
            </div>

            {/* CTA Row */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/quote"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Get a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              {CONTACT.phone.visible && (
                <a
                  href={CONTACT.phone.href}
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              )}
            </div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-gray-600"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Fully Insured & Bonded
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Background-Checked Crews
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Damage-Free Guarantee
              </span>
            </motion.div>
          </div>

          {/* Right: Hero Image with Parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-800 to-navy-900"
          >
            {/* Premium image placeholder - replace with real white glove service photo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8 max-w-md">
                <div className="text-5xl mb-4">📦✨</div>
                <p className="text-lg font-semibold mb-2">White Glove Service</p>
                <p className="text-sm text-gray-300">
                  Replace with professional photo: crew in uniform, furniture blankets, 
                  in-home setup, clean truck/warehouse
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
