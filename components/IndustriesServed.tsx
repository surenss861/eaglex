'use client'

import { motion } from 'framer-motion'

export default function IndustriesServed() {
  const industries = [
    'Retail',
    'Distribution',
    'Construction',
    'Commercial',
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
            Industries <span className="text-white/50">Served</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="section-divider pt-8"
            >
              <h3 className="text-4xl font-bold text-white/90 tracking-tight">
                {industry}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
