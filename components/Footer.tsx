'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Residential Moving', href: '/services#residential' },
      { label: 'Commercial Moving', href: '/services#commercial' },
      { label: 'Furniture Delivery', href: '/services#delivery' },
      { label: 'White Glove Setup', href: '/services#white-glove' },
    ],
    company: [
      { label: 'Why EagleX', href: '/why-eaglex' },
      { label: 'Service Areas', href: '/service-areas' },
      { label: 'Contact', href: '/contact' },
      { label: 'Get a Quote', href: '/quote' },
    ],
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="bg-navy-900 border-t border-navy-800"
    >
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-serif font-bold text-primary-light">
                EAGLEX
              </span>
              <span className="text-sm text-gray-300 uppercase tracking-wider">
                LOGISTICS
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium white glove moving and logistics services across Ontario & Quebec.
            </p>
            <div className="space-y-2 text-sm">
              {CONTACT.phone.visible && (
                <a
                  href={CONTACT.phone.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors group"
                >
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                  {CONTACT.phone.display}
                </a>
              )}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary-light font-bold uppercase tracking-wider text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-primary-light font-bold uppercase tracking-wider text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-primary-light font-bold uppercase tracking-wider text-sm mb-4">
              Service Areas
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-light mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300 mb-1">Ontario</p>
                  <p>Toronto, Ottawa, Mississauga, and all of Ontario</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-light mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300 mb-1">Quebec</p>
                  <p>Montreal, Quebec City, and all of Quebec</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} EAGLEX LOGISTICS INC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
