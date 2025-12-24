'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What logistics services do you provide?',
      answer:
        'We provide trucking, freight logistics, and specialized white glove execution. Services include freight transportation, end-to-end logistics coordination, and controlled delivery with assembly/placement when required.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We provide logistics services across all of Ontario and Quebec, including major cities like Toronto, Ottawa, Montreal, Quebec City, and surrounding areas. Contact us to confirm service availability for your specific routes.',
    },
    {
      question: 'Are you fully insured and bonded?',
      answer:
        'Yes, EagleX Logistics is fully insured and bonded. We carry comprehensive liability insurance ($2M+ coverage) and workers\' compensation. All shipments are protected during transport. Proof of insurance is available upon request.',
    },
    {
      question: 'How do I request a quote?',
      answer:
        'Use our online quote form or contact our sales team directly. We typically respond within 24 hours with detailed pricing based on your logistics requirements, route, and service level needed.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve retail, distribution, construction, and commercial installation sectors. Our logistics solutions are designed for businesses that need reliable freight transportation and controlled execution.',
    },
    {
      question: 'Do you offer white glove / red carpet logistics?',
      answer:
        'Yes, white glove and red carpet execution is available for shipments requiring specialized handling, controlled delivery environments, or assembly/placement. This capability is offered for commercial and retail execution needs.',
    },
    {
      question: 'What is your on-time delivery rate?',
      answer:
        'We maintain a 99%+ on-time delivery rate across Ontario & Quebec. Our commercial-grade processes and professional crews ensure reliable execution and consistent performance.',
    },
    {
      question: 'Can you handle large-scale logistics projects?',
      answer:
        'Yes, we handle logistics projects of various scales. Our fleet and operational capacity can accommodate single shipments to multi-stop distribution routes. Contact us to discuss your specific requirements.',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Operational information for logistics decision-makers
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-premium"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
