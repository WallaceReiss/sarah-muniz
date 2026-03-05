
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function ProfessionalSpotlight() {
  const proImage = PlaceHolderImages.find(img => img.id === 'professional')

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={proImage?.imageUrl || ""}
            alt={proImage?.description || ""}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            data-ai-hint={proImage?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <p className="text-white text-xl font-bold">Founder & Lead Stylist</p>
          </div>
        </div>
        
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Experience Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Artistry Crafted with Passion</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Lumina Beauty Studio, we believe that beauty is an extension of your inner self. Led by our master stylists, we combine years of technical expertise with a keen eye for contemporary trends to deliver results that don't just look good—they feel incredible.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our philosophy is simple: personalized care for every client. Whether you're seeking a bold transformation or a subtle enhancement, our team is dedicated to providing a luxurious, relaxing experience that celebrates your unique identity.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10">
            <div>
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">5k+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
