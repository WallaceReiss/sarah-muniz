
"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const team = [
  { id: "team-1", name: "Sarah Muniz", role: "Especialista Hair & Founder" },
  { id: "team-2", name: "Lenize Moreira", role: "Designer de unhas" },
  { id: "team-3", name: "Josiane Matos", role: "Maquiadora" },
]

export function TeamSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-4 mb-16">
        <h2 className="text-4xl font-headline font-bold">Nossa Equipe</h2>
        <p className="text-muted-foreground max-w-md mx-auto italic">
          Conheça o talento e a dedicação por trás de cada transformação no Espaço Sarah Muniz.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {team.map((member, idx) => {
          const img = PlaceHolderImages.find(i => i.id === member.id)
          return (
            <div key={idx} className="space-y-6 text-center group">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm stylized-border transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={img?.imageUrl || `https://picsum.photos/seed/${member.id}/600/600`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  data-ai-hint="team member portrait"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-xl">{member.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{member.role}</p>
              </div>
              <div className="flex justify-center space-x-4 text-accent">
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
