'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <span className="font-heading text-2xl md:text-3xl tracking-wide">
              <span className="text-foreground">BARBER</span>
              <span className="text-primary">BROSS</span>
            </span>
          </a>
          
          <a
            href="#sucursales"
            className="group inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <span>Reservar turno</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  )
}
