'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Toronto, ON',
      rating: 5,
      text: 'EagleX handled our entire condo move with incredible care. The white glove service was exactly as promised - they assembled everything, placed it perfectly, and cleaned up. Worth every penny.',
    },
    {
      name: 'Michael R.',
      location: 'Montreal, QC',
      rating: 5,
      text: 'Professional, punctual, and precise. They delivered and set up our new furniture collection without a scratch. The team was courteous and efficient. Highly recommend!',
    },
    {
      name: 'Jennifer L.',
      location: 'Ottawa, ON',
      rating: 5,
      text: 'Best moving experience we\'ve ever had. The red carpet treatment made all the difference. They treated our belongings like luxury items, which they are to us.',
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Ontario & Quebec
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="card-premium relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/10" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent-pink fill-accent-pink" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
