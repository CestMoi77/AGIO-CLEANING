import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Building, Hotel, Stethoscope, Home, ShoppingBag,
  Star, Clock, Shield, Award, RefreshCw, MessageCircle, Phone, Users
} from 'lucide-react'

const doelgroepen = [
  { icon: Hotel, name: 'Hotels & Verblijven', desc: 'Periodieke matras- en meubelreiniging voor alle kamers. Verhoog de tevredenheid van uw gasten met een hygiënische slaapomgeving.' },
  { icon: Building, name: 'Kantoren & Bedrijven', desc: 'Een representatieve werkomgeving begint met schone meubels en vloeren. Wij reinigen buiten uw kantooruren.' },
  { icon: Stethoscope, name: 'Zorg & Gezondheid', desc: 'Voor verpleeghuizen, ziekenhuizen en klinieken leveren wij gecertificeerde, hygiënische reinigingsoplossingen.' },
  { icon: Home, name: 'Vastgoed & Verhuur', desc: 'Tussendoor reinigen tussen huurders is essentieel. Wij zorgen voor frisse, gepresenteerde woningen en bedrijfspanden.' },
  { icon: ShoppingBag, name: 'Retail & Horeca', desc: 'Presentatie is alles. Onze reinigingsdiensten houden uw zaak er altijd verzorgd en professioneel uitzien.' },
  { icon: Users, name: 'Scholen & Instellingen', desc: 'Gezonde leeromgevingen vragen om regelmatige professionele reiniging. Wij zijn discreet en werken buiten schooltijden.' },
]

const voordelen = [
  { icon: Award, title: 'Professionele uitstraling', desc: 'Een hygiënische, verzorgde omgeving straalt kwaliteit uit naar klanten, gasten en medewerkers.' },
  { icon: RefreshCw, title: 'Periodieke abonnementen', desc: 'Kies voor een reinigingsschema op maat: wekelijks, maandelijks of per kwartaal. Volledig flexibel.' },
  { icon: Clock, title: 'Buiten kantooruren', desc: "Wij werken wanneer het u uitkomt: vroeg in de ochtend, 's avonds of in het weekend." },
  { icon: Shield, title: 'Betrouwbaar en gedocumenteerd', desc: 'U ontvangt een reinigingsrapport na elke behandeling. Volledig inzichtelijk en traceerbaar.' },
  { icon: Star, title: 'Maatwerk per locatie', desc: 'Elke zakelijke locatie is anders. Wij maken een plan op maat voor uw specifieke situatie.' },
  { icon: CheckCircle, title: 'Vaste contactpersoon', desc: 'Als zakelijke klant heeft u altijd een vaste aanspreekpartner bij Agion Cleaning.' },
]

export default function ZakelijkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="badge bg-white/20 text-white mb-4">Voor bedrijven</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professionele reiniging voor uw bedrijf
            </h1>
            <p className="text-xl text-primary-200 leading-relaxed mb-8">
              Agion Cleaning is uw betrouwbare partner voor zakelijke matras-, meubel- en vloerreiniging.
              Wij denken mee, werken flexibel en leveren een resultaat dat uw organisatie vertegenwoordigt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Zakelijke offerte aanvragen
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20heb%20een%20zakelijke%20vraag%20over%20uw%20reinigingsdiensten."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} />
                Direct overleggen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-accent-100 text-accent-700 mb-3">Zakelijke reinigingsoplossingen</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Uw imago begint bij netheid
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Of u nu een hotel runt, kantooropstelling onderhoudt, zorg verleent of panden verhuurt: een hygiënische,
                representatieve omgeving is geen bijzaak, maar een basisvereiste. Agion Cleaning begrijpt de zakelijke context
                en levert diensten die passen bij uw organisatie.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wij bieden reinigingsschema's op maat, werken buiten kantooruren en garanderen minimale verstoring van uw bedrijfsproces.
                Met een vaste contactpersoon en duidelijke rapportage weet u altijd wat er gedaan is.
              </p>
              <ul className="space-y-3">
                {[
                  'Geschikt voor kleine en grote organisaties',
                  'Flexibele planning, ook buiten kantooruren',
                  'Reinigingsrapportages op aanvraag',
                  'Langdurige samenwerking met vaste tarieven',
                  'Gecertificeerde reinigingsmiddelen',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Onze zakelijke aanpak</h3>
              {[
                { step: '1', title: 'Locatiebeoordeling', desc: 'Wij beoordelen uw locatie en bespreken uw wensen.' },
                { step: '2', title: 'Maatwerkvoorstel', desc: 'U ontvangt een gedetailleerde offerte met schema.' },
                { step: '3', title: 'Vaste afspraken', desc: 'We plannen reinigingsmomenten die passen bij uw bedrijfsvoering.' },
                { step: '4', title: 'Professionele uitvoering', desc: 'Onze teams voeren de reiniging vakkundig uit.' },
                { step: '5', title: 'Rapportage & evaluatie', desc: 'Transparante terugkoppeling en periodieke evaluatie.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 mb-4 last:mb-0">
                  <div className="w-8 h-8 rounded-full bg-accent-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{s.title}</div>
                    <div className="text-gray-600 text-sm">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOELGROEPEN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Wie bedienen wij?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zakelijke sectoren</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agion Cleaning werkt voor een breed scala aan zakelijke klanten. Van kleine kantoren tot grote hotel- en zorginstellingen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doelgroepen.map((d) => (
              <div key={d.name} className="card">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <d.icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{d.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOORDELEN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-accent-100 text-accent-700 mb-3">Zakelijke voordelen</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom zakelijke klanten voor ons kiezen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voordelen.map((v) => (
              <div key={v.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-accent-200 hover:bg-accent-50/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                  <v.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card text-center py-10">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic max-w-2xl mx-auto mb-6">
              "Agion Cleaning reinigt wekelijks onze hotelkamers. De matrassen en meubels worden uitstekend verzorgd.
              Gasten merken het verschil en we krijgen aanzienlijk meer positieve reviews over hygiëne. Een betrouwbare,
              professionele partner die we van harte aanbevelen."
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900">Thomas Bakker</div>
              <div className="text-gray-500 text-sm">Hotelmanager, Amsterdam</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor een zakelijk partnerschap?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Neem contact op voor een vrijblijvend gesprek en een offerte op maat.
            Wij staan klaar om uw organisatie te ondersteunen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Neem contact op
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
