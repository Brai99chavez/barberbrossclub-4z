'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5492216401362'

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp/90 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-foreground" />
    </a>
  )
}
