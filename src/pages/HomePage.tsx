import { Link } from 'react-router-dom'
import {
  Sparkles, Shield, Clock, CheckCircle, Star, ArrowRight,
  Phone, MessageCircle, Bed, Sofa, Grid3X3, ChevronDown,
  Award, ThumbsUp, Headphones, Users
} from 'lucide-react'

const services = [
  {
    icon: Bed,
    id: 'matrasreiniging',
    title: 'Matrasreiniging',
    description:
      'Uw matras grondig gereinigd, ontsmet en verfrist. We verwijderen huisstofmijt, bacteriën, vlekken en geurtjes voor een hygiënische nachtrust.',
    link: '/diensten#matrasreiniging',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: Sofa,
    id: 'meubelreiniging',
    title: 'Meubelreiniging',
    description:
      'Bekleding, banken, stoelen en andere meubels vakkundig schoongemaakt. Wij behandelen stof, leer en kunstleer met de juiste middelen.',
    link: '/diensten#meubelreiniging',
    color: 'bg-accent-50 text-accent-600',
  },
  {
    icon: Grid3X3,
    id: 'vloerreiniging',
    title: 'Vloerreiniging',
    description:
      'Tapijt, tegels, laminaat of parket – wij maken uw vloer diep schoon. Vlekken, aanslag en vuil verdwijnen zonder de ondergrond te beschadigen.',
    link: '/diensten#vloerreiniging',
    color: 'bg-sky-50 text-sky-600',
  },
]

const reasons = [
  { icon: Award, title: 'Gecertificeerde professionals', desc: 'Onze reinigingsspecialisten werken met professionele apparatuur en veilige, milieuvriendelijke middelen.' },
  { icon: Shield, title: 'Veilig en milieubewust', desc: 'Wij gebruiken producten die veilig zijn voor mensen, huisdieren en het milieu.' },
  { icon: Clock, title: 'Snelle service', desc: 'Wij plannen snel en werken efficiënt, zodat u zo min mogelijk overlast heeft.' },
  { icon: ThumbsUp, title: '100% tevredenheidsgarantie', desc: 'Niet tevreden? Dan lossen wij het op. Uw tevredenheid is onze prioriteit.' },
  { icon: Headphones, title: 'Persoonlijk advies', desc: 'Twijfelt u over welke dienst u nodig heeft? Bel of app ons voor vrijblijvend advies.' },
  { icon: Users, title: 'Voor iedereen', desc: 'Zowel voor particulieren als zakelijke klanten bieden wij maatwerk oplossingen.' },
]

const steps = [
  { num: '01', title: 'Vrijblijvende offerte', desc: 'Neem contact op en ontvang snel een duidelijke offerte op maat. Geen verborgen kosten.' },
  { num: '02', title: 'Afspraak inplannen', desc: 'We plannen een afspraak op een tijdstip dat voor u uitkomt. Flexibel en klantvriendelijk.' },
  { num: '03', title: 'Professionele reiniging', desc: 'Onze specialist voert de reiniging vakkundig uit met professionele apparatuur.' },
  { num: '04', title: 'Resultaat gegarandeerd', desc: 'U ontvangt een fris, hygiënisch resultaat. Wij staan achter ons werk.' },
]

