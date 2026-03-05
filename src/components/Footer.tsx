
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Sarah Muniz</h2>
          <p className="text-background/60 leading-relaxed">
            Elevando sua beleza natural através de arte profissional e cuidado personalizado. Visite-nos para uma transformação inesquecível.
          </p>
          <div className="flex space-x-4">
            <Link href="https://instagram.com/studio_sarahmuniz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram @studio_sarahmuniz"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Link rápido</h3>
          <nav className="flex flex-col space-y-3 text-background/60">
            <Link href="#home" className="hover:text-primary transition-colors">Início</Link>
            <Link href="#hair" className="hover:text-primary transition-colors">Serviços de Cabelo</Link>
            <Link href="#makeup" className="hover:text-primary transition-colors">Arte de Maquiagem</Link>
            <Link href="#nails" className="hover:text-primary transition-colors">Cuidados com as Unhas</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold">Horário de Funcionamento</h3>
          <div className="space-y-2 text-background/60 text-sm">
            <p>Seg - Sex: 09:00 - 19:00</p>
            <p>Sábado: 10:00 - 18:00</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold">Localização</h3>
          <p className="text-background/60 text-sm leading-relaxed">
            Avenida Cândido Portinari, 890<br />
            Sala 15, primeiro andar<br />
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-background/10 mt-16 pt-8 text-center text-background/40 text-xs">
        © {new Date().getFullYear()} Sarah Muniz. Todos os direitos reservados.
      </div>
    </footer>
  )
}
