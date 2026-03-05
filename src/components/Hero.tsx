
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const illustration = PlaceHolderImages.find(img => img.id === 'hero-illustration')
  const message = encodeURIComponent("Olá, Sarah. Gostaria de agendar um horário para te conhecer e conhecer seu espaço!");
  const phoneNumber = "5511997960561";

  return (
    <section id="home" className="relative min-h-[85vh] bg-primary flex items-center pt-32 pb-12 px-6 md:px-12 wavy-bottom">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] text-foreground tracking-tight">
            A realce da sua <br />
            <span className="italic text-accent font-normal">beleza única</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
            Especialistas em transformar sonhos em realidade através da arte do cabelo, maquiagem e cuidados com as unhas.
          </p>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-10 h-14 text-base font-medium rounded-full shadow-lg transition-all active:scale-95" asChild>
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
              Agendar Agora
            </a>
          </Button>
        </div>
        <div className="relative h-[450px] md:h-[600px] flex justify-center items-center">
          <div className="relative w-full h-full max-w-[500px] stylized-border rounded-[2rem] overflow-hidden">
             <Image
              src={illustration?.imageUrl || "https://picsum.photos/seed/fallback/800/800"}
              alt="Sarah Muniz Studio"
              fill
              className="object-cover"
              priority
              data-ai-hint="elegant beauty portrait"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
