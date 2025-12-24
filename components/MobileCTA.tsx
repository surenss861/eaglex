'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-2xl"
        >
          <div className="container-custom py-4">
            <div className="flex gap-3">
              {CONTACT.phone.visible && (
                <a
                  href={CONTACT.phone.href}
                  className="flex-1 bg-primary text-white px-4 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              )}
              <Link
                href="/quote"
                className="flex-1 btn-primary text-sm px-4 py-3 flex items-center justify-center gap-2"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
