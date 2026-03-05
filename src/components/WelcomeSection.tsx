
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function WelcomeSection() {
  const welcomeImg = PlaceHolderImages.find(img => img.id === 'welcome-image')
  const parallaxBg = PlaceHolderImages.find(img => img.id === 'parallax-bg')

  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden parallax-container">
      {/* Background Parallax Efeito */}
      <div 
        className="parallax-bg" 
        style={{ backgroundImage: `url(${parallaxBg?.imageUrl})` }}
      />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10 relative">
        <div className="relative aspect-square rounded-[3rem] overflow-hidden stylized-border">
          <Image
            src={welcomeImg?.imageUrl || "https://picsum.photos/seed/welcome/600/600"}
            alt="Welcome to Espaço Sarah Muniz"
            fill
            className="object-cover"
            data-ai-hint="beauty professional working"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-headline font-bold tracking-tight italic text-accent">Bem-vinda ao</h2>
            <h3 className="text-4xl font-headline font-bold text-foreground">nosso mundo de beleza</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            No Espaço Sarah Muniz, acreditamos que a beleza vai além da superfície. Nossa missão é proporcionar uma experiência única que realce sua luz natural e renove sua autoestima em um ambiente acolhedor e exclusivo.
          </p>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-10 h-14 rounded-full font-bold uppercase tracking-widest transition-all" asChild>
            <a href="#about">Saiba mais sobre nós</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
