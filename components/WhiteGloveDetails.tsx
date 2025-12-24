'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Home, Building2, Package } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WhiteGloveDetails() {
  const included = [
    'Assembly + placement',
    'Packaging removal',
    'Room-of-choice delivery',
    'Floor/wall protection',
    'Complete cleanup checklist',
  ]

  const idealFor = [
    {
      icon: Home,
      title: 'Luxury Homes',
      description: 'High-value furniture and premium residences',
    },
    {
      icon: Building2,
      title: 'Furniture Retailers',
      description: 'Professional installations for your customers',
    },
    {
      icon: Package,
      title: 'Office Installations',
      description: 'Commercial setups with minimal disruption',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: What's Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-accent-pink uppercase tracking-widest text-sm font-bold">
                Premium Service
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              White Glove / Red Carpet{' '}
              <span className="text-gradient">Setup</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our signature service that goes beyond delivery. Every detail handled 
              with precision and care.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-3">What's Included:</p>
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          {/* Right: Who It's For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Ideal For:</h3>
              {idealFor.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-premium mb-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

