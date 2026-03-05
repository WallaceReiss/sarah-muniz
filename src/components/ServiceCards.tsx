
"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Scissors, Sparkles, Wand2 } from "lucide-react"

const services = [
  {
    id: "hair",
    name: "Master Hair Styling",
    icon: <Scissors className="h-6 w-6" />,
    image: PlaceHolderImages.find(img => img.id === 'service-hair'),
    description: "From precision cuts to bespoke coloring, we transform your vision into stunning reality.",
    items: ["Balayage & Ombre", "Precision Cutting", "Keratin Treatment", "Event Styling"]
  },
  {
    id: "makeup",
    name: "Luxe Makeup Artistry",
    icon: <Wand2 className="h-6 w-6" />,
    image: PlaceHolderImages.find(img => img.id === 'service-makeup'),
    description: "Expert application designed to highlight your best features for any occasion.",
    items: ["Bridal Makeup", "Editorial Looks", "Evening Glam", "Airbrush Finish"]
  },
  {
    id: "nails",
    name: "Designer Nail Care",
    icon: <Sparkles className="h-6 w-6" />,
    image: PlaceHolderImages.find(img => img.id === 'service-nails'),
    description: "Premium manicure and pedicure services featuring the latest in nail art trends.",
    items: ["Gel Extensions", "Hand-painted Art", "Classic Manicure", "Spa Pedicure"]
  }
]

export function ServiceCards() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the pinnacle of beauty with our specialized departments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group rounded-3xl h-full flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image?.imageUrl || ""}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={service.image?.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary z-10">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-8 flex-grow">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all rounded-full font-bold group">
                    View Pricing
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
