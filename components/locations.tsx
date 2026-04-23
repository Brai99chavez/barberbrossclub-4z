import { MapPin, ArrowRight } from 'lucide-react'

const locations = [
  {
    address: '19 Y 523',
    city: 'La Plata',
    description: 'Atención profesional en un ambiente moderno',
    image: '/images/location-1.jpg',
    freshaUrl: 'https://www.fresha.com/es/a/bross-barber-club-av-19-tolosa-avenida-19-872-n8t8c849?pId=2726774',
  },
  {
    address: '25 Y 526',
    city: 'La Plata',
    description: 'Tu estilo, nuestra prioridad',
    image: '/images/location-2.jpg',
    freshaUrl: 'https://www.fresha.com/es/a/bross-barber-club-av-25-362-tolosa-avenida-25-632-oynej2qu?pId=2726774',
  },
]

export function Locations() {
  return (
    <section id="sucursales" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            Sucursales
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            RESERVÁ EN TU SUCURSAL
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Elegí dónde querés cortarte y agendá en menos de un minuto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location) => (
            <div
              key={location.address}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm border border-border/50">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{location.city}</span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  SUCURSAL {location.address}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {location.description}
                </p>
                
                <a
                  href={location.freshaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  <span>Reservar en {location.address}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
