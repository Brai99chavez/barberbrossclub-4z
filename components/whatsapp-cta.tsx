import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5492216401362'

export function WhatsAppCTA() {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-14 text-center hover:border-whatsapp/30 transition-colors duration-500">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-whatsapp/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-whatsapp" />
            </div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            ¿TENÉS DUDAS?
          </h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Escribinos por WhatsApp y te respondemos al toque.
          </p>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-semibold rounded-full hover:bg-whatsapp/90 transition-all duration-300 shadow-lg shadow-whatsapp/20 hover:shadow-xl hover:shadow-whatsapp/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Escribinos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
