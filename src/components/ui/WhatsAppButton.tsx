import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  // WHATSAPP: Vervang het telefoonnummer (zonder + of spaties, wel landcode)
  // Voorbeeld: 31612345678 voor +31 6 12345678
  const waNumber = '31VERVANGWANUMMER'
  const message = encodeURIComponent('Hallo, ik heb een vraag over uw reinigingsdiensten.')
  const waUrl = `https://wa.me/${waNumber}?text=${message}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neem contact op via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
    >
      {/* Label verschijnt bij hover op desktop */}
      <span className="hidden group-hover:flex items-center pl-4 pr-1 py-3 text-sm whitespace-nowrap">
        App ons direct
      </span>
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shrink-0">
        <MessageCircle size={26} />
      </div>
    </a>
  )
}
