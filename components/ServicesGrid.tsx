'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Truck, Package, Sparkles } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: Truck,
      title: 'Trucking',
      description: 'Professional freight transportation across Ontario & Quebec. Reliable delivery with commercial-grade equipment and trained operators.',
      href: '/services#trucking',
    },
    {
      icon: Package,
      title: 'Freight Logistics',
      description: 'End-to-end logistics management. From pickup to delivery, we handle coordination, tracking, and execution.',
      href: '/services#freight',
    },
    {
      icon: Sparkles,
      title: 'White Glove & Red Carpet Execution',
      description: 'Specialized handling, controlled delivery environments, and assembly/placement when required. Available for commercial and retail execution.',
      href: '/services#white-glove',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Logistics-first operations built for reliability and scale
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-premium hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-primary hover:text-primary-dark font-semibold inline-flex items-center group/link transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={16} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
