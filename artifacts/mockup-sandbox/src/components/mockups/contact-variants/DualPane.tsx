import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function DualPane() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Absolute Header (Spans both panes, adapts colors based on side) */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 pointer-events-none">
        <div className="flex-1 flex items-center pointer-events-auto">
          <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1e7be6] rounded-sm"></div>
            </div>
            Agion Cleaning
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 pointer-events-auto text-slate-600 font-medium">
          <a href="#" className="hover:text-[#1e7be6] transition-colors">Home</a>
          <a href="#" className="hover:text-[#1e7be6] transition-colors">Diensten</a>
          <a href="#" className="hover:text-[#1e7be6] transition-colors">Particulier</a>
          <a href="#" className="hover:text-[#1e7be6] transition-colors">Zakelijk</a>
          <a href="#" className="text-[#1e7be6] font-semibold">Contact</a>
        </nav>

        <div className="flex-1 flex justify-end pointer-events-auto">
          <Button className="bg-[#1e7be6] hover:bg-[#1565c0] text-white hidden md:flex rounded-full px-6">
            Offerte aanvragen
          </Button>
        </div>
      </header>

      {/* LEFT PANE: Brand & Contact Info */}
      <div className="w-full md:w-[45%] bg-[#0f172a] relative overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 min-h-[50vh] md:min-h-screen text-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-20%] w-[70%] h-[50%] bg-[#1e7be6] rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-[#0d9488] rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-teal-300 mb-6 backdrop-blur-md">
            <MessageCircle className="w-4 h-4" />
            <span>Klaar om te helpen</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Kom in contact met <span className="text-[#1e7be6]">Agion Cleaning</span>
          </h1>
          <p className="text-slate-300 text-lg mb-12 leading-relaxed">
            Heb je een vraag over onze diensten of wil je direct een offerte aanvragen? Ons team staat klaar om je te helpen met een op maat gemaakte oplossing.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1e7be6] group-hover:border-[#1e7be6] transition-all duration-300">
                <Phone className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Telefoon</p>
                <p className="text-lg font-semibold">+31 (0)6 – XX XX XX XX</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1e7be6] group-hover:border-[#1e7be6] transition-all duration-300">
                <Mail className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">E-mail</p>
                <p className="text-lg font-semibold">info@agioncleaning.nl</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Werkgebied</p>
                <p className="text-lg font-semibold">Heel Nederland</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Openingstijden</p>
                <div className="text-base font-medium space-y-1">
                  <p>Ma–Vr: <span className="text-slate-300">08:00 – 18:00</span></p>
                  <p>Za: <span className="text-slate-300">09:00 – 14:00</span></p>
                  <p>Zo: <span className="text-slate-300">Op afspraak</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white border-none h-14 rounded-xl text-lg font-medium shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Stuur een WhatsApp bericht
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT PANE: Form */}
      <div className="w-full md:w-[55%] bg-white relative flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 min-h-screen">
        <div className="max-w-xl w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Stuur ons een bericht</h2>
            <p className="text-slate-500">
              Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met je op.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-semibold">Naam *</Label>
                <Input 
                  id="name" 
                  placeholder="Jouw volledige naam" 
                  required 
                  className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-[#1e7be6] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-semibold">E-mailadres *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jouw@email.nl" 
                  required 
                  className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-[#1e7be6] rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-semibold">Telefoonnummer</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="06 12345678" 
                  className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-[#1e7be6] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customerType" className="text-slate-700 font-semibold">Type klant *</Label>
                <Select required>
                  <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:ring-[#1e7be6] rounded-xl">
                    <SelectValue placeholder="Selecteer..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="particulier">Particulier</SelectItem>
                    <SelectItem value="zakelijk">Zakelijk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-slate-700 font-semibold">Gewenste dienst *</Label>
              <Select required>
                <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:ring-[#1e7be6] rounded-xl">
                  <SelectValue placeholder="Kies een dienst..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matras">Matrasreiniging</SelectItem>
                  <SelectItem value="meubel">Meubelreiniging</SelectItem>
                  <SelectItem value="vloer">Vloerreiniging</SelectItem>
                  <SelectItem value="combinatie">Combinatie</SelectItem>
                  <SelectItem value="periodiek">Periodiek contract</SelectItem>
                  <SelectItem value="anders">Andere vraag</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 font-semibold">Bericht *</Label>
              <Textarea 
                id="message" 
                placeholder="Typ hier je vraag of opmerking..." 
                required 
                className="min-h-[140px] resize-none bg-slate-50 border-slate-200 focus-visible:ring-[#1e7be6] rounded-xl p-4"
              />
            </div>

            <div className="pt-2">
              <p className="text-sm text-slate-500 mb-6">
                Door dit formulier te versturen gaat u akkoord met ons privacybeleid.
              </p>
              
              <Button 
                type="submit" 
                disabled={isSubmitted}
                className={`w-full h-14 rounded-xl text-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? "bg-teal-500 hover:bg-teal-600 shadow-teal-500/25" 
                    : "bg-[#1e7be6] hover:bg-[#1565c0] shadow-[#1e7be6]/25"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Bericht verzonden
                  </>
                ) : (
                  <>
                    Bericht versturen
                    <Send className="w-5 h-5 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
