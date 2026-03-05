
"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  const message = encodeURIComponent("Olá, Sarah. Gostaria de agendar um horário para te conhecer e conhecer seu espaço!");
  const phoneNumber = "5511978745783";

  return (
    <Link 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float flex items-center justify-center group"
      aria-label="Agende via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold pl-0 group-hover:pl-3">
        Agendar Horário
      </span>
    </Link>
  )
}
