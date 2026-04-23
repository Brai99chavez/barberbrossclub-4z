import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'BarberBross | Barbería Premium en La Plata',
  description: 'Barbería moderna. Estilo urbano. Reservá online en segundos. Dos sucursales en La Plata.',
  keywords: ['barbería', 'barbershop', 'la plata', 'corte de pelo', 'barba', 'barberbross'],
  openGraph: {
    title: 'BarberBross | Barbería Premium en La Plata',
    description: 'Barbería moderna. Estilo urbano. Reservá online en segundos.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
