import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import WhyEagleX from '@/components/WhyEagleX'
import IndustriesServed from '@/components/IndustriesServed'
import WhiteGloveStatus from '@/components/WhiteGloveStatus'
import ServiceAreasStrip from '@/components/ServiceAreasStrip'
import QuoteSection from '@/components/QuoteSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyEagleX />
      <IndustriesServed />
      <WhiteGloveStatus />
      <ServiceAreasStrip />
      <QuoteSection />
      <Footer />
    </main>
  )
}
