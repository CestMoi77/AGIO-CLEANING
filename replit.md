# Agion Cleaning Website

Volledige bedrijfswebsite voor Agion Cleaning — een Nederlands schoonmaakbedrijf gespecialiseerd in matrasreiniging, meubelreiniging en vloerreiniging.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS
- **Routing:** React Router v6
- **Iconen:** Lucide React
- **Backend:** Express.js (Node.js) voor contactformulier + e-mail
- **E-mail:** Nodemailer (SMTP)

## Projectstructuur

```
├── src/
│   ├── components/
│   │   ├── layout/         Header, Footer, Layout
│   │   └── ui/             Button, WhatsAppButton, ServiceCard
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── DienstenPage.tsx
│   │   ├── ParticulierPage.tsx
│   │   ├── ZakelijkPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── SEOPage.tsx
│   │   ├── BedanktPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx
│   └── main.tsx
├── server.js              Express backend (contactformulier)
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Pagina's & Routes

| Route                       | Pagina                  |
|-----------------------------|-------------------------|
| `/`                         | Homepagina              |
| `/diensten`                 | Dienstenpagina          |
| `/particulier`              | Voor particulieren      |
| `/zakelijk`                 | Voor zakelijke klanten  |
| `/contact`                  | Contactpagina           |
| `/professionele-reiniging`  | SEO-informatiepagina    |
| `/bedankt`                  | Bedanktpagina           |

## Starten

```bash
npm run dev
```

Dit start zowel Vite (frontend op poort 5000) als de Express API (poort 3001) tegelijk via `concurrently`.

## Configuratie: Verplichte Placeholders

### 1. E-mail & SMTP (via Replit Secrets)

Stel de volgende Secrets in via Replit:

| Secret          | Beschrijving                                          |
|-----------------|-------------------------------------------------------|
| `CONTACT_EMAIL` | E-mailadres waarop u berichten wilt ontvangen         |
| `SMTP_HOST`     | SMTP-server (bijv. `smtp.gmail.com`)                  |
| `SMTP_PORT`     | Poortnummer (587 voor TLS, 465 voor SSL)              |
| `SMTP_USER`     | SMTP gebruikersnaam (doorgaans het e-mailadres)       |
| `SMTP_PASS`     | SMTP wachtwoord of app-specifiek wachtwoord           |

### 2. WhatsApp-nummer

Zoek in de code naar `VERVANGWANUMMER` en vervang dit met uw echte WhatsApp-nummer (zonder `+`, met landcode).
Bijv: `31612345678` voor +31 6 12345678.

Bestanden: `src/components/ui/WhatsAppButton.tsx`, `src/pages/HomePage.tsx`, `src/pages/ContactPage.tsx`, etc.

### 3. Telefoonnummer

Zoek naar `VERVANGTELEFOON` of `VERVANG NUMMER` en vervang met uw echte telefoonnummer.

### 4. E-mailadres

Vervang `info@agioncleaning.nl` met uw eigen e-mailadres in de footer, contact- en bedanktpagina.

### 5. Logo

Vervang het tijdelijke logo-blok in `Header.tsx` en `Footer.tsx` met een `<img>` tag naar uw eigen logo.

### 6. Werkgebied

Pas het werkgebied aan in `Footer.tsx` en `ContactPage.tsx`.

### 7. Domein / SEO

Pas de canonical URL en Open Graph URL aan in `index.html`:
- `og:url` → uw domeinnaam
- Schema markup `url` → uw domeinnaam

## Toekomstbestendige AI-chat Integratie

In `src/components/layout/Layout.tsx` staat een placeholder-comment:
```tsx
{/* AI-CHAT PLACEHOLDER
    Hier kan later een AI-chatassistent geïntegreerd worden.
    Voeg hier een <AIChatWidget /> component toe wanneer gereed.
*/}
```

## Kleurenschema Aanpassen

Pas de huisstijlkleuren aan in `tailwind.config.js` onder `theme.extend.colors.primary`.

## Publiceren (Replit Deploy)

1. Zorg dat alle Replit Secrets ingesteld zijn
2. Klik op "Publish" / "Deploy" in Replit
3. De build command is `npm run build`
4. De run command is `node server.js` (serveert ook de gebouwde frontend)
