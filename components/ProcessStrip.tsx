'use client'

import { motion } from 'framer-motion'
import { Calendar, Truck, Sparkles } from 'lucide-react'

export default function ProcessStrip() {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Book',
      description: 'Schedule your service with a free consultation and detailed quote.',
    },
    {
      icon: Truck,
      number: '02',
      title: 'We Deliver',
      description: 'Professional crew arrives with protective equipment and careful handling.',
    },
    {
      icon: Sparkles,
      number: '03',
      title: 'We Set Up + Clean',
      description: 'Complete assembly, placement, and cleanup — ready to use immediately.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, professional process from booking to completion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="p-6 bg-primary/10 rounded-2xl">
                      <Icon className="text-primary" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent-pink text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

