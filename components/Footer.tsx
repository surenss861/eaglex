'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="bg-charcoal section-divider border-t border-white/10"
    >
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">
                EAGLEX
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Logistics execution across Ontario & Quebec.
            </p>
          </div>

          <div>
            <h3 className="text-sm text-white/60 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/40 hover:text-white text-sm transition-colors">
                  Trucking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/40 hover:text-white text-sm transition-colors">
                  Freight Logistics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/40 hover:text-white text-sm transition-colors">
                  White Glove
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white/60 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-white/40">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors block">
                {CONTACT.email}
              </a>
              {CONTACT.phone.visible && (
                <a href={CONTACT.phone.href} className="hover:text-white transition-colors block">
                  {CONTACT.phone.display}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm">
            © {currentYear} EAGLEX LOGISTICS INC.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
