import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import WhyEagleX from '@/components/WhyEagleX'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why EagleX | Premium White Glove Logistics',
  description: 'Discover what sets EagleX apart: reliability, care, professional setup, and premium white glove service across Ontario & Quebec.',
}

export default function WhyEagleXPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <WhyEagleX />
        <Testimonials />
      </div>
      <Footer />
      <MobileCTA />
    </main>
  )
}

