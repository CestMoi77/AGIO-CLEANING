# Agion Cleaning Website

Volledige bedrijfswebsite voor Agion Cleaning — een Nederlands schoonmaakbedrijf
gespecialiseerd in matrasreiniging, meubelreiniging en vloerreiniging.

## Tech Stack

- **Frontend:** HTML5 + moderne CSS3 + lichte vanilla JavaScript
- **Backend (contactformulier):** PHP 8.2 mail() of PHPMailer (SMTP)
- **Server (lokaal/Replit):** PHP 8.2 built-in server (`php -S 0.0.0.0:5000 -t .`)
- **Hosting:** Geschikt voor standaard webhosting (STRATO, TransIP, etc.)
- **Editor:** Bewerkbaar in Microsoft Visual Studio 2022

## Bestandsstructuur

```
agion-cleaning/
├── index.html                   Homepagina
├── diensten.html                Dienstenpagina (matras, meubel, vloer)
├── particulier.html             Pagina voor particulieren
├── zakelijk.html                Pagina voor zakelijke klanten
├── contact.html                 Contactpagina met formulier
├── professionele-reiniging.html SEO-pagina met uitgebreide FAQ
├── bedankt.html                 Bedanktpagina na formulierverzending
├── 404.html                     Pagina niet gevonden
├── contact.php                  PHP-handler voor contactformulier
├── css/
│   └── style.css               Alle stijlen (CSS-variabelen, responsive, componenten)
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
| `info@agioncleaning.nl` | uw eigen e-mailadres                   | Weergegeven e-mailadres           |

### contact.php aanpassen

Open `contact.php` en pas aan:
```php
$ontvangerEmail  = 'info@agioncleaning.nl';   // ← uw e-mailadres
$ontvangerNaam   = 'Agion Cleaning';           // ← uw bedrijfsnaam
$afzenderDomain  = 'agioncleaning.nl';         // ← uw domeinnaam
```

### Logo vervangen

In de header van elk HTML-bestand staat:
```html
<!-- AANPASSEN: Vervang logo-blok met <img ...> -->
<div class="logo-icon" aria-hidden="true">A</div>
```
Vervang dit met:
```html
<img src="img/logo.png" alt="Agion Cleaning" width="140" height="40">
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
Als e-mails niet aankomen, controleer dan uw spammap of configureer PHPMailer via SMTP
(zie de instructies onderaan `contact.php`).

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
