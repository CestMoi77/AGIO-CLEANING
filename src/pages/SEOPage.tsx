import { Link } from 'react-router-dom'
import { CheckCircle, ChevronDown, ArrowRight, Bed, Sofa, Grid3X3 } from 'lucide-react'

const faqs = [
  {
    q: 'Hoe vaak moet ik mijn matras laten reinigen?',
    a: 'Wij adviseren een professionele matrasreiniging minimaal één keer per jaar. Bij allergieklachten, huisdieren of jonge kinderen is eens per zes maanden aan te raden. Hotels en vakantieparken laten matrassen idealiter elke zes maanden reinigen.',
  },
  {
    q: 'Wat is het verschil tussen matras reinigen en een nieuw matras kopen?',
    a: 'Een professionele matrasreiniging geeft uw matras een frisse, hygiënische second life. Bacteriën, huisstofmijt en geuren worden verwijderd, wat resulteert in een gezondere slaapomgeving. Dit is bovendien een stuk voordeliger dan het aanschaffen van een nieuw matras.',
  },
  {
    q: 'Zijn jullie reinigingsmiddelen veilig voor mensen met allergieën?',
    a: 'Ja. Wij gebruiken hypoallergene, professionele reinigingsmiddelen die veilig zijn voor mensen met allergieën, kinderen en huisdieren. Na de reiniging zijn er geen resten van chemische middelen meer aanwezig.',
  },
  {
    q: 'Kan Agion Cleaning ook buiten openingstijden langskomen?',
    a: "Ja, wij zijn flexibel en plannen afspraken op tijdstippen die passen bij uw leven of bedrijf. Ook 's avonds en in het weekend zijn wij beschikbaar op aanvraag.",
  },
  {
    q: 'Hoe snel is mijn meubel of matras droog na de reiniging?',
    a: 'Afhankelijk van het type behandeling en de luchtvochtigheid is uw matras of meubel doorgaans binnen 2 tot 4 uur volledig droog. In de meeste gevallen kunt u dezelfde avond nog gebruikmaken van het gereinigde item.',
  },
  {
    q: 'In welk gebied is Agion Cleaning actief?',
    a: 'Agion Cleaning is actief door heel Nederland. Neem contact op om te bevestigen of wij uw locatie bedienen.',
  },
  {
    q: 'Wat kost een matrasreiniging gemiddeld?',
    a: 'De kosten hangen af van het type matras, de grootte en de staat. Wij bieden transparante, eerlijke tarieven zonder verborgen kosten. Vraag een vrijblijvende offerte aan via ons contactformulier of bel ons voor een indicatie.',
  },
  {
    q: 'Verwijderen jullie ook vlekken uit tapijt?',
    a: 'Ja, onze vloerreiniging omvat ook vlekkenbehandeling voor tapijt, kleden en vloerbedekking. Wij behandelen hardnekkige vlekken van voedsel, dranken, inkt en meer.',
  },
]

const voordelen = [
  { icon: Bed, title: 'Matrasreiniging', items: ['Verwijdering huisstofmijt', 'Eliminatie bacteriën', 'Vlekken- en geurbehandeling', 'Hygiënische nachtrust'] },
  { icon: Sofa, title: 'Meubelreiniging', items: ['Bekleding opfrissen', 'Vlekken verwijderen', 'Leer- en stofreiniging', 'Verlengde meubellevensduur'] },
  { icon: Grid3X3, title: 'Vloerreiniging', items: ['Tapijt en vloerkleed', 'Tegels en voegen', 'Laminaat en parket', 'Anti-slip behandeling'] },
]

export default function SEOPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge bg-white/20 text-white mb-4">Professionele reiniging</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professionele matras-, meubel- en vloerreiniging
          </h1>
          <p className="text-xl text-primary-200 leading-relaxed max-w-2xl mx-auto">
            Alles wat u moet weten over professionele reiniging: hoe het werkt, wat de voordelen zijn
            en waarom het loont om dit aan specialisten over te laten.
          </p>
        </div>
      </section>

      {/* WAAROM PROFESSIONEEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom professionele reiniging belangrijk is
          </h2>
          <div className="prose text-gray-600 leading-relaxed space-y-4">
            <p>
              Dagelijks gebruik brengt slijtage en vervuiling met zich mee die u met gewone huishoudmiddelen niet kunt verwijderen.
              Een matras absorbeert gedurende jaren lichaamsvocht, huidschilfers en bacteriën. Gestoffeerde meubels nemen geuren,
              vet en stof op. Vloerbedekking vergaart diep vuil in de vezels. Al deze stoffen kunnen leiden tot gezondheidsproblemen,
              onaangename geuren en een kortere levensduur van uw interieur.
            </p>
            <p>
              Professionele reiniging gaat verder dan oppervlakkige schoonmaak. Met hoogwaardige apparatuur en gespecialiseerde middelen
              bereiken wij dieper in vezels en materialen dan huishoudelijke middelen dat kunnen. Het resultaat is een hygiënische,
              frisse omgeving die u en uw gezin ten goede komt.
            </p>
            <p>
              Voor bedrijven is een professionele uitstraling bovendien essentieel voor het vertrouwen van klanten, gasten en medewerkers.
              Investeren in periodieke reiniging is investeren in uw reputatie.
            </p>
          </div>
        </div>
      </section>

      {/* HOE AGION CLEANING WERKT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hoe Agion Cleaning werkt</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ons reinigingsproces is zorgvuldig opgebouwd voor maximaal resultaat met minimale overlast voor u.
          </p>
          <ol className="space-y-6">
            {[
              { n: 1, t: 'Inspectie en voorbereiding', d: 'Onze specialist inspecteert het te reinigen oppervlak en bepaalt de beste aanpak. Vlekken worden voorbehandeld.' },
              { n: 2, t: 'Dieptereiniging', d: 'Met professionele apparatuur voeren wij een grondige dieptereiniging uit, waarbij vuil, bacteriën en allergenen worden verwijderd.' },
              { n: 3, t: 'Behandeling op maat', d: 'Afhankelijk van het materiaal passen wij de juiste methode toe: droge reiniging, warm water extractie of stoomreiniging.' },
              { n: 4, t: 'Droging en nacontrole', d: 'Na de reiniging zorgen wij voor optimale drogingsomstandigheden en controleren het resultaat zorgvuldig.' },
              { n: 5, t: 'Oplevering', d: 'U ontvangt een fris, hygiënisch en goed ruikend resultaat dat direct in gebruik genomen kan worden.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VOORDELEN PER DIENST */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Voordelen van periodieke reiniging
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Zowel voor particulieren als bedrijven geldt: regelmatige professionele reiniging loont.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voordelen.map((v) => (
              <div key={v.title} className="card">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <v.icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{v.title}</h3>
                <ul className="space-y-2">
                  {v.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde vragen
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Staat uw vraag er niet bij? Neem gerust contact op met ons team.
          </p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    {faq.q}
                    <ChevronDown size={18} className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl text-primary-200 mb-8">
            Vraag een vrijblijvende offerte aan of neem direct contact op met ons team.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Offerte aanvragen
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
