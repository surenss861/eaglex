'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

export default function WhyEagleX() {
  const numbersRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(numbersRef, { once: true, margin: '-100px' })

  useEffect(() => {
    // Staggered number reveals
    if (numbersRef.current && isInView) {
      const numbers = numbersRef.current.querySelectorAll('.reason-number')
      gsap.from(numbers, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }
  }, [isInView])

  const reasons = [
    {
      number: '01',
      title: 'Reliability',
      description: 'On-time delivery with commercial-grade processes. Scheduled. Dispatched. Executed.',
    },
    {
      number: '02',
      title: 'Coverage',
      description: 'Ontario & Quebec with consistent availability. Province-wide execution.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Professional crews. Systematic operations. Confirmed delivery protocols.',
    },
  ]

  return (
    <section className="section-padding bg-charcoal section-divider">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <h2 className="text-display-sm text-white">
            Why <span className="text-white/50">EagleX</span>
          </h2>
        </motion.div>

        <div ref={numbersRef} className="grid md:grid-cols-3 gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="section-divider pt-8"
            >
              <div className="reason-number text-4xl font-bold text-white/20 mb-4">
                {reason.number}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
                {reason.title}
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-24 pt-16 section-divider text-center"
        >
          <p className="text-sm text-white/30 uppercase tracking-widest">
            Trusted by commercial clients across Ontario & Quebec
          </p>
        </motion.div>
      </div>
    </section>
  )
}
