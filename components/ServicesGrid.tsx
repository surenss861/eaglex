'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Home, Building2, Package, Boxes, Sparkles } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Moving',
      description: 'Full-service residential and commercial moving with white glove care.',
      href: '/services#moving',
      highlight: false,
    },
    {
      icon: Package,
      title: 'Delivery',
      description: 'Safe delivery of furniture and large appliances to your location.',
      href: '/services#delivery',
      highlight: false,
    },
    {
      icon: Boxes,
      title: 'Storage',
      description: 'Secure storage solutions for your belongings during transitions.',
      href: '/services#storage',
      highlight: false,
    },
    {
      icon: Sparkles,
      title: 'White Glove / Red Carpet Setup',
      description: 'Complete assembly, placement, and cleanup service. Our signature offering.',
      href: '/services#white-glove',
      highlight: true,
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  rotateY: 2,
                  rotateX: -2,
                  transition: { duration: 0.3 }
                }}
                className={`card-premium relative ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-accent-pink/5 to-primary/5 border-2 border-accent-pink/20' 
                    : ''
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-accent-pink text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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
