import { Scissors, User, Users, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'CORTE',
    description: 'Estilo y precisión',
  },
  {
    icon: User,
    title: 'BARBA',
    description: 'Diseño y perfilado',
  },
  {
    icon: Users,
    title: 'CORTE + BARBA',
    description: 'El combo completo',
  },
  {
    icon: Palette,
    title: 'COLOR',
    description: 'Look renovado',
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
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
