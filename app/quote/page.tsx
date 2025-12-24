import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import QuoteSection from '@/components/QuoteSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quote | EagleX Logistics',
  description: 'Get a free, detailed quote for your moving or logistics project. Professional white glove service across Ontario & Quebec.',
}

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <QuoteSection />
      </div>
      <Footer />
      <MobileCTA />
    </main>
  )
}

