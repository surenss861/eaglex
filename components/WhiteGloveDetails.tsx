'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Package, Building2, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WhiteGloveDetails() {
  const capabilities = [
    'Specialized handling',
    'Controlled delivery environments',
    'Assembly / placement when required',
    'Commercial and retail execution',
  ]

  const useCases = [
    {
      icon: Building2,
      title: 'Commercial Installations',
      description: 'Office furniture, fixtures, and equipment with precise placement',
    },
    {
      icon: ShoppingBag,
      title: 'Retail Execution',
      description: 'Store deliveries and fixture installations with controlled handling',
    },
    {
      icon: Package,
      title: 'High-Value Freight',
      description: 'Specialized logistics for sensitive or valuable shipments',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="mb-4">
              <span className="text-primary uppercase tracking-widest text-sm font-bold">
                Available Capability
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              White Glove & Red Carpet{' '}
              <span className="text-primary">Logistics Available</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Specialized execution for shipments requiring controlled handling, 
              assembly, or precise placement.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-3">Operational Capabilities:</p>
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-gray-700">{capability}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group"
            >
              Request Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          {/* Right: Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Common Use Cases:</h3>
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
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
                        <h4 className="font-bold text-gray-900 mb-1">{useCase.title}</h4>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
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
