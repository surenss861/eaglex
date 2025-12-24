'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Warehouse, Building2, Package } from 'lucide-react'

export default function IndustriesServed() {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Store deliveries, fixture installations, and inventory logistics for retail operations.',
    },
    {
      icon: Warehouse,
      title: 'Distribution',
      description: 'Warehouse-to-warehouse freight, distribution center logistics, and supply chain execution.',
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Material transport, equipment delivery, and jobsite logistics coordination.',
    },
    {
      icon: Package,
      title: 'Commercial Installs',
      description: 'Furniture, fixtures, and equipment delivery with assembly and placement services.',
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Industries <span className="text-primary">Served</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized logistics solutions across key sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
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
                <h3 className="text-xl font-bold mb-2 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

