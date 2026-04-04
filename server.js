/**
 * Agion Cleaning - Express Backend Server
 * Verwerkt het contactformulier en verstuurt e-mailmeldingen via Nodemailer.
 *
 * ENVIRONMENT VARIABLES - stel deze in via Replit Secrets:
 *   CONTACT_EMAIL  - het e-mailadres waarop u berichten wilt ontvangen (bijv. info@agioncleaning.nl)
 *   SMTP_HOST      - uw SMTP-server (bijv. smtp.gmail.com of smtp.hostinger.com)
 *   SMTP_PORT      - poortnummer (meestal 587 voor TLS of 465 voor SSL)
 *   SMTP_USER      - uw SMTP gebruikersnaam (doorgaans het e-mailadres)
 *   SMTP_PASS      - uw SMTP wachtwoord of app-specifiek wachtwoord
 */

import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// ──────────────────────────────────────────────
// SMTP TRANSPORTER
// Configureer uw e-mailinstellingen via environment variables
// ──────────────────────────────────────────────
function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    console.warn('[E-mail] SMTP variabelen niet ingesteld. E-mail wordt niet verstuurd. Stel SMTP_HOST, SMTP_USER en SMTP_PASS in via Replit Secrets.')
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

// ──────────────────────────────────────────────
// CONTACT FORMULIER ENDPOINT
// POST /api/contact
// ──────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { naam, email, telefoon, klantType, dienst, bericht } = req.body

  // Basisvalidatie
  if (!naam || !email || !bericht || !dienst) {
    return res.status(400).json({ message: 'Vul alle verplichte velden in.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Voer een geldig e-mailadres in.' })
  }

  // CONTACT_EMAIL: Stel uw e-mailadres in via Replit Secrets
  const contactEmail = process.env.CONTACT_EMAIL || 'info@agioncleaning.nl'

  const transporter = createTransporter()

  if (transporter) {
    try {
      // E-mail naar de eigenaar van Agion Cleaning
      await transporter.sendMail({
        from: `"Agion Cleaning Formulier" <${process.env.SMTP_USER}>`,
        to: contactEmail,
        subject: `Nieuw contactverzoek van ${naam} – ${dienst}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e7be6; border-bottom: 2px solid #1e7be6; padding-bottom: 10px;">
              Nieuw bericht via Agion Cleaning contactformulier
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Naam:</td><td>${naam}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">E-mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Telefoon:</td><td>${telefoon || 'Niet opgegeven'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Type klant:</td><td>${klantType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Dienst:</td><td>${dienst}</td></tr>
            </table>
            <h3 style="color: #333; margin-top: 20px;">Bericht:</h3>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">
              ${bericht.replace(/\n/g, '<br/>')}
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              Dit bericht is verstuurd via het contactformulier op de Agion Cleaning website.
            </p>
          </div>
        `,
      })

      // Bevestigingsmail naar de klant
      await transporter.sendMail({
        from: `"Agion Cleaning" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Bedankt voor uw bericht – Agion Cleaning',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e7be6;">Bedankt voor uw bericht, ${naam}!</h2>
            <p>Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op — doorgaans binnen 24 uur op werkdagen.</p>
            <h3 style="color: #333;">Samenvatting van uw bericht:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 130px;">Dienst:</td><td>${dienst}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Type klant:</td><td>${klantType}</td></tr>
            </table>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 15px; line-height: 1.6;">
              ${bericht.replace(/\n/g, '<br/>')}
            </div>
            <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;"/>
            <p style="color: #333;">Met vriendelijke groet,<br/><strong>Agion Cleaning</strong></p>
            <!-- TELEFOONNUMMER + E-MAILADRES: Pas dit aan -->
            <p style="color: #888; font-size: 13px;">
              📞 +31 (0)6 – VERVANG NUMMER &nbsp;|&nbsp; ✉ info@agioncleaning.nl
            </p>
          </div>
        `,
      })

      console.log(`[E-mail] Contactbericht van ${naam} (${email}) succesvol verstuurd.`)
    } catch (err) {
      console.error('[E-mail] Fout bij verzenden:', err)
      // Toch succes teruggeven zodat de gebruiker niet geblokkeerd wordt
      // maar log de fout server-side
    }
  } else {
    // Geen SMTP ingesteld: log het bericht in de console
    console.log('[Contactformulier - GEEN E-MAIL INGESTELD]')
    console.log('Naam:', naam)
    console.log('E-mail:', email)
    console.log('Telefoon:', telefoon)
    console.log('Type klant:', klantType)
    console.log('Dienst:', dienst)
    console.log('Bericht:', bericht)
  }

  res.status(200).json({ message: 'Bericht ontvangen. Wij nemen zo snel mogelijk contact met u op.' })
})

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Agion Cleaning API' })
})

app.listen(PORT, () => {
  console.log(`[Server] Agion Cleaning API draait op poort ${PORT}`)
  if (!process.env.SMTP_HOST) {
    console.log('[Server] TIP: Stel SMTP_HOST, SMTP_USER, SMTP_PASS en CONTACT_EMAIL in via Replit Secrets voor e-mailfunctionaliteit.')
  }
})
