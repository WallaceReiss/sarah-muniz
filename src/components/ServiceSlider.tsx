
"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function ServiceSlider() {
  const sliderImages = PlaceHolderImages.filter(img => img.id.startsWith('service-slider-'))
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-headline font-bold">Nossos Trabalhos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic">
            Confira alguns momentos e transformações reais capturadas em nosso espaço.
          </p>
        </div>
        
        <Carousel 
          className="w-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent className="-ml-4">
            {sliderImages.map((img, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-2/3">
                <div className="relative aspect-[3/4] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20">
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
