'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Award } from 'lucide-react'

export default function WhyEagleX() {
  const features = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Fully insured and bonded. Your belongings are protected every step of the way.',
    },
    {
      icon: Clock,
      title: 'Care',
      description: 'Meticulous attention to detail. We treat your items like our own.',
    },
    {
      icon: Users,
      title: 'Professional Setup',
      description: 'Experienced team handles assembly, placement, and cleanup with precision.',
    },
    {
      icon: Award,
      title: 'Premium Service',
      description: 'White glove treatment that sets the standard for logistics excellence.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Why <span className="text-gradient">EagleX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What makes us different in the logistics industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
