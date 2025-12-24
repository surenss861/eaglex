'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your project? We're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-6"
            >
              {CONTACT.phone.visible && (
                <div className="card-premium">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900">Phone</h3>
                      <a
                        href={CONTACT.phone.href}
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        {CONTACT.phone.display}
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Call us {CONTACT.businessHours.weekdays} EST
                  </p>
                </div>
              )}

              <div className="card-premium">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">Email</h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  We typically respond within 24 hours
                </p>
              </div>

              <div className="card-premium">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">Service Areas</h3>
                    <p className="text-gray-700">Ontario & Quebec</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Serving all major cities and surrounding areas
                </p>
              </div>

              <div className="card-premium">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">{CONTACT.businessHours.weekdays}</p>
                    <p className="text-gray-700">{CONTACT.businessHours.saturday}</p>
                    <p className="text-gray-600 text-sm">{CONTACT.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Quote CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="card-premium bg-gradient-to-br from-primary/10 to-teal/10 border-primary/20 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-8">
                Get a free, detailed quote for your project. Our team will review 
                your requirements and provide a comprehensive estimate.
              </p>
              <Link
                href="/quote"
                className="btn-primary w-full text-center group"
              >
                Request a Free Quote
              </Link>
              {CONTACT.phone.visible && (
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Or call us directly at{' '}
                  <a
                    href={CONTACT.phone.href}
                    className="text-primary hover:text-primary-dark"
                  >
                    {CONTACT.phone.display}
                  </a>
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileCTA />
    </main>
  )
}