const testimonials = [
  {
    name: 'Marieke de Vries',
    role: 'Particuliere klant',
    text: 'Mijn matras was na jaren gebruik echt aan reiniging toe. Agion Cleaning heeft het perfect gedaan – hij ruikt weer fris en ik slaap er heerlijk op!',
    rating: 5,
  },
  {
    name: 'Jeroen van der Berg',
    role: 'Hotelmanager',
    text: 'We laten al onze hotelkamers periodiek reinigen door Agion. Professioneel, betrouwbaar en altijd op tijd. Aanrader voor elk bedrijf in de hospitality.',
    rating: 5,
  },
  {
    name: 'Sandra Hofman',
    role: 'Particuliere klant',
    text: 'De bank ziet er uit als nieuw! Vlekken die er al jaren inzaten zijn weg. Vriendelijk team en een mooi resultaat. Ik zou ze zo weer bellen.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Hoe lang duurt een matrasreiniging?',
    a: 'Een standaard matrasreiniging duurt doorgaans 30 tot 60 minuten per matras, afhankelijk van de staat en het type matras.',
  },
  {
    q: 'Kan ik dezelfde dag nog op het matras slapen?',
    a: 'In de meeste gevallen is het matras binnen een paar uur droog en weer volledig bruikbaar. Wij geven u hierover altijd duidelijk advies na de reiniging.',
  },
  {
    q: 'Zijn jullie middelen veilig voor kinderen en huisdieren?',
    a: 'Ja, wij gebruiken uitsluitend veilige, professionele reinigingsmiddelen die geen gevaar vormen voor kinderen, huisdieren of mensen met allergieën.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} />
              Professionele reiniging op maat
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fris, hygiënisch en{' '}
              <span className="text-accent-300">onberispelijk schoon</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
              Agion Cleaning is uw specialist in matrasreiniging, meubelreiniging en vloerreiniging.
              Professioneel, betrouwbaar en met oog voor detail — voor particulieren en bedrijven door heel Nederland.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Vraag een offerte aan
                <ArrowRight size={16} />
              </Link>
              {/* WHATSAPP: Vervang het nummer */}
              <a
                href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20uw%20reinigingsdiensten."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} />
                App ons direct
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center pb-6">
          <a href="#diensten" aria-label="Scroll naar diensten" className="text-white/60 hover:text-white transition-colors animate-bounce">
            <ChevronDown size={28} />
          </a>
        </div>
      </section>

      {/* TRUSTBALK */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm text-gray-600">
            {[
              { icon: CheckCircle, text: 'Gecertificeerde reinigingsspecialisten' },
              { icon: Shield, text: 'Veilige, milieuvriendelijke middelen' },
              { icon: Clock, text: 'Snelle afspraken, ook in het weekend' },
              { icon: ThumbsUp, text: 'Tevredenheidsgarantie' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-primary-600" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIENSTEN */}
      <section id="diensten" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Onze diensten</span>
            <h2 className="section-title mb-4">Wat doet Agion Cleaning?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Wij reinigen grondig en professioneel, met de juiste middelen en apparatuur.
              Altijd op maat, altijd met aandacht voor uw situatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group card hover:-translate-y-1 transition-all duration-200 hover:shadow-md flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-auto text-primary-600 text-sm font-medium group-hover:underline">
                  Meer informatie →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/diensten" className="btn-primary">
              Alle diensten bekijken
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WAAROM AGION CLEANING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-accent-100 text-accent-700 mb-3">Waarom Agion Cleaning?</span>
            <h2 className="section-title mb-4">Uw keuze voor een cleaner leven</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Wij combineren vakmanschap, kwaliteitsmiddelen en persoonlijke service voor een resultaat dat u ziet én voelt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <r.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Werkwijze</span>
            <h2 className="section-title mb-4">Hoe werkt het?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              In vier eenvoudige stappen regelen wij uw reiniging van A tot Z.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-600 text-white font-bold text-xl flex items-center justify-center shadow-md">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">
              Direct een afspraak maken
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTICULIER + ZAKELIJK BLOKKEN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-100">
            <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-4">
              <Sparkles size={22} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Voor particulieren</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Geniet van een schone, hygiënische woning. Wij reinigen uw matras, meubels en vloeren snel en professioneel,
              zodat u kunt ontspannen in een frisse omgeving.
            </p>
            <Link to="/particulier" className="btn-primary">
              Meer voor particulieren
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 border border-accent-100">
            <div className="w-12 h-12 rounded-xl bg-accent-600 text-white flex items-center justify-center mb-4">
              <Award size={22} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Voor bedrijven</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Een representatieve, hygiënische werkomgeving is essentieel. Wij bieden maatwerk reinigingsschema's
              voor hotels, kantoren, zorginstellingen, verhuurpanden en meer.
            </p>
            <Link to="/zakelijk" className="btn-primary bg-accent-600 hover:bg-accent-700">
              Meer voor bedrijven
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-yellow-100 text-yellow-700 mb-3">Wat onze klanten zeggen</span>
            <h2 className="section-title mb-4">Beoordelingen</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Honderden tevreden klanten gingen u voor. Lees hier hun ervaringen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Veelgestelde vragen</span>
            <h2 className="section-title mb-4">Heeft u een vraag?</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-2xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    {faq.q}
                    <ChevronDown size={18} className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/professionele-reiniging" className="btn-secondary">
              Alle veelgestelde vragen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles size={40} className="mx-auto mb-6 text-accent-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor een frisse start?
          </h2>
          <p className="text-xl text-primary-200 mb-8 leading-relaxed">
            Vraag vandaag nog een vrijblijvende offerte aan. Wij nemen binnen 24 uur contact met u op.
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
