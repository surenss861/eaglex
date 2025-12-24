'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Grid only on Services section - subtle animation
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '50px 50px',
        duration: 30,
        repeat: -1,
        ease: 'none',
      })
    }
  }, [])

  const services = [
    {
      title: 'Trucking',
      description: 'Freight transportation across Ontario & Quebec.',
    },
    {
      title: 'Freight Logistics',
      description: 'End-to-end coordination and execution.',
    },
    {
      title: 'White Glove Execution',
      description: 'Specialized handling when required.',
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-charcoal section-divider relative"
    >
      {/* Grid ONLY on Services - system underneath */}
      <div
        ref={gridRef}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none opacity-40"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <h2 className="text-display-sm mb-8 text-white">
            What We <span className="text-white/50">Do</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="section-divider pt-24"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xl text-white/60 font-light max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/quote"
                  className="btn-secondary inline-flex items-center group w-fit"
                >
                  Learn More
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
