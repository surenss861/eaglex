'use client'

import { motion } from 'framer-motion'

export default function WhyEagleX() {
  const reasons = [
    {
      title: 'Reliability',
      description: 'On-time delivery with commercial-grade processes.',
    },
    {
      title: 'Coverage',
      description: 'Ontario & Quebec with consistent availability.',
    },
    {
      title: 'Execution',
      description: 'Professional crews and systematic operations.',
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

        <div className="grid md:grid-cols-3 gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="section-divider pt-8"
            >
              <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
                {reason.title}
              </h3>
              <p className="text-lg text-white/60 font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
