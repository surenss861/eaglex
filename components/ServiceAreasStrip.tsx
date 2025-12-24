'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'

export default function ServiceAreasStrip() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Subtle background parallax
    const handleScroll = () => {
      const scrolled = window.scrollY
      const element = imageRef.current
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0

        if (isInView) {
          gsap.to(element, {
            y: (scrolled - rect.top) * 0.2,
            duration: 0.3,
            ease: 'power1.out',
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const keyCities = [
    'Toronto',
    'Ottawa',
    'Mississauga',
    'Montreal',
    'Quebec City',
    'Laval',
  ]

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background with Real Warehouse/Logistics Imagery */}
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-navy-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="text-primary-light" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Proudly Serving All of{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-light to-teal-light bg-clip-text text-transparent">
                Ontario & Quebec
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Province-wide coverage with reliable, professional service
            </p>

            {/* Key Cities */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {keyCities.map((city, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-lg font-semibold text-sm border border-white/30"
                >
                  {city}
                </motion.span>
              ))}
            </div>

            <Link
              href="/service-areas"
              className="btn-primary inline-flex items-center group bg-accent-pink hover:bg-accent-pink/90 text-lg px-10 py-5"
            >
              View All Service Areas
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
