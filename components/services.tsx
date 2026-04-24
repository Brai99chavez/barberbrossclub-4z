import { Scissors, User, Users, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'CORTE',
    description: 'Diseño y perfilado',
  },
  {
    icon: User,
    title: 'CORTE + BARBA',
    description: 'El combo completo',
  },
  {
    icon: Users,
    title: 'RULOS',
    description: 'Look renovado',
  },
  {
    icon: Palette,
    title: 'COLOR',
    description: 'Cambio de tono',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            Servicios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            LO QUE HACEMOS MEJOR
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
