
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Início", href: "home" },
  { name: "Cabelos", href: "hair" },
  { name: "Maquiagem", href: "makeup" },
  { name: "Unhas", href: "nails" },
  { name: "Sobre", href: "about" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = (id: string, closeMobile = false) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    if (closeMobile) setIsOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="group">
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-headline italic text-accent-foreground drop-shadow-sm bg-accent/20 px-2 rounded-sm">
                Espaço Beleza
              </span>
              <span className="text-2xl md:text-3xl font-headline font-bold tracking-tight text-foreground ml-4">
                Sarah Muniz
              </span>
            </div>
          </Link>
          <Link
            href="https://instagram.com/studio_sarahmuniz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
            aria-label="Instagram @studio_sarahmuniz"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col pt-20">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href, true)}
                    className="text-2xl font-headline italic hover:text-accent transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
