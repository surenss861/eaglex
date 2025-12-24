'use client'

import { motion } from 'framer-motion'

export default function IndustriesServed() {
  const industries = [
    {
      title: 'Retail',
      description: 'Store deliveries, fixture installations, inventory logistics.',
      process: ['Scheduled', 'Dispatched', 'Executed', 'Confirmed'],
    },
    {
      title: 'Distribution',
      description: 'Warehouse-to-warehouse freight, distribution center logistics.',
      process: ['Scheduled', 'Dispatched', 'Executed', 'Confirmed'],
    },
    {
      title: 'Construction',
      description: 'Material transport, equipment delivery, jobsite coordination.',
      process: ['Scheduled', 'Dispatched', 'Executed', 'Confirmed'],
    },
    {
      title: 'Commercial',
      description: 'Furniture, fixtures, equipment delivery with assembly services.',
      process: ['Scheduled', 'Dispatched', 'Executed', 'Confirmed'],
    },
  ]

  return (
    <section className="section-padding bg-charcoal section-divider">
      <div className="container-custom mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-display-sm text-white">
            Industries <span className="text-white/50">Served</span>
          </h2>
        </motion.div>
      </div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="section-divider pt-8"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                {industry.title}
              </h3>
              <p className="text-lg text-white/60 font-light mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex flex-col gap-2">
                {industry.process.map((step, stepIndex) => (
                  <span
                    key={stepIndex}
                    className="text-xs text-white/40 uppercase tracking-widest font-medium"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
