'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function ContactStrip() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    ...(CONTACT.phone.visible
      ? [
          {
            icon: Phone,
            label: 'Call',
            value: CONTACT.phone.display,
            href: CONTACT.phone.href,
          },
        ]
      : []),
    {
      icon: Clock,
      label: 'Hours',
      value: CONTACT.businessHours.weekdays,
      href: null,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ontario & Quebec — Province-Wide Coverage',
      href: '/service-areas',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  return (
    <section className="section-padding bg-white border-y border-gray-200">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const Component = item.href ? motion.a : motion.div

            return (
              <Component
                key={index}
                variants={itemVariants}
                href={item.href || undefined}
                className={`card-premium text-center group ${
                  item.href ? 'cursor-pointer' : ''
                }`}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
                  {item.label}
                </p>
                <p className="text-gray-900 font-semibold">{item.value}</p>
              </Component>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
