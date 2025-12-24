'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

export default function WhiteGloveExecution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!stepsRef.current || !isInView) return

    const steps = stepsRef.current.querySelectorAll('.execution-step')

    // Delayed entrance, heavier easing - slower cadence
    steps.forEach((step, index) => {
      gsap.from(step, {
        opacity: 0,
        x: -80,
        duration: 1.4,
        ease: 'power4.out',
        delay: index * 0.3 + 0.5, // Slower stagger
      })

      // Line draw animation - slower
      const line = step.querySelector('.step-line')
      if (line) {
        gsap.from(line, {
          scaleX: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: index * 0.3 + 0.8,
        })
      }
    })
  }, [isInView])

  const executionSteps = [
    {
      number: '01',
      title: 'Controlled Handling',
    },
    {
      number: '02',
      title: 'On-Site Assembly',
    },
    {
      number: '03',
      title: 'Precision Placement',
    },
    {
      number: '04',
      title: 'Professional Cleanup',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-charcoal-50 section-divider relative overflow-hidden"
      style={{ backgroundColor: '#050505' }} // Darker than surrounding
    >
      {/* Subtle background texture - darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-50/30 via-charcoal to-charcoal-50/30" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <span className="text-white/30 uppercase tracking-widest text-xs font-bold mb-8 block">
            Available Capability
          </span>
          <h2 className="text-display-sm mb-8 text-white">
            White Glove / Red Carpet
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl">
            Specialized execution for shipments requiring controlled handling, 
            assembly, or precise placement.
          </p>
        </motion.div>

        <div ref={stepsRef} className="space-y-20">
          {executionSteps.map((step, index) => (
            <div
              key={index}
              className="execution-step section-divider pt-20"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-12">
                <div className="flex-shrink-0">
                  <div className="text-7xl font-bold text-white/10 mb-6">
                    {step.number}
                  </div>
                  <div className="w-32 h-px bg-white/10 step-line" />
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal systems callout - implied capability */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-32 pt-16 section-divider"
        >
          <div className="max-w-2xl">
            <p className="text-sm text-white/30 uppercase tracking-widest mb-4">
              Execution Protocol
            </p>
            <p className="text-lg text-white/40 font-light leading-relaxed">
              Scheduled. Dispatched. Executed. Confirmed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
