'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function FleetShowcase() {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Image scale from 1.05 → 1 on scroll
    const handleScroll = () => {
      const element = imageRef.current
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const scale = 1.05 - (progress * 0.05)
          
          gsap.to(element, {
            scale: scale,
            duration: 0.3,
            ease: 'power1.out',
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Full-bleed Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-gradient-to-br from-primary to-teal"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920')] bg-cover bg-center opacity-40" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-transparent" />
      </div>

      {/* Overlay Copy Box */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
              Ready When You Are
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional fleet. Trained crews. Reliable delivery.
            </p>
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group bg-accent-pink hover:bg-accent-pink/90"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

