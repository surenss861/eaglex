'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function ServiceAreasStrip() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const element = imageRef.current
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0

        if (isInView) {
          gsap.to(element, {
            y: (scrolled - rect.top) * 0.1,
            duration: 0.8,
            ease: 'power1.out',
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-charcoal">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl"
          >
            <h2 className="text-display-sm mb-8 text-white">
              Ontario & <span className="text-white/50">Quebec</span>
            </h2>
            <p className="text-2xl text-white/70 font-light">
              Province-wide coverage with reliable execution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
