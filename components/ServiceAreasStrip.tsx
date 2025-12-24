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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="text-primary" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-gray-900">
            Proudly Serving All of{' '}
            <span className="text-gradient">Ontario & Quebec</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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
                className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm"
              >
                {city}
              </motion.span>
            ))}
          </div>

          <Link
            href="/service-areas"
            className="btn-primary inline-flex items-center group"
          >
            View All Service Areas
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
