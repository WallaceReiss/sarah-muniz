
"use client"

import * as React from "react"
import Image from "next/image"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const slides = [
    {
      image: PlaceHolderImages.find(img => img.id === 'hero-hair'),
      title: "Artistry in Every Strand",
      subtitle: "Discover your perfect style with our master stylists.",
      id: "hair"
    },
    {
      image: PlaceHolderImages.find(img => img.id === 'hero-nails'),
      title: "Polished Perfection",
      subtitle: "Elegance at your fingertips with our premium nail services.",
      id: "nails"
    },
    {
      image: PlaceHolderImages.find(img => img.id === 'hero-makeup'),
      title: "Glamour Redefined",
      subtitle: "Unleash your inner radiance with professional makeup artistry.",
      id: "makeup"
    }
  ]

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <Carousel 
        className="w-full h-full"
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-[90vh] md:h-screen relative">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <Image
                src={slide.image?.imageUrl || ""}
                alt={slide.image?.description || ""}
                fill
                className="object-cover"
                priority={index === 0}
                data-ai-hint={slide.image?.imageHint}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 tracking-tighter animate-fade-in drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg md:text-2xl mb-8 max-w-2xl animate-fade-in delay-200 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 animate-fade-in delay-500"
                  asChild
                >
                  <a href={`#${slide.id}`}>Explore Services</a>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 bg-white/20 border-white/40 text-white hover:bg-white/40 transition-all h-12 w-12" />
          <CarouselNext className="right-8 bg-white/20 border-white/40 text-white hover:bg-white/40 transition-all h-12 w-12" />
        </div>
      </Carousel>
    </section>
  )
}
