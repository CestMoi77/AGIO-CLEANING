# Agio Cleaning Website

Volledige bedrijfswebsite voor Agio Cleaning — een Nederlands schoonmaakbedrijf
gespecialiseerd in matrasreiniging, meubelreiniging en vloerreiniging.

## Tech Stack

- **Frontend:** HTML5 + moderne CSS3 + lichte vanilla JavaScript
- **Backend (contactformulier):** PHP 8.2 mail()
- **Server (lokaal/Replit):** PHP 8.2 built-in server (`php -S 0.0.0.0:5000 -t .`)
- **Hosting:** Geschikt voor standaard webhosting (STRATO, TransIP, etc.)

## Bestandsstructuur

```
agio-cleaning/
├── index.html                   Homepagina
├── diensten.html                Dienstenpagina (matras, meubel, vloer)
├── particulier.html             Pagina voor particulieren
├── zakelijk.html                Pagina voor zakelijke klanten
├── contact.html                 Contactpagina met formulier + honeypot
├── professionele-reiniging.html SEO-pagina met uitgebreide FAQ
├── bedankt.html                 Bedanktpagina na formulierverzending
├── 404.html                     Pagina niet gevonden
├── contact.php                  PHP-handler voor contactformulier (honeypot, whitelist, error handling)
├── css/
│   └── style.css               Alle stijlen (CSS-variabelen, responsive, componenten, focus-visible, reduced-motion)
└── js/
    └── main.js                 Lichte JavaScript (menu, FAQ, validatie)
```

## Server starten

```bash
php -S 0.0.0.0:5000 -t .
```

## Wat u MOET aanpassen voor gebruik

Zoek in **alle HTML-bestanden** naar de volgende teksten en vervang ze:

| Placeholder             | Vervangen door                         | Uitleg                            |
|-------------------------|----------------------------------------|-----------------------------------|
| `VERVANGTELEFOON`       | bijv. `31612345678`                    | Telefoonnummer (zonder + of 0)    |
| `VERVANG NUMMER`        | bijv. `06 12 34 56 78`                 | Leesbaar telefoonnummer           |
| `VERVANGWANUMMER`       | bijv. `31612345678`                    | WhatsApp-nummer (zonder + of 0)   |
| `info@agiocleaning.nl`  | uw eigen e-mailadres                   | Weergegeven e-mailadres           |

### contact.php aanpassen

Open `contact.php` en pas aan:
```php
$ontvangerEmail  = 'info@agiocleaning.nl';   // ← uw e-mailadres
$ontvangerNaam   = 'Agio Cleaning';           // ← uw bedrijfsnaam
$afzenderDomain  = 'agiocleaning.nl';         // ← uw domeinnaam
```

### Logo vervangen

In de header van elk HTML-bestand staat:
```html
<!-- AANPASSEN: Vervang logo-blok met <img ...> -->
<div class="logo-icon" aria-hidden="true">A</div>
```
Vervang dit met:
```html
<img src="img/logo.png" alt="Agio Cleaning" width="140" height="40">
```

### Google Maps toevoegen

In `contact.html` staat een placeholder:
```html
<div class="maps-placeholder">...</div>
```
Vervang dit door een Google Maps embed-iframe van https://www.google.com/maps/

### Kleuren aanpassen

Pas de huisstijlkleuren aan in `css/style.css` onder `:root`:
```css
:root {
    --primary:      #1e7be6;   /* ← Hoofdkleur blauw */
    --accent:       #0d9488;   /* ← Accentkleur teal */
}
```

### Social media links

In de footer van alle pagina's staat `href="#"` voor Facebook, Instagram en LinkedIn.
Vervang `#` door uw echte social media URL's.

### Klantreviews toevoegen

Op `index.html` en `particulier.html` staan placeholders (HTML-comments `<!-- AANPASSEN: ... -->`)
waar u echte klantreviews kunt toevoegen zodra deze beschikbaar zijn.

## Canonical tags

Alle 6 indexeerbare pagina's bevatten `<link rel="canonical">` tags gericht op `https://www.agiocleaning.nl/`.
Pas het domein aan als u een ander domein gebruikt.

## Beveiliging contactformulier

- Honeypot-veld (`website_url`) in `contact.html` ter bescherming tegen bots
- Server-side whitelist-validatie voor `klanttype` en `dienst` in `contact.php`
- Foutmelding bij mislukte `mail()` met redirect naar `contact.html?error=...`

## Toegankelijkheid

- `:focus-visible` styling op alle interactieve elementen
- `prefers-reduced-motion` media query schakelt animaties uit
- `aria-label` en `aria-hidden` attributen op decoratieve elementen
- Semantische HTML5-structuur

## Exporteren naar STRATO

Upload de volgende bestanden en mappen via FTP:
- `index.html`
- `diensten.html`
- `particulier.html`
- `zakelijk.html`
- `contact.html`
- `professionele-reiniging.html`
- `bedankt.html`
- `404.html`
- `contact.php`
- `css/` (map)
- `js/` (map)
- `img/` (map, indien aangemaakt)

**Let op STRATO:** De PHP mail()-functie is standaard beschikbaar op STRATO-hostingpakketten.

## Pagina's & navigatie

| Bestand                      | Pagina                     | Navigatielink  |
|------------------------------|----------------------------|----------------|
| `index.html`                 | Homepagina                 | Home           |
| `diensten.html`              | Dienstenoverzicht          | Diensten       |
| `particulier.html`           | Voor particulieren         | Particulier    |
| `zakelijk.html`              | Voor zakelijke klanten     | Zakelijk       |
| `contact.html`               | Contactformulier           | Contact        |
| `professionele-reiniging.html` | SEO/FAQ-pagina           | (footer/links) |
| `bedankt.html`               | Na formulierverzending     | (automatisch)  |
| `404.html`                   | Pagina niet gevonden       | (automatisch)  |
