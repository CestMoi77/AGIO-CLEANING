# AGIO CLEANING - Bedrijfswebsite

Professionele, responsive website voor **Agio Cleaning**, een schoonmaakbedrijf gespecialiseerd in matrasreiniging, meubelreiniging en vloerreiniging. Volledig in het Nederlands.

## Stack

| Technologie | Gebruik |
|-------------|---------|
| HTML5       | Pagina-structuur en content |
| CSS3        | Styling, responsive layout, CSS-variabelen |
| JavaScript  | Mobiel menu, FAQ-accordion, formuliervalidatie |
| PHP         | Contactformulier (server-side verwerking via `mail()`) |
| TXT/XML     | `robots.txt` en `sitemap.xml` voor indexering |

Geen frameworks, geen build tools, geen npm - direct hostbaar op elke standaard webhosting.

## Bestandsoverzicht

```text
index.html
diensten.html
particulier.html
zakelijk.html
contact.html
privacy.html
algemene-voorwaarden.html
professionele-reiniging.html
bedankt.html
404.html
contact.php
robots.txt
sitemap.xml
css/style.css
js/main.js
.gitignore
README.md
```

## Hosting

Upload alle bestanden via FTP naar de root van uw webhosting (bijv. STRATO, TransIP, Antagonist). PHP `mail()` moet beschikbaar zijn voor het contactformulier.

Lokaal testen:

```bash
php -S localhost:5000 -t .
```

## Placeholders - nog in te vullen

Zoek in de HTML-bestanden naar onderstaande teksten en vervang ze door uw eigen gegevens:

| Placeholder | Vervangen door | Voorbeeld |
|-------------|---------------|-----------|
| `VERVANGTELEFOON` | Telefoonnummer zonder + of 0 | `31612345678` |
| `VERVANG NUMMER` | Leesbaar telefoonnummer | `06 12 34 56 78` |
| `VERVANGWANUMMER` | WhatsApp-nummer zonder + of 0 | `31612345678` |
| `info@agiocleaning.nl` | Uw e-mailadres | `info@uwdomein.nl` |

### contact.php

Open `contact.php` en pas de configuratie bovenin aan:

```php
$ontvangerEmail  = 'info@agiocleaning.nl';  // uw e-mailadres
$ontvangerNaam   = 'Agio Cleaning';         // uw bedrijfsnaam
$afzenderDomain  = 'agiocleaning.nl';       // uw domeinnaam
```

### Logo

In elke pagina staat een tekstlogo (`<div class="logo-icon">A</div>`). Vervang dit door uw eigen logo:

```html
<img src="img/logo.png" alt="Agio Cleaning" width="140" height="40">
```

### Google Maps

In `contact.html` staat een kaart-placeholder. Vervang deze door een Google Maps embed-iframe.

### Social media

In de footer staan links met `href="#"` voor Facebook, Instagram en LinkedIn. Vul hier uw eigen URL's in.

### Canonical tags

Alle pagina's bevatten `<link rel="canonical">` met domein `agiocleaning.nl`. Pas dit aan als u een ander domein gebruikt.

### Klantreviews

Op `index.html` en `particulier.html` staan placeholder-secties (met HTML-comment `<!-- AANPASSEN: ... -->`) waar u echte klantreviews kunt toevoegen.

## Beveiliging contactformulier

- Honeypot-veld tegen spam-bots
- Server-side whitelist-validatie voor selectievelden
- Bescherming tegen header-injectie
- Foutafhandeling bij mislukte `mail()`
- Verplichte privacytoestemming bij verzending
- Client-side validatie voor verplichte velden, inclusief checkboxen

## SEO-bestanden

- `robots.txt` verwijst naar de sitemap
- `sitemap.xml` bevat de indexeerbare pagina's van de website

## Kleuren aanpassen

Wijzig de huisstijlkleuren in `css/style.css`:

```css
:root {
    --primary: #1e7be6;   /* Hoofdkleur (blauw) */
    --accent:  #0d9488;   /* Accentkleur (teal) */
}
```

## Licentie

Alle rechten voorbehouden © Agio Cleaning.
