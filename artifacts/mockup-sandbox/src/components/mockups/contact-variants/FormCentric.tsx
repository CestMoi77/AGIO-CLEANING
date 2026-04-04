import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Menu,
  CheckCircle2,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function FormCentric() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Agion<span className="text-blue-600">Cleaning</span>
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Diensten</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Particulier</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Zakelijk</a>
            <a href="#" className="text-sm font-medium text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Offerte aanvragen
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-6 px-4 py-1.5 rounded-full border-none">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Hoe kunnen we u helpen?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Heeft u een vraag over onze diensten of wilt u direct een schoonmaak inplannen? 
              Neem contact met ons op via onderstaande gegevens of vul het formulier in.
            </p>
          </div>

          {/* Contact Info Pills */}
          <div className="max-w-5xl mx-auto mb-16 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Telefoon</span>
                <span className="text-sm font-semibold text-slate-900">+31 (0)6 – XX XX XX XX</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">E-mail</span>
                <span className="text-sm font-semibold text-slate-900">info@agioncleaning.nl</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Werkgebied</span>
                <span className="text-sm font-semibold text-slate-900">Heel Nederland</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Openingstijden</span>
                <span className="text-sm font-semibold text-slate-900">Ma-Vr: 08:00-18:00 (Za/Zo beperkt)</span>
              </div>
            </div>

            <Button className="h-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 flex items-center gap-3 border-none">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-green-100 uppercase tracking-wider">Direct antwoord</span>
                <span className="text-sm font-semibold">Stuur een WhatsApp</span>
              </div>
            </Button>
          </div>

          {/* Form Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-xl shadow-blue-900/5 bg-white rounded-3xl overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <CardContent className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Stuur ons een bericht</h2>
                  <p className="text-slate-500">
                    Vul uw gegevens in en wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Bedankt voor uw bericht!</h3>
                    <p className="text-slate-600 max-w-md">
                      We hebben uw aanvraag in goede orde ontvangen. U hoort binnen 24 uur van ons.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-8 rounded-full"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Nieuw bericht sturen
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700">Naam <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name" 
                          placeholder="Uw volledige naam" 
                          required 
                          className="bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">E-mailadres <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="uwnaam@voorbeeld.nl" 
                          required 
                          className="bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700">Telefoonnummer</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="06 12345678" 
                          className="bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="clientType" className="text-slate-700">Type klant <span className="text-red-500">*</span></Label>
                        <Select required>
                          <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl h-12">
                            <SelectValue placeholder="Selecteer type klant" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="particulier">Particulier</SelectItem>
                            <SelectItem value="zakelijk">Zakelijk</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-700">Gewenste dienst <span className="text-red-500">*</span></Label>
                      <Select required>
                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl h-12">
                          <SelectValue placeholder="Kies een dienst" />
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
                      <Label htmlFor="message" className="text-slate-700">Bericht <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="message" 
                        placeholder="Beschrijf hier uw vraag of de te reinigen objecten..." 
                        required
                        className="min-h-[160px] bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-xl resize-none p-4"
                      />
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-slate-100">
                      <p className="text-xs text-slate-500 max-w-xs">
                        Door dit formulier te versturen gaat u akkoord met ons privacybeleid.
                      </p>
                      
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
                      >
                        Bericht versturen
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
        </div>
      </main>
    </div>
  );
}
