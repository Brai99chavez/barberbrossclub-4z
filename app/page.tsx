import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Locations } from '@/components/locations'
import { Instagram } from '@/components/instagram'
import { WhatsAppCTA } from '@/components/whatsapp-cta'
import { Footer } from '@/components/footer'
import { WhatsAppFAB } from '@/components/whatsapp-fab'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Locations />
      <Instagram />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
