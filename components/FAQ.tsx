'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What does White Glove / Red Carpet Setup include?',
      answer:
        'Our premium service includes complete assembly, precise placement in your chosen room, removal of all packaging materials, floor and wall protection during installation, and a thorough cleanup. We handle everything from delivery to final placement.',
    },
    {
      question: 'Are you fully insured and bonded?',
      answer:
        'Yes, EagleX Logistics is fully insured and bonded. We carry comprehensive liability insurance and workers\' compensation coverage. All items are protected during transport and installation. Proof of insurance is available upon request.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We provide service across all of Ontario and Quebec, including major cities like Toronto, Ottawa, Montreal, Quebec City, and surrounding areas. Contact us to confirm service availability in your specific location.',
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'We recommend booking at least 1-2 weeks in advance for optimal scheduling. However, we offer same-day and next-day service options when available. Contact us for current availability.',
    },
    {
      question: 'Do you handle stairs and elevators?',
      answer:
        'Yes, our trained crews are experienced with stairs, elevators, and tight spaces. We assess the delivery location beforehand and come prepared with the necessary equipment and techniques.',
    },
    {
      question: 'What is your damage policy?',
      answer:
        'We offer a damage-free guarantee. Our crews are trained in careful handling, and we use protective materials throughout the process. In the rare event of damage, we have comprehensive insurance coverage and will work with you to resolve any issues immediately.',
    },
    {
      question: 'Can you assemble furniture on-site?',
      answer:
        'Yes, assembly is a core part of our White Glove service. Our crews are experienced with furniture assembly and will ensure everything is properly put together and placed exactly where you want it.',
    },
    {
      question: 'What are your business hours?',
      answer:
        'Our standard hours are Monday-Friday 8am-6pm, Saturday 9am-4pm, and Sunday by appointment. We can accommodate evening and weekend appointments for your convenience.',
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services
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

