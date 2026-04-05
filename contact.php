<?php
/**
 * Agio Cleaning – Contactformulier Handler
 */

$ontvangerEmail  = 'info@agiocleaning.nl';
$ontvangerNaam   = 'Agio Cleaning';
$afzenderDomain  = 'agiocleaning.nl';
$websiteNaam     = 'Agio Cleaning';
$minimaleInvultijd = 3;
$rateLimitMaxVerzoeken = 5;
$rateLimitVensterSeconden = 15 * 60;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html?fout=invalid_request');
    exit;
}

function failSafeRedirect() {
    header('Location: bedankt.html');
    exit;
}

function redirectWithErrorCode($code, $oldInput = []) {
    $query = ['fout' => $code];

    if (!empty($oldInput)) {
        $query = array_merge($query, $oldInput);
    }

    header('Location: contact.html?' . http_build_query($query));
    exit;
}

function getClientIp() {
    $ip = trim($_SERVER['REMOTE_ADDR'] ?? '');
    if ($ip === '') {
        return 'unknown';
    }
    return preg_replace('/[^a-fA-F0-9:\.\-]/', '', $ip) ?: 'unknown';
}

function isSubmissionTooFast($renderedAt, $minimumSeconds) {
    if (!is_numeric($renderedAt)) {
        return false;
    }

    $age = time() - (int) $renderedAt;
    return $age >= 0 && $age < $minimumSeconds;
}

function isRateLimited($ip, $maxRequests, $windowSeconds) {
    $storageDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'agio-cleaning-contact-rate-limit';
    if (!is_dir($storageDir) && !@mkdir($storageDir, 0755, true) && !is_dir($storageDir)) {
        return false;
    }

    $storageFile = $storageDir . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = @fopen($storageFile, 'c+');
    if ($handle === false) {
        return false;
    }

    $now = time();
    $timestamps = [];

    if (flock($handle, LOCK_EX)) {
        $raw = stream_get_contents($handle);
        $decoded = json_decode($raw ?: '[]', true);
        if (is_array($decoded)) {
            $timestamps = array_values(array_filter($decoded, function ($timestamp) use ($now, $windowSeconds) {
                return is_int($timestamp) && ($now - $timestamp) < $windowSeconds;
            }));
        }

        if (count($timestamps) >= $maxRequests) {
            ftruncate($handle, 0);
            rewind($handle);
            fwrite($handle, json_encode($timestamps));
            fflush($handle);
            flock($handle, LOCK_UN);
            fclose($handle);
            return true;
        }

        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
        fflush($handle);
        flock($handle, LOCK_UN);
    }

    fclose($handle);
    return false;
}

function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input ?? '')), ENT_QUOTES, 'UTF-8');
}

function hasValidCsrfToken($submittedToken, $cookieToken) {
    if (!is_string($submittedToken) || !is_string($cookieToken)) {
        return false;
    }

    if ($submittedToken === '' || $cookieToken === '') {
        return false;
    }

    return hash_equals($cookieToken, $submittedToken);
}

$naam      = sanitize($_POST['naam']      ?? '');
$email     = sanitize($_POST['email']     ?? '');
$telefoon  = sanitize($_POST['telefoon']  ?? '');
$klanttype = sanitize($_POST['klanttype'] ?? '');
$dienst    = sanitize($_POST['dienst']    ?? '');
$bericht   = sanitize($_POST['bericht']   ?? '');
$privacyToestemming = isset($_POST['privacy_toestemming']) ? 'ja' : '';
$honeypot  = trim($_POST['website_url']   ?? '');
$formRenderedAt = $_POST['form_rendered_at'] ?? '';
$csrfToken = $_POST['csrf_token'] ?? '';
$csrfCookieToken = $_COOKIE['agio_csrf_token'] ?? '';
$oldInput = [
    'naam' => $naam,
    'email' => $email,
    'telefoon' => $telefoon,
    'klanttype' => $klanttype,
    'dienst' => $dienst,
    'bericht' => $bericht,
    'privacy_toestemming' => $privacyToestemming === 'ja' ? '1' : '0'
];

$errorCode = '';

if (!empty($honeypot)) {
    failSafeRedirect();
}

if (isSubmissionTooFast($formRenderedAt, $minimaleInvultijd)) {
    failSafeRedirect();
}

