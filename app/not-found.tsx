import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md text-center space-y-6">
        <p className="text-primary font-heading tracking-widest text-sm">
          ERROR 404
        </p>
        <h1 className="font-heading text-6xl md:text-7xl leading-none">
          Página no encontrada
        </h1>
        <p className="text-muted-foreground">
          La página que estás buscando no existe o fue movida. Volvé al inicio y reservá tu turno.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
