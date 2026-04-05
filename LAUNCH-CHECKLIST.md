# Launch Checklist

Deze checklist bundelt de belangrijkste punten die nog gecontroleerd of aangevuld moeten worden voordat de website live kan.

## Zichtbare placeholders nog oplossen

- Vervang alle zichtbare `VERVANG...` placeholders voor telefoonnummer en WhatsApp-nummer.
- Controleer of `info@agiocleaning.nl` het definitieve e-mailadres is.
- Vervang het tekstlogo met het definitieve logo zodra dat beschikbaar is.
- Vervang de Google Maps placeholder op `contact.html`.
- Vervang review-placeholderblokken op `index.html` en `particulier.html` zodra echte reviews beschikbaar zijn.

## Dead links en tijdelijke verwijzingen

- Vervang social links met `href="#"` in `index.html` door echte profiel-URL's of verwijder ze tot die beschikbaar zijn.
- Controleer alle WhatsApp-links zodra het definitieve nummer bekend is.

## Ontbrekende launch-assets

- Definitief logo voor header/footer.
- Open Graph afbeelding waar `index.html` nu naar `img/og-image.jpg` verwijst.
- Eventuele favicon / browser icon set.
- Definitieve fotografie volgens `IMAGE-PLAN.md`.

## Bedrijfsgegevens nog finaliseren

- Werk telefoonnummer bij in zichtbare content en structured data.
- Werk regio / adresgegevens in structured data bij.
- Controleer openingstijden en werkgebied voor livegang.
- Controleer of alle canonical URL's het definitieve domein gebruiken.

## Formulier en hosting

- Test het contactformulier end-to-end op de uiteindelijke hosting.
- Controleer of PHP `mail()` correct werkt op de live server.
- Test succespad naar `bedankt.html`.
- Test validatiefouten, anti-spammaatregelen en CSRF-bescherming op live hosting.

## SEO en techniek

- Controleer `robots.txt` en `sitemap.xml` op het definitieve domein.
- Controleer Open Graph metadata met echte assets.
- Controleer structured data op volledige en correcte bedrijfsinformatie.
- Controleer of er geen ongewenste placeholdertekst meer zichtbaar is in broncode of metadata.

## Eindcontrole

- Test mobiel menu, CTA's, tel-links en WhatsApp-links op mobiel.
- Controleer de site op meerdere schermformaten.
- Controleer beeldkwaliteit en bestandsgrootte van de uiteindelijke launch-afbeeldingen.
