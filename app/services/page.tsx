import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import ServicesGrid from '@/components/ServicesGrid'
import RedCarpetBrand from '@/components/RedCarpetBrand'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | EagleX Logistics - White Glove Moving & Setup',
  description: 'Comprehensive logistics services: Residential moving, commercial relocations, furniture delivery, storage solutions, and premium white glove setup.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your needs
          </p>
        </div>
        <ServicesGrid />
        <RedCarpetBrand />
      </div>
      <Footer />
      <MobileCTA />
    </main>
  )
}
