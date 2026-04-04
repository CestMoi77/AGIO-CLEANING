import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Hoofdfooter */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Kolom 1: Bedrijfsinfo */}
          <div className="lg:col-span-1">
            {/* LOGO: Vervang dit blok met je eigen logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg">Agion</div>
                <div className="text-primary-400 font-semibold text-xs tracking-widest uppercase -mt-0.5">Cleaning</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professionele reiniging van matrassen, meubels en vloeren. Voor particulieren en zakelijke klanten door heel Nederland.
            </p>
            {/* SOCIAL: Vervang de links met uw eigen sociale media profielen */}
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Snelle links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Snelle links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'Diensten', path: '/diensten' },
                { label: 'Voor particulieren', path: '/particulier' },
                { label: 'Voor bedrijven', path: '/zakelijk' },
                { label: 'Professionele reiniging', path: '/professionele-reiniging' },
                { label: 'Contact', path: '/contact' },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white hover:underline transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Diensten */}
          <div>
            <h3 className="text-white font-semibold mb-4">Onze diensten</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/diensten#matrasreiniging" className="hover:text-white hover:underline transition-colors">Matrasreiniging</Link></li>
              <li><Link to="/diensten#meubelreiniging" className="hover:text-white hover:underline transition-colors">Meubelreiniging</Link></li>
              <li><Link to="/diensten#vloerreiniging" className="hover:text-white hover:underline transition-colors">Vloerreiniging</Link></li>
              <li><Link to="/diensten" className="hover:text-white hover:underline transition-colors">Alle diensten</Link></li>
            </ul>

            <h3 className="text-white font-semibold mt-6 mb-4">Openingstijden</h3>
            {/* OPENINGSTIJDEN: Pas deze tijden aan */}
            <ul className="space-y-1 text-sm">
              <li>Ma–Vr: 08:00–18:00</li>
              <li>Zaterdag: 09:00–14:00</li>
              <li>Zondag: Op afspraak</li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {/* TELEFOONNUMMER: Vervang het nummer */}
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 text-primary-400 shrink-0" />
                <a href="tel:+31VERVANG" className="hover:text-white transition-colors">+31 (0)6 – VERVANG NUMMER</a>
              </li>
              {/* E-MAILADRES: Vervang het e-mailadres */}
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 text-primary-400 shrink-0" />
                <a href="mailto:info@agioncleaning.nl" className="hover:text-white transition-colors">info@agioncleaning.nl</a>
              </li>
              {/* WERKGEBIED: Pas het werkgebied aan */}
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-primary-400 shrink-0" />
                <span>Werkgebied: Nederland</span>
              </li>
              {/* WHATSAPP: Vervang het nummer */}
              <li className="flex items-start gap-2">
                <MessageCircle size={15} className="mt-0.5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20uw%20reinigingsdiensten."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp ons direct
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Onderbalk */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {year} Agion Cleaning – Alle rechten voorbehouden</span>
          <div className="flex gap-4">
            {/* PRIVACYBELEID: Voeg hier links toe naar privacy policy en algemene voorwaarden */}
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacybeleid</Link>
            <Link to="/algemene-voorwaarden" className="hover:text-gray-300 transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
