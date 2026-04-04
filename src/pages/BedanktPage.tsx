import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, MessageCircle, Phone } from 'lucide-react'

export default function BedanktPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bedankt voor uw bericht!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-3">
          Wij hebben uw bericht ontvangen en nemen zo snel mogelijk — doorgaans binnen 24 uur op werkdagen — contact met u op.
        </p>
        <p className="text-gray-500 mb-8">
          U heeft ook een bevestiging ontvangen op het opgegeven e-mailadres.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/" className="btn-primary">
            Terug naar home
            <ArrowRight size={16} />
          </Link>
          <Link to="/diensten" className="btn-secondary">
            Onze diensten bekijken
          </Link>
        </div>

        <div className="card max-w-sm mx-auto">
          <p className="text-sm text-gray-600 mb-4">Liever direct contact?</p>
          <div className="flex flex-col gap-3">
            {/* WHATSAPP: Vervang het nummer */}
            <a
              href="https://wa.me/31VERVANGWANUMMER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp ons direct
            </a>
            {/* TELEFOONNUMMER: Vervang het nummer */}
            <a
              href="tel:+31VERVANGTELEFOON"
              className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              <Phone size={16} />
              Of bel ons: +31 (0)6 – VERVANG NUMMER
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
