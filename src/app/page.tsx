
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { WelcomeSection } from "@/components/WelcomeSection"
import { ServiceSlider } from "@/components/ServiceSlider"
import { ServiceGallery } from "@/components/ServiceGallery"
import { PriceSection } from "@/components/PriceSection"
import { TeamSection } from "@/components/TeamSection"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeSection />
      
      {/* Slider de Serviços Gerais */}
      <ServiceSlider />
      
      {/* Galerias Específicas: Hair, Makeup, Nails */}
      <ServiceGallery />
      
      <PriceSection />
      
      <section id="about">
        <TeamSection />
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  )
}
