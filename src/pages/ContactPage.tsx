import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const dienstenOpties = [
  'Matrasreiniging',
  'Meubelreiniging (bank, stoelen)',
  'Vloerreiniging (tapijt, tegels)',
  'Combinatie van diensten',
  'Periodiek reinigingscontract (zakelijk)',
  'Andere vraag',
]

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    klantType: 'Particulier',
    dienst: '',
    bericht: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        navigate('/bedankt')
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMsg(data.message || 'Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Kan geen verbinding maken met de server. Probeer het later opnieuw.')
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge bg-white/20 text-white mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Neem contact op</h1>
          <p className="text-xl text-primary-200 leading-relaxed">
            Vraag een vrijblijvende offerte aan of stel uw vraag. Wij reageren binnen 24 uur.
          </p>
        </div>
      </section>

      {/* CONTACT SECTIE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* CONTACT INFORMATIE */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Agion Cleaning</h2>
                <p className="text-gray-600 leading-relaxed">
                  Heeft u een vraag, wilt u een offerte of een afspraak plannen? Neem op een van onderstaande manieren contact met ons op.
                  Wij streven ernaar om binnen 24 uur te reageren.
                </p>
              </div>

              <div className="space-y-4">
                {/* TELEFOONNUMMER: Vervang het nummer */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Telefoon</div>
                    <a href="tel:+31VERVANG" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">
                      +31 (0)6 – VERVANG NUMMER
                    </a>
                  </div>
                </div>

                {/* E-MAILADRES: Vervang het e-mailadres */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">E-mail</div>
                    <a href="mailto:info@agioncleaning.nl" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">
                      info@agioncleaning.nl
                    </a>
                  </div>
                </div>

                {/* WERKGEBIED: Pas het werkgebied aan */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Werkgebied</div>
                    <div className="font-medium text-gray-900">Heel Nederland</div>
                  </div>
                </div>

                {/* OPENINGSTIJDEN: Pas de tijden aan */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Openingstijden</div>
                    <div className="text-gray-900 text-sm space-y-0.5">
                      <div>Ma–Vr: 08:00–18:00</div>
                      <div>Zaterdag: 09:00–14:00</div>
                      <div>Zondag: Op afspraak</div>
                    </div>
                  </div>
                </div>

                {/* WHATSAPP: Vervang het nummer */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">WhatsApp</div>
                    <a
                      href="https://wa.me/31VERVANGWANUMMER?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20uw%20reinigingsdiensten."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 hover:text-green-600 transition-colors"
                    >
                      App ons direct via WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAPS PLACEHOLDER */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                {/* GOOGLE MAPS: Vervang dit blok met een echte Google Maps embed */}
                <div className="text-center">
                  <MapPin size={24} className="mx-auto mb-2 text-gray-300" />
                  Google Maps kaart<br />hier invoegen
                </div>
              </div>
            </div>

            {/* CONTACTFORMULIER */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Stuur ons een bericht</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op — doorgaans binnen 24 uur op werkdagen.
                </p>

                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
                        Naam <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="naam"
                        name="naam"
                        type="text"
                        required
                        value={form.naam}
                        onChange={handleChange}
                        placeholder="Uw volledige naam"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mailadres <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="uw@email.nl"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefoonnummer
                      </label>
                      <input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        value={form.telefoon}
                        onChange={handleChange}
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="klantType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type klant <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="klantType"
                        name="klantType"
                        required
                        value={form.klantType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition bg-white"
                      >
                        <option value="Particulier">Particulier</option>
                        <option value="Zakelijk">Zakelijk</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dienst" className="block text-sm font-medium text-gray-700 mb-1">
                      Gewenste dienst / onderwerp <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="dienst"
                      name="dienst"
                      required
                      value={form.dienst}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition bg-white"
                    >
                      <option value="">Selecteer een optie...</option>
                      {dienstenOpties.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
                      Bericht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={handleChange}
                      placeholder="Omschrijf uw situatie of stel uw vraag. Hoe meer informatie u geeft, hoe beter wij u van dienst kunnen zijn."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Bericht wordt verstuurd...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Bericht versturen
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Door dit formulier te versturen gaat u akkoord met ons{' '}
                    <a href="/privacy" className="underline hover:text-gray-600">privacybeleid</a>.
                    Wij gebruiken uw gegevens uitsluitend voor het beantwoorden van uw vraag.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
