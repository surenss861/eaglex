'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="section-padding bg-charcoal section-divider">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <h2 className="text-display-sm text-white mb-8">
            Request <span className="text-white/50">Quote</span>
          </h2>
          <p className="text-sm text-white/40 uppercase tracking-widest">
            Response within one business day. Commercial inquiries prioritized.
          </p>
        </motion.div>

        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-3 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-charcoal-50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-3 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-charcoal-50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-white/60 mb-3 uppercase tracking-wider">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-charcoal-50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm text-white/60 mb-3 uppercase tracking-wider">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-charcoal-50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
              >
                <option value="">Select</option>
                <option value="trucking">Trucking</option>
                <option value="freight">Freight Logistics</option>
                <option value="white-glove">White Glove Execution</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white/60 mb-3 uppercase tracking-wider">
                Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-charcoal-50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder=""
              />
            </div>

            <button type="submit" className="btn-primary inline-flex items-center group">
              Submit
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
