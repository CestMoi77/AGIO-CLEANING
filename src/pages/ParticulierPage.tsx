import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Heart, Shield, Bed, Sofa, Grid3X3, MessageCircle, Star, Phone } from 'lucide-react'

const voordelen = [
  { icon: Heart, title: 'Betere gezondheid', desc: 'Minder huisstofmijt, bacteriën en allergenen in uw slaap- en leefomgeving zorgen voor minder klachten en een betere nachtrust.' },
  { icon: Shield, title: 'Veilig voor het hele gezin', desc: 'Onze reinigingsmiddelen zijn veilig voor kinderen, ouderen en huisdieren. Wij reinigen groen en verantwoord.' },
  { icon: Bed, title: 'Frisser slapen', desc: 'Een schoon matras voelt lekkerder en ruikt beter. U merkt het verschil direct na de eerste nacht.' },
  { icon: Sofa, title: 'Langere levensduur', desc: 'Regelmatige reiniging verlengt de levensduur van uw matrassen, banken en vloerbedekking aanzienlijk.' },
]

const diensten = [
  {
    icon: Bed,
    title: 'Matrasreiniging thuis',
    items: ['Eenpersoonsmatrassen', 'Tweepersoonsmatrassen', 'Kindermatrassen', 'Box spring matrassen'],
    link: '/diensten#matrasreiniging',
  },
  {
    icon: Sofa,
    title: 'Meubelreiniging thuis',
    items: ['Bank en zithoek', 'Eetkamerstoelen', 'Fauteuils', 'Andere gestoffeerde meubels'],
    link: '/diensten#meubelreiniging',
  },
  {
    icon: Grid3X3,
    title: 'Vloerreiniging thuis',
    items: ['Tapijt en vloerkleden', 'Tegelvloeren', 'Laminaat en parket', 'Voegbehandeling'],
    link: '/diensten#vloerreiniging',
  },
]

export default function ParticulierPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge bg-white/20 text-white mb-4">Voor particulieren</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Een schoon huis, een frisse start
          </h1>
          <p className="text-xl text-primary-200 leading-relaxed max-w-2xl mx-auto">
            Agion Cleaning reinigt uw matras, meubels en vloeren professioneel thuis bij u.
            Snel, discreet en met gegarandeerd resultaat.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Vraag een offerte aan
              <ArrowRight size={16} />
            </Link>
            {/* WHATSAPP: Vervang het nummer */}
            <a
              href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20zoek%20reiniging%20als%20particulier."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={16} />
              App ons nu
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-primary-100 text-primary-700 mb-3">Waarom laten reinigen?</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Uw huis verdient professionele zorg
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                U poetst dagelijks uw huis, maar sommige oppervlakken vragen meer dan een gewone schoonmaakbeurt.
                Matrassen, banken en tapijten accumuleren in de loop van de tijd vuil, bacteriën en allergenen die
                met gewone huishoudmiddelen niet te verwijderen zijn.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Een professionele reiniging van Agion Cleaning geeft u een resultaat dat u écht kunt zien, ruiken en voelen.
                Wij werken snel, discreet en met uitsluitend veilige middelen — zodat uw gezin er geen hinder van ondervindt.
              </p>
              <ul className="space-y-3">
                {['Geen rommel of overlast na de reiniging', 'Transparante prijzen, geen verrassingen', 'Wij komen bij u thuis, u hoeft nergens heen', "Flexibele afspraken \u2014 ook 's avonds en in het weekend"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "Ik had nooit gedacht dat mijn matras er zo fris uit kon zien. De reiniging duurde nog geen uur en het resultaat
                is geweldig. Ik heb meteen ook de bank laten reinigen. Absoluut een aanrader!"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Femke Janssen</div>
                <div className="text-gray-500 text-sm">Particuliere klant, Utrecht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOORDELEN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-accent-100 text-accent-700 mb-3">Voordelen voor u</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom kiezen voor professionele reiniging?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Een schone woning draagt bij aan uw gezondheid, comfort en woonplezier. Dit zijn de belangrijkste voordelen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {voordelen.map((v) => (
              <div key={v.title} className="card flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIENSTEN VOOR PARTICULIEREN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Onze diensten</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat wij voor u doen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diensten.map((d) => (
              <div key={d.title} className="card">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <d.icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{d.title}</h3>
                <ul className="space-y-2 mb-5">
                  {d.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={d.link} className="text-primary-600 text-sm font-medium hover:underline">
                  Meer over {d.title.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor een frisse woning?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Vraag vandaag nog een vrijblijvende offerte aan of neem direct contact op.
            Wij staan voor u klaar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Offerte aanvragen
              <ArrowRight size={16} />
            </Link>
            {/* TELEFOONNUMMER: Vervang het nummer */}
            <a href="tel:+31VERVANGTELEFOON" className="btn-outline">
              <Phone size={16} />
              Bel ons direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
