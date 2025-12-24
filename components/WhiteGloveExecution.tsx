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

    steps.forEach((step, index) => {
      gsap.from(step, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.2,
      })

      // Line draw animation
      const line = step.querySelector('.step-line')
      if (line) {
        gsap.from(line, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.2 + 0.3,
        })
      }
    })
  }, [isInView])

  const executionSteps = [
    {
      number: '01',
      title: 'Controlled Handling',
      description: 'Specialized protocols for sensitive freight. Damage-prevention systems active.',
    },
    {
      number: '02',
      title: 'On-Site Assembly',
      description: 'Professional uniformed crews. Tools and equipment prepared. Assembly executed per specifications.',
    },
    {
      number: '03',
      title: 'Precision Placement',
      description: 'Room-of-choice delivery. Exact positioning. Floor and wall protection protocols.',
    },
    {
      number: '04',
      title: 'Professional Cleanup',
      description: 'Packaging removal. Site restoration. Final inspection and confirmation.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-charcoal-50 section-divider relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-50 via-charcoal to-charcoal-50 opacity-50" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <span className="text-white/40 uppercase tracking-widest text-xs font-bold mb-8 block">
            Execution Module
          </span>
          <h2 className="text-display-sm mb-8 text-white">
            White Glove / Red Carpet{' '}
            <span className="text-white/50">Execution</span>
          </h2>
          <p className="text-2xl text-white/70 font-light max-w-3xl">
            Specialized logistics execution for shipments requiring controlled handling, 
            assembly, or precise placement. Commercial and retail execution protocols.
          </p>
        </motion.div>

        <div ref={stepsRef} className="space-y-16">
          {executionSteps.map((step, index) => (
            <div
              key={index}
              className="execution-step section-divider pt-16"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-white/20 mb-4">
                    {step.number}
                  </div>
                  <div className="w-24 h-px bg-white/20 step-line" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Systems callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-24 pt-16 section-divider"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Systems
              </h4>
              <p className="text-white/70 font-light">
                Damage-prevention protocols. Quality control checkpoints. 
                Professional uniformed crews.
              </p>
            </div>
            <div>
              <h4 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Execution
              </h4>
              <p className="text-white/70 font-light">
                Scheduled. Dispatched. Executed. Confirmed. 
                End-to-end visibility and accountability.
              </p>
            </div>
            <div>
              <h4 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Coverage
              </h4>
              <p className="text-white/70 font-light">
                Available across Ontario & Quebec. 
                Commercial and retail execution capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