if (isRateLimited(getClientIp(), $rateLimitMaxVerzoeken, $rateLimitVensterSeconden)) {
    failSafeRedirect();
}

if (!hasValidCsrfToken($csrfToken, $csrfCookieToken)) {
    failSafeRedirect();
}

if (
    empty($naam) ||
    empty($email) ||
    empty($klanttype) ||
    empty($dienst) ||
    empty($bericht) ||
    $privacyToestemming !== 'ja'
) {
    $errorCode = 'missing_fields';
}

if ($errorCode === '' && !empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errorCode = 'invalid_email';
}

$toegestaneKlanttypen = ['Particulier', 'Zakelijk'];
if ($errorCode === '' && !empty($klanttype) && !in_array($klanttype, $toegestaneKlanttypen, true)) {
    $errorCode = 'invalid_selection';
}

$toegestaneDiensten = [
    'Matrasreiniging',
    'Meubelreiniging (bank, stoelen)',
    'Vloerreiniging (tapijt, tegels)',
    'Combinatie van diensten',
    'Periodiek reinigingscontract (zakelijk)',
    'Andere vraag'
];
if ($errorCode === '' && !empty($dienst) && !in_array($dienst, $toegestaneDiensten, true)) {
    $errorCode = 'invalid_selection';
}

$verbodenePatronen = ["\r", "\n", "%0a", "%0d", "Content-Type:", "Bcc:", "Cc:"];
foreach ([$naam, $email, $telefoon, $klanttype, $dienst] as $veld) {
    foreach ($verbodenePatronen as $patroon) {
        if (stripos($veld, $patroon) !== false) {
            $errorCode = 'invalid_request';
            break 2;
        }
    }
}

if ($errorCode !== '') {
    redirectWithErrorCode($errorCode, $oldInput);
}

$onderwerpEigenaar = "Nieuw contactverzoek van {$naam} \u{2013} {$dienst}";

$berichtEigenaar  = "Nieuw bericht via het contactformulier op de Agio Cleaning website.\n\n";
$berichtEigenaar .= "-------------------------------------------\n";
$berichtEigenaar .= "Naam:        {$naam}\n";
$berichtEigenaar .= "E-mail:      {$email}\n";
$berichtEigenaar .= "Telefoon:    " . ($telefoon ?: 'Niet opgegeven') . "\n";
$berichtEigenaar .= "Type klant:  {$klanttype}\n";
$berichtEigenaar .= "Dienst:      {$dienst}\n";
$berichtEigenaar .= "Privacy:     Akkoord\n";
$berichtEigenaar .= "-------------------------------------------\n\n";
$berichtEigenaar .= "Bericht:\n{$bericht}\n\n";
$berichtEigenaar .= "-------------------------------------------\n";
$berichtEigenaar .= "Dit bericht is verstuurd via het contactformulier op {$websiteNaam}.nl\n";

$headersEigenaar  = "From: Contactformulier <no-reply@{$afzenderDomain}>\r\n";
$headersEigenaar .= "Reply-To: {$naam} <{$email}>\r\n";
$headersEigenaar .= "MIME-Version: 1.0\r\n";
$headersEigenaar .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headersEigenaar .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$mailVerzonden = @mail($ontvangerEmail, $onderwerpEigenaar, $berichtEigenaar, $headersEigenaar);

if (!$mailVerzonden) {
    redirectWithErrorCode('mail_failed', $oldInput);
}

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
$berichtKlant .= "Met vriendelijke groet,\n{$ontvangerNaam}\n\n";
$berichtKlant .= "\u{260E} +31 (0)6 \u{2013} VERVANG NUMMER\n";
$berichtKlant .= "\u{2709} {$ontvangerEmail}\n";

$headersKlant  = "From: {$ontvangerNaam} <no-reply@{$afzenderDomain}>\r\n";
$headersKlant .= "Reply-To: {$ontvangerNaam} <{$ontvangerEmail}>\r\n";
$headersKlant .= "MIME-Version: 1.0\r\n";
$headersKlant .= "Content-Type: text/plain; charset=UTF-8\r\n";

@mail($email, $onderwerpKlant, $berichtKlant, $headersKlant);

header('Location: bedankt.html');
exit;
?>
