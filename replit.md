# Agio Cleaning Website

Professionele, responsive website voor Agio Cleaning — een Nederlands schoonmaakbedrijf
gespecialiseerd in matrasreiniging, meubelreiniging en vloerreiniging.

## Stack

- **Frontend:** HTML5 + CSS3 + vanilla JavaScript
- **Backend:** PHP `mail()` voor contactformulier
- **Server:** `php -S 0.0.0.0:5000 -t .`

## Bestanden

```
├── index.html                    Homepagina
├── diensten.html                 Dienstenoverzicht
├── particulier.html              Voor particulieren
├── zakelijk.html                 Voor zakelijke klanten
├── contact.html                  Contactformulier
├── professionele-reiniging.html  SEO-pagina met FAQ
├── bedankt.html                  Bedankpagina
├── 404.html                      Foutpagina
├── contact.php                   PHP formulierhandler
├── css/style.css                 Alle styling
├── js/main.js                    Alle JavaScript
├── .gitignore
└── README.md
```

## Placeholders

| Zoekterm | Vervangen door |
|----------|---------------|
| `VERVANGTELEFOON` | Telefoonnummer zonder + of 0 |
| `VERVANG NUMMER` | Leesbaar telefoonnummer |
| `VERVANGWANUMMER` | WhatsApp-nummer zonder + of 0 |
| `info@agiocleaning.nl` | Eigen e-mailadres |

Aanpassen in `contact.php`: `$ontvangerEmail`, `$ontvangerNaam`, `$afzenderDomain`

## Kleuren

In `css/style.css` onder `:root`:
- `--primary: #1e7be6` (blauw)
- `--accent: #0d9488` (teal)
