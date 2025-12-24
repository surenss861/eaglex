'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Home, Handshake, ArrowRight } from 'lucide-react'

export default function AudiencePathways() {
  const pathways = [
    {
      icon: Building2,
      title: 'Business Shippers',
      description: 'Commercial moving, office relocations, and retail installations.',
      cta: 'Get Business Quote',
      href: '/quote?type=business',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10',
    },
    {
      icon: Home,
      title: 'Residential Moving & Setup',
      description: 'Home moves, furniture delivery, and full white glove setup.',
      cta: 'Schedule Residential Service',
      href: '/quote?type=residential',
      colorClass: 'text-teal',
      bgClass: 'bg-teal/10',
    },
    {
      icon: Handshake,
      title: 'Carrier Partnerships',
      description: 'Partner with us for logistics solutions and delivery services.',
      cta: 'Partner With Us',
      href: '/contact?type=partnership',
      colorClass: 'text-accent-pink',
      bgClass: 'bg-accent-pink/10',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored logistics solutions for every need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="card-premium group hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 ${pathway.bgClass} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={pathway.colorClass} size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{pathway.title}</h3>
                <p className="text-gray-600 mb-6">{pathway.description}</p>
                <Link
                  href={pathway.href}
                  className={`inline-flex items-center ${pathway.colorClass} hover:opacity-80 font-semibold group/link transition-colors`}
                >
                  {pathway.cta}
                  <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
