'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Shield, Users, CheckCircle2 } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with an API or email service
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const trustProofs = [
    {
      icon: Shield,
      title: 'Fully Insured & Bonded',
      description: 'Comprehensive liability and workers\' compensation coverage',
    },
    {
      icon: Users,
      title: 'Background-Checked Crews',
      description: 'All team members are vetted and professionally trained',
    },
    {
      icon: CheckCircle2,
      title: 'Damage-Free Guarantee',
      description: 'We stand behind our careful handling and professional service',
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
            Get Your <span className="text-gradient">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed estimate
          </p>
        </motion.div>

        {/* Trust Proof Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
        >
          {trustProofs.map((proof, index) => {
            const Icon = proof.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{proof.title}</h3>
                <p className="text-sm text-gray-600">{proof.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="card-premium"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Moving</option>
                  <option value="commercial">Commercial / Office Moving</option>
                  <option value="delivery">Furniture & Appliance Delivery</option>
                  <option value="storage">Storage Solutions</option>
                  <option value="white-glove">White Glove Setup</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full group">
                Request Quote
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div className="card-premium">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                Prefer to Talk?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is ready to discuss your project and answer any questions.
              </p>
              <div className="space-y-4">
                {CONTACT.phone.visible && (
                  <a
                    href={CONTACT.phone.href}
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone size={20} />
                    </div>
                    <span className="font-medium">{CONTACT.phone.display}</span>
                  </a>
                )}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">{CONTACT.email}</span>
                </a>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-primary/10 to-teal/10 border-primary/20">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Free, detailed quotes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Same/next day options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Fully insured & bonded
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  White glove service standard
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
