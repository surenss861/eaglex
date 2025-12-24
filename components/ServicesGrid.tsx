'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
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
    <section className="section-padding bg-charcoal section-divider">
      <div className="container-custom">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
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
