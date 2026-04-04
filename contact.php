<?php
/**
 * Agion Cleaning – Contactformulier Handler
 * ==========================================
 * Dit bestand verwerkt het contactformulier en verstuurt e-mailmeldingen.
 *
 * CONFIGURATIE (pas onderstaande regels aan):
 *   $ontvangerEmail  – het e-mailadres waarop u meldingen wilt ontvangen
 *   $afzenderDomain  – het domein van uw website (voor de From-header)
 *
 * HOSTING OP STRATO / STANDAARD HOSTING:
 *   De PHP mail()-functie werkt op de meeste webhostingpakketten.
 *   Als e-mails niet aankomen, controleer dan de spammap of gebruik
 *   een SMTP-plugin zoals PHPMailer (zie onderaan voor instructies).
 *
 * BEVEILIGING:
 *   - Alle invoer wordt gesaniteerd met htmlspecialchars()
 *   - E-mailadressen worden gevalideerd met filter_var()
 *   - Header-injectie wordt voorkomen
 */

/* ───────────────────────────────────────────────
   AANPASSEN: Vul uw eigen e-mailadres in
─────────────────────────────────────────────── */
$ontvangerEmail  = 'info@agioncleaning.nl';   // E-mailadres van de ontvanger
$ontvangerNaam   = 'Agion Cleaning';           // Naam van de ontvanger
$afzenderDomain  = 'agioncleaning.nl';         // Domein (voor From-header)
$websiteNaam     = 'Agion Cleaning';

/* ───────────────────────────────────────────────
   ALLEEN POST VERWERKEN
─────────────────────────────────────────────── */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html');
    exit;
}

/* ───────────────────────────────────────────────
   INVOER OPHALEN & SANITEREN
─────────────────────────────────────────────── */
function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input ?? '')), ENT_QUOTES, 'UTF-8');
}

$naam      = sanitize($_POST['naam']      ?? '');
$email     = sanitize($_POST['email']     ?? '');
$telefoon  = sanitize($_POST['telefoon']  ?? '');
$klanttype = sanitize($_POST['klanttype'] ?? '');
$dienst    = sanitize($_POST['dienst']    ?? '');
$bericht   = sanitize($_POST['bericht']   ?? '');

/* ───────────────────────────────────────────────
   VALIDATIE
─────────────────────────────────────────────── */
$fouten = [];

if (empty($naam))    $fouten[] = 'Naam is verplicht.';
if (empty($email))   $fouten[] = 'E-mailadres is verplicht.';
if (empty($dienst))  $fouten[] = 'Selecteer een dienst.';
if (empty($bericht)) $fouten[] = 'Bericht is verplicht.';

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $fouten[] = 'Voer een geldig e-mailadres in.';
}

// Header-injectie voorkomen
$verbodenePatronen = ["\r", "\n", "%0a", "%0d", "Content-Type:", "Bcc:", "Cc:"];
foreach ([$naam, $email, $telefoon, $klanttype, $dienst] as $veld) {
    foreach ($verbodenePatronen as $patroon) {
        if (stripos($veld, $patroon) !== false) {
            $fouten[] = 'Ongeldige invoer gedetecteerd.';
            break 2;
        }
    }
}

/* ───────────────────────────────────────────────
   BIJ FOUTEN: TERUG NAAR FORMULIER
─────────────────────────────────────────────── */
if (!empty($fouten)) {
    $foutString = urlencode(implode(' ', $fouten));
    header('Location: contact.html?fout=' . $foutString);
    exit;
}

/* ───────────────────────────────────────────────
   E-MAIL NAAR EIGENAAR AGION CLEANING
─────────────────────────────────────────────── */
$onderwerpEigenaar = "Nieuw contactverzoek van {$naam} \u{2013} {$dienst}";

