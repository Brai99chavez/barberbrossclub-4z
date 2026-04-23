import { Instagram as InstagramIcon } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/brossbarberclub/'

const images = [
  '/images/instagram-1.jpg',
  '/images/instagram-2.jpg',
  '/images/instagram-3.jpg',
  '/images/instagram-4.jpg',
  '/images/instagram-5.jpg',
  '/images/instagram-6.jpg',
]

export function Instagram() {
  return (
    <section id="instagram" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center">
              <InstagramIcon className="w-7 h-7 text-primary" />
            </div>
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            Instagram
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            SEGUINOS EN INSTAGRAM
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mirá nuestros últimos trabajos, novedades y promos en @brossbarberclub
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-10">
          {images.map((image, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Ver en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
