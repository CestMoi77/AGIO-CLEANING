import { Link } from 'react-router-dom'
import { Bed, Sofa, Grid3X3, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'

const diensten = [
  {
    id: 'matrasreiniging',
    icon: Bed,
    title: 'Matrasreiniging',
    tagline: 'Slaap hygiënisch, slaap gezond',
    intro: `Wist u dat een gemiddeld matras na enkele jaren gebruik miljoenen huisstofmijt, huidschilfers, bacteriën en schimmelsporen kan bevatten? Een professionele matrasreiniging van Agion Cleaning zorgt voor een diepgaande reiniging en ontsmetting van uw matras — voor een gezondere slaapomgeving.`,
    voordelen: [
      'Verwijdering van huisstofmijt en allergenen',
      'Eliminatie van bacteriën en schimmelsporen',
      'Verwijdering van vlekken en geuren',
      'Verlengde levensduur van uw matras',
      'Hygiënisch resultaat voor betere nachtrust',
      'Geschikt voor alle matrastypen (veer, koud schuim, traagschuim, latex)',
    ],
    voorwie: 'Geschikt voor particulieren, hotels, vakantieparken, zorgtehuizen en verhuurbedrijven.',
    subDiensten: [
      'Dieptereiniging en ontsmetting',
      'Vlekkenverwijdering',
      'Geurbehandeling',
      'Allergenenreductie',
      'Periodieke reinigingsabonnementen',
    ],
    color: 'primary',
  },
  {
    id: 'meubelreiniging',
    icon: Sofa,
    title: 'Meubelreiniging',
    tagline: 'Meubels als nieuw, zonder de kosten van vervanging',
    intro: `Uw bank, stoelen of andere gestoffeerde meubels verdienen de beste verzorging. Dagelijks gebruik, huisdieren, kinderen en leven laten sporen achter die met gewone huishoudmiddelen nauwelijks te verwijderen zijn. Agion Cleaning reinigt uw meubels vakkundig en grondig, met middelen die veilig zijn voor uw bekleding.`,
    voordelen: [
      'Verwijdering van vlekken, vuil en vet',
      'Opfrissen van kleur en structuur van de bekleding',
      'Geschikt voor stof, leer, kunstleer en microvezel',
      'Geen schade aan de bekleding door de juiste middelen',
      'Eliminatie van geuren (tabak, dieren, voedsel)',
      'Verlengde levensduur van uw meubilair',
    ],
    voorwie: 'Geschikt voor particulieren, kantoren, horeca, hotels en zorgaanbieders.',
    subDiensten: [
      'Bandienstreiniging (banken, fauteuils)',
      'Stoelenreiniging (eetkamerstoelen, bureau- en vergaderstoelen)',
      'Leer- en kunstleerbehandeling',
      'Vlekken- en geurverwijdering',
      'Periodieke onderhoudspakketten',
    ],
    color: 'accent',
  },
  {
    id: 'vloerreiniging',
    icon: Grid3X3,
    title: 'Vloerreiniging',
    tagline: 'Van tapijt tot tegel: wij maken uw vloer stralend schoon',
    intro: `Vloeren zijn de meest gebruikte oppervlakken in elk pand. Vuil, zand, vet en vlekken stapelen zich op in vezels en voegen — soms zonder dat u het direct ziet. Met professionele apparatuur en de juiste reinigingstechnieken geeft Agion Cleaning uw vloer een grondige make-over die u met dagelijks schoonmaken nooit bereikt.`,
    voordelen: [
      'Grondige dieptereiniging van tapijt, laminaat, tegels en parket',
      'Verwijdering van hardnekkige vlekken en aanslag',
      'Voegbehandeling voor tegelvloeren',
      'Beschermende coating optioneel beschikbaar',
      'Geschikt voor woon- en werkruimtes',
      'Snel droog, minimale overlast',
    ],
    voorwie: 'Geschikt voor particulieren, kantoren, winkels, horeca, scholen en zorginstellingen.',
    subDiensten: [
      'Tapijt- en karpetreiniging',
      'Harde vloerreiniging (tegels, plavuizen, beton)',
      'Laminaat- en parketreiniging',
      'Voegbehandeling',
      'Anti-slip behandelingen',
      'Periodieke vloeronderhoud',
    ],
    color: 'sky',
  },
]

const colorMap: Record<string, { bg: string; text: string; badge: string; btn: string }> = {
  primary: {
    bg: 'bg-primary-50',
    text: 'text-primary-600',
    badge: 'bg-primary-100 text-primary-700',
    btn: 'btn-primary',
  },
  accent: {
    bg: 'bg-accent-50',
    text: 'text-accent-600',
    badge: 'bg-accent-100 text-accent-700',
    btn: 'bg-accent-600 hover:bg-accent-700 text-white inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
    btn: 'bg-sky-600 hover:bg-sky-700 text-white inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md',
  },
}

export default function DienstenPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge bg-white/20 text-white mb-4">Onze diensten</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professionele reinigingsdiensten
          </h1>
          <p className="text-xl text-primary-200 leading-relaxed">
            Matrasreiniging, meubelreiniging en vloerreiniging — vakkundig uitgevoerd voor een hygiënisch resultaat.
          </p>
        </div>
      </section>

      {/* DIENSTEN SECTIES */}
      {diensten.map((dienst, index) => {
        const c = colorMap[dienst.color]
        return (
          <section
            key={dienst.id}
            id={dienst.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Linker kolom: uitleg */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center mb-5`}>
                    <dienst.icon size={28} />
                  </div>
                  <span className={`badge ${c.badge} mb-3`}>{dienst.title}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{dienst.title}</h2>
                  <p className="text-lg text-primary-600 font-medium mb-4">{dienst.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{dienst.intro}</p>

                  <p className="text-sm text-gray-500 mb-4"><strong>Voor wie:</strong> {dienst.voorwie}</p>

                  <Link to="/contact" className={c.btn}>
                    Vraag een offerte aan
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Rechter kolom: voordelen + subdiensten */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="card mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Voordelen van {dienst.title.toLowerCase()}</h3>
                    <ul className="space-y-3">
                      {dienst.voordelen.map((v) => (
                        <li key={v} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="font-semibold text-gray-900 mb-4">Onze {dienst.title.toLowerCase()} diensten</h3>
                    <ul className="space-y-2">
                      {dienst.subDiensten.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA SECTIE */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vrijblijvend een offerte aanvragen?
          </h2>
          <p className="text-xl text-primary-200 mb-8 leading-relaxed">
            Neem contact op en ontvang snel een heldere offerte op maat. Geen verplichtingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Contact opnemen
              <ArrowRight size={16} />
            </Link>
            {/* WHATSAPP: Vervang het nummer */}
            <a
              href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20wil%20graag%20meer%20informatie%20over%20jullie%20diensten."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={16} />
              WhatsApp ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
