import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | EagleX Logistics - Ontario & Quebec Coverage',
  description: 'Serving all of Ontario and Quebec with premium white glove moving and logistics services. Toronto, Montreal, Ottawa, and more.',
}

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <ServiceAreas />
      </div>
      <Footer />
      <MobileCTA />
    </main>
  )
}

