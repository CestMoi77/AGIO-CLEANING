import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-8xl font-bold text-primary-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pagina niet gevonden</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          De pagina die u zoekt bestaat niet of is verplaatst.
          Gebruik onderstaande links om verder te gaan.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} />
            Terug naar home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact opnemen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