$berichtEigenaar  = "Nieuw bericht via het contactformulier op de Agion Cleaning website.\n\n";
$berichtEigenaar .= "-------------------------------------------\n";
$berichtEigenaar .= "Naam:        {$naam}\n";
$berichtEigenaar .= "E-mail:      {$email}\n";
$berichtEigenaar .= "Telefoon:    " . ($telefoon ?: 'Niet opgegeven') . "\n";
$berichtEigenaar .= "Type klant:  {$klanttype}\n";
$berichtEigenaar .= "Dienst:      {$dienst}\n";
$berichtEigenaar .= "-------------------------------------------\n\n";
$berichtEigenaar .= "Bericht:\n{$bericht}\n\n";
$berichtEigenaar .= "-------------------------------------------\n";
$berichtEigenaar .= "Dit bericht is verstuurd via het contactformulier op {$websiteNaam}.nl\n";

$headersEigenaar  = "From: Contactformulier <no-reply@{$afzenderDomain}>\r\n";
$headersEigenaar .= "Reply-To: {$naam} <{$email}>\r\n";
$headersEigenaar .= "MIME-Version: 1.0\r\n";
$headersEigenaar .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headersEigenaar .= "X-Mailer: PHP/" . phpversion() . "\r\n";

mail($ontvangerEmail, $onderwerpEigenaar, $berichtEigenaar, $headersEigenaar);

/* ───────────────────────────────────────────────
   BEVESTIGINGSMAIL NAAR KLANT
─────────────────────────────────────────────── */
$onderwerpKlant = "Bedankt voor uw bericht \u{2013} {$websiteNaam}";

$berichtKlant  = "Beste {$naam},\n\n";
$berichtKlant .= "Bedankt voor uw bericht! Wij hebben het ontvangen en nemen zo snel\n";
$berichtKlant .= "mogelijk contact met u op \u{2014} doorgaans binnen 24 uur op werkdagen.\n\n";
$berichtKlant .= "-------------------------------------------\n";
$berichtKlant .= "Samenvatting van uw bericht:\n";
$berichtKlant .= "  Dienst:     {$dienst}\n";
$berichtKlant .= "  Type klant: {$klanttype}\n\n";
$berichtKlant .= "Uw bericht:\n{$bericht}\n";
$berichtKlant .= "-------------------------------------------\n\n";
// AANPASSEN: Pas telefoonnummer en e-mailadres aan
$berichtKlant .= "Met vriendelijke groet,\n{$ontvangerNaam}\n\n";
$berichtKlant .= "\u{260E} +31 (0)6 \u{2013} VERVANG NUMMER\n";
$berichtKlant .= "\u{2709} {$ontvangerEmail}\n";

$headersKlant  = "From: {$ontvangerNaam} <no-reply@{$afzenderDomain}>\r\n";
$headersKlant .= "Reply-To: {$ontvangerNaam} <{$ontvangerEmail}>\r\n";
$headersKlant .= "MIME-Version: 1.0\r\n";
$headersKlant .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($email, $onderwerpKlant, $berichtKlant, $headersKlant);

/* ───────────────────────────────────────────────
   DOORSTUREN NAAR BEDANKPAGINA
─────────────────────────────────────────────── */
header('Location: bedankt.html');
exit;

/*
 ─────────────────────────────────────────────────
 OPTIONEEL: SMTP MET PHPMAILER (voor betere bezorging)
 ─────────────────────────────────────────────────
 Als de standaard mail()-functie niet goed werkt,
 kunt u PHPMailer gebruiken via Composer:

   composer require phpmailer/phpmailer

 Vervang dan de mail()-aanroepen hierboven met:

   use PHPMailer\PHPMailer\PHPMailer;
   $mail = new PHPMailer(true);
   $mail->isSMTP();
   $mail->Host       = 'smtp.uw-aanbieder.nl';   // SMTP_HOST
   $mail->SMTPAuth   = true;
   $mail->Username   = 'uw@email.nl';             // SMTP_USER
   $mail->Password   = 'uwwachtwoord';            // SMTP_PASS
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
   $mail->Port       = 587;                       // SMTP_PORT
   $mail->CharSet    = 'UTF-8';
   $mail->setFrom('no-reply@uw-domein.nl', 'Agion Cleaning');
   $mail->addAddress($ontvangerEmail, $ontvangerNaam);
   $mail->Subject = $onderwerpEigenaar;
   $mail->Body    = $berichtEigenaar;
   $mail->send();
 ─────────────────────────────────────────────────
*/
?>
