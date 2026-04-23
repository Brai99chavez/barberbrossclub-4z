import { Instagram, MapPin, Phone, Clock } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/brossbarberclub/'

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              <span className="text-foreground">BARBER</span>
              <span className="text-primary">BROSS</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Barbería moderna. Estilo urbano. Reservá online en segundos.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@brossbarberclub</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary text-sm tracking-[0.15em] uppercase mb-4 border-b border-primary/30 pb-2">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground/50" />
                <span>19 y 523, La Plata</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground/50" />
                <span>25 y 526, La Plata</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/5492216401362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-muted-foreground/50" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-primary text-sm tracking-[0.15em] uppercase mb-4 border-b border-primary/30 pb-2">
              Horarios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-muted-foreground/50" />
                  Lun - Vie
                </span>
                <span className="text-foreground">10:00 — 20:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground pl-7">Sábados</span>
                <span className="text-foreground">09:00 — 18:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground pl-7">Domingos</span>
                <span className="text-muted-foreground">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 BarberBross. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
