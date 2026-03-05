
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const galleryConfig = [
  {
    id: "hair",
    title: "Cabelos",
    description: "Cortes, colorações e tratamentos que valorizam sua identidade.",
    prefix: "hair-"
  },
  {
    id: "makeup",
    title: "Maquiagem",
    description: "Realce seus traços com produções impecáveis para qualquer ocasião.",
    prefix: "makeup-"
  },
  {
    id: "nails",
    title: "Unhas",
    description: "Design e cuidado premium para suas mãos e pés.",
    prefix: "nails-"
  }
]

export function ServiceGallery() {
  return (
    <div className="bg-secondary/30">
      {galleryConfig.map((section) => (
        <section key={section.id} id={section.id} className="py-24 px-6 border-b border-primary/20 last:border-0 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-5xl font-headline font-bold italic text-accent">{section.title}</h2>
                <p className="text-muted-foreground text-lg italic">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PlaceHolderImages.filter(img => img.id.startsWith(section.prefix)).map((item, idx) => (
                <div key={idx} className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={item.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white font-medium italic">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
