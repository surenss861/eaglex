'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WhiteGloveStatus() {
  return (
    <section className="section-padding bg-charcoal-50 section-divider relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-50 via-charcoal to-charcoal-50 opacity-50" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-12">
            <span className="text-white/40 uppercase tracking-widest text-xs font-bold mb-8 block">
              Available Capability
            </span>
            <h2 className="text-display-sm mb-8 text-white">
              White Glove & Red Carpet
            </h2>
            <p className="text-2xl text-white/70 font-light max-w-2xl mx-auto">
              Specialized execution for shipments requiring controlled handling, 
              assembly, or precise placement.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/quote"
              className="btn-primary inline-flex items-center group"
            >
              Request Quote
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

