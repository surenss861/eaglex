'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Sparkles, MapPin, Building2, Wrench } from 'lucide-react'

export default function RedCarpetBrand() {
  const features = [
    {
      icon: Clock,
      label: 'On Time',
    },
    {
      icon: Shield,
      label: 'Fully Insured',
    },
    {
      icon: Sparkles,
      label: 'White Glove Setup',
    },
    {
      icon: MapPin,
      label: 'Ontario & Quebec',
    },
    {
      icon: Building2,
      label: 'Residential & Commercial',
    },
    {
      icon: Wrench,
      label: 'Assembly & Placement',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-gray-900">
            Red Carpet Service.{' '}
            <span className="text-gradient">White Glove Care.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver, install, and finish the job properly. 
            That's the EagleX difference.
          </p>
        </motion.div>

        {/* Icons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-8"
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
                  <motion.div
                    className="p-4 bg-primary/10 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-primary" size={32} />
                  </motion.div>
                </div>
                <p className="text-gray-900 font-semibold">{feature.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

