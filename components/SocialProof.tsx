'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Clock, TrendingUp } from 'lucide-react'

export default function SocialProof() {
  const proofs = [
    {
      icon: Award,
      title: 'Certified & Licensed',
      description: 'Fully licensed logistics provider with industry certifications',
    },
    {
      icon: Shield,
      title: 'Comprehensive Insurance',
      description: '$2M+ liability coverage protecting your shipments',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '99%+ on-time delivery rate across Ontario & Quebec',
    },
    {
      icon: TrendingUp,
      title: 'Growing Trust',
      description: '500+ successful installations and deliveries completed',
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Trusted by <span className="text-gradient">Businesses & Families</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven track record of reliability and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((proof, index) => {
            const Icon = proof.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="card-premium text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{proof.title}</h3>
                <p className="text-sm text-gray-600">{proof.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

