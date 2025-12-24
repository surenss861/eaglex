import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ContactStrip from '@/components/ContactStrip'
import RedCarpetBrand from '@/components/RedCarpetBrand'
import ProcessStrip from '@/components/ProcessStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhiteGloveDetails from '@/components/WhiteGloveDetails'
import ServiceAreasStrip from '@/components/ServiceAreasStrip'
import FleetShowcase from '@/components/FleetShowcase'
import Testimonials from '@/components/Testimonials'
import QuoteSection from '@/components/QuoteSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactStrip />
      <RedCarpetBrand />
      <ProcessStrip />
      <ServicesGrid />
      <WhiteGloveDetails />
      <ServiceAreasStrip />
      <FleetShowcase />
      <Testimonials />
      <QuoteSection />
      <FAQ />
      <Footer />
      <MobileCTA />
    </main>
  )
}
