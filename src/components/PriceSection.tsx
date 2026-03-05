
"use client"

import { Scissors, Sparkles, Wand2, Heart, User, Layout } from "lucide-react"

const priceItems = [
  { name: "Cabeleireiro", price: "R$120", icon: <Scissors className="h-6 w-6" /> },
  { name: "Maquiagem", price: "R$150", icon: <User className="h-6 w-6" /> },
  { name: "Design de Unhas", price: "R$70", icon: <Heart className="h-6 w-6" /> },
  { name: "Manicure & Pedicure", price: "R$65", icon: <Wand2 className="h-6 w-6" /> },
]

export function PriceSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-4 mb-16">
        <h2 className="text-4xl font-bold">Confira os preços</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Preços transparentes para nossos serviços premium. Selecione o tratamento desejado e deixe o resto conosco.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {priceItems.map((item, idx) => (
          <div key={idx} className="group p-8 border rounded-xl hover:border-primary transition-colors space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-accent group-hover:bg-primary transition-colors">
              {item.icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="text-sm text-muted-foreground">Descrição do serviço.</p>
            </div>
            <p className="text-accent font-bold text-lg">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
