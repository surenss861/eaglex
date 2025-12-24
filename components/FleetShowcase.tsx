'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Truck, Users, Shield } from 'lucide-react'
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

  const stats = [
    { icon: Truck, label: 'Professional Fleet', value: '50+' },
    { icon: Users, label: 'Trained Crews', value: '100+' },
    { icon: Shield, label: 'Years Experience', value: '10+' },
  ]

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden">
      {/* Full-bleed Image with Real Truck */}
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/70 to-navy-900/50" />
      </div>

      {/* Overlay Copy Box */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
                Ready When You Are
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional fleet. Trained crews. Reliable delivery across Ontario & Quebec.
              </p>
              <Link
                href="/quote"
                className="btn-primary inline-flex items-center group bg-accent-pink hover:bg-accent-pink/90 text-lg px-10 py-5"
              >
                Talk to a Specialist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={22} />
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex justify-center mb-3">
                      <Icon className="text-primary-light" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
