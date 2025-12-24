'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function ServiceAreas() {
  const areas = {
    ontario: [
      'Toronto',
      'Ottawa',
      'Mississauga',
      'Brampton',
      'Hamilton',
      'London',
      'Kitchener',
      'Windsor',
      'Thunder Bay',
      'Sudbury',
      'And all of Ontario',
    ],
    quebec: [
      'Montreal',
      'Quebec City',
      'Laval',
      'Gatineau',
      'Longueuil',
      'Sherbrooke',
      'Saguenay',
      'Lévis',
      'Trois-Rivières',
      'Terrebonne',
      'And all of Quebec',
    ],
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
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="text-primary" size={24} />
            <span className="text-primary uppercase tracking-widest text-sm font-bold">
              Service Coverage
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Serving <span className="text-gradient">Ontario & Quebec</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage across both provinces with reliable, 
            professional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ontario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="card-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900">Ontario</h3>
            </div>
            <ul className="space-y-3">
              {areas.ontario.map((city, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {city}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quebec */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="card-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900">Quebec</h3>
            </div>
            <ul className="space-y-3">
              {areas.quebec.map((city, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {city}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 h-64 bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl border border-primary/20 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="text-primary mx-auto mb-2" size={32} />
            <p className="text-gray-600 text-sm">
              Interactive map placeholder (add Google Maps or similar)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
