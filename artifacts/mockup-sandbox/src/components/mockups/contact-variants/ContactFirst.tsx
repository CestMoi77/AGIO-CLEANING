import React from "react";
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Menu
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../../ui/select";
import { Card, CardContent } from "../../ui/card";

export function ContactFirst() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">A</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Agion Cleaning</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Diensten</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Particulier</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Zakelijk</a>
            <a href="#" className="text-sm font-bold text-primary">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90 rounded-full px-6">
              Offerte aanvragen
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Hoe kunnen we u helpen?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
              Kies de manier die voor u het beste werkt. We reageren altijd snel en staan voor u klaar met professioneel advies.
            </p>

            {/* Top Priority Action Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="tel:+31600000000" className="group block">
                <Card className="h-full border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer border-2">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <PhoneCall className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Bel ons direct</h3>
                    <p className="text-slate-600 mb-4">Voor dringende vragen of direct overleg.</p>
                    <span className="text-xl font-bold text-primary">+31 (0)6 – XX XX XX XX</span>
                  </CardContent>
                </Card>
              </a>

              <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer" className="group block">
                <Card className="h-full border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors cursor-pointer border-2">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                    <p className="text-slate-600 mb-4">Stuur een appje, we reageren vaak binnen een uur.</p>
                    <span className="text-xl font-bold text-[#25D366]">Start gesprek</span>
                  </CardContent>
                </Card>
              </a>

              <a href="mailto:info@agioncleaning.nl" className="group block">
                <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors cursor-pointer border-2">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">E-mail</h3>
                    <p className="text-slate-600 mb-4">Voor uitgebreide vragen of bijlagen.</p>
                    <span className="text-lg font-medium text-slate-700">info@agioncleaning.nl</span>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-600 text-sm">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span><strong>Werkgebied:</strong> Heel Nederland</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span><strong>Openingstijden:</strong> Ma–Vr: 08:00–18:00 / Za: 09:00–14:00 / Zo: Op afspraak</span>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Section: The Form */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-slate-200 flex-1"></div>
              <h2 className="text-lg font-semibold text-slate-400 uppercase tracking-wider">Of stuur een bericht</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam *</Label>
                      <Input id="name" placeholder="Uw volledige naam" required className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input id="email" type="email" placeholder="uw@email.nl" required className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input id="phone" type="tel" placeholder="+31 6 12345678" className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type klant *</Label>
                      <Select required>
                        <SelectTrigger className="bg-slate-50">
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
                    <Label htmlFor="service">Gewenste dienst *</Label>
                    <Select required>
                      <SelectTrigger className="bg-slate-50">
                        <SelectValue placeholder="Selecteer een dienst..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matras">Matrasreiniging</SelectItem>
                        <SelectItem value="meubel">Meubelreiniging</SelectItem>
                        <SelectItem value="vloer">Vloerreiniging</SelectItem>
                        <SelectItem value="combi">Combinatie</SelectItem>
                        <SelectItem value="contract">Periodiek contract</SelectItem>
                        <SelectItem value="anders">Andere vraag</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Hoe kunnen we u helpen?" 
                      rows={5} 
                      required 
                      className="bg-slate-50 resize-y"
                    />
                  </div>

                  <div className="pt-4 flex flex-col items-center text-center">
                    <Button type="submit" size="lg" className="w-full md:w-auto px-12 py-6 text-lg rounded-full">
                      Bericht versturen
                    </Button>
                    <p className="text-xs text-slate-500 mt-4">
                      Door dit formulier te versturen gaat u akkoord met ons privacybeleid.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
