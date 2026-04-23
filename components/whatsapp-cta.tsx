import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = '#'

export function WhatsAppCTA() {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-whatsapp/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-whatsapp" />
            </div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            ¿TENÉS DUDAS?
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Escribinos por WhatsApp y te respondemos al toque.
          </p>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-whatsapp text-foreground font-medium rounded-full hover:bg-whatsapp/90 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Escribinos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
