import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ContactStrip from '@/components/ContactStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhyEagleX from '@/components/WhyEagleX'
import IndustriesServed from '@/components/IndustriesServed'
import WhiteGloveDetails from '@/components/WhiteGloveDetails'
import ServiceAreasStrip from '@/components/ServiceAreasStrip'
import FleetShowcase from '@/components/FleetShowcase'
import SocialProof from '@/components/SocialProof'
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
      <ServicesGrid />
      <WhyEagleX />
      <IndustriesServed />
      <WhiteGloveDetails />
      <ServiceAreasStrip />
      <FleetShowcase />
      <SocialProof />
      <Testimonials />
      <QuoteSection />
      <FAQ />
      <Footer />
      <MobileCTA />
    </main>
  )
}
