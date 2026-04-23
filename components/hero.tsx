import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Bross Barber Club
        </p>
        
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide mb-6">
          <span className="text-foreground">BARBER</span>
          <span className="text-primary">BROSS</span>
        </h1>
        
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
          RESERVÁ TU TURNO EN SEGUNDOS
        </h2>
        
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg mx-auto">
          Elegí tu sucursal y agendá en menos de 1 minuto
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#sucursales"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <span>Reservar turno</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground/30 text-foreground font-medium rounded-full hover:bg-foreground/10 transition-all duration-300"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
