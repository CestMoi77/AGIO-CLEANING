/**
 * Agio Cleaning - Lichte JavaScript
 * Verantwoordelijk voor:
 *  - Mobiel navigatiemenu (hamburger)
 *  - Schaduw op header bij scrollen
 *  - Actieve navigatielink markeren
 */

(function () {
    'use strict';

    function generateToken() {
        var array = new Uint8Array(24);
        window.crypto.getRandomValues(array);
        return Array.from(array, function (byte) {
            return byte.toString(16).padStart(2, '0');
        }).join('');
    }

    function initContactFormState() {
        var foutmeldingen = {
            missing_fields: 'Vul alle verplichte velden in en ga akkoord met het privacybeleid.',
            invalid_email: 'Voer een geldig e-mailadres in.',
            invalid_selection: 'Controleer uw gekozen klanttype en dienst en probeer het opnieuw.',
            mail_failed: 'Er is een technisch probleem opgetreden bij het versturen van uw bericht. Probeer het later opnieuw of neem telefonisch contact op.',
            invalid_request: 'Uw aanvraag kon niet worden verwerkt. Controleer het formulier en probeer het opnieuw.'
        };
        var invalidFieldsByError = {
            missing_fields: ['naam', 'email', 'klanttype', 'dienst', 'bericht', 'privacy_toestemming'],
            invalid_email: ['email'],
            invalid_selection: ['klanttype', 'dienst'],
            invalid_request: ['naam', 'email', 'klanttype', 'dienst', 'bericht', 'privacy_toestemming']
        };
        var params = new URLSearchParams(window.location.search);
        var fout = params.get('fout');
        var veldNamen = ['naam', 'email', 'telefoon', 'klanttype', 'dienst', 'bericht'];
        var renderedField = document.getElementById('form_rendered_at');
        var csrfField = document.getElementById('csrf_token');
        var privacyToestemming = document.getElementById('privacy_toestemming');

        function markInvalidField(fieldId) {
            var field = document.getElementById(fieldId);
            if (!field) {
                return;
            }

            field.classList.add('is-invalid');
            field.setAttribute('aria-invalid', 'true');

            var formGroup = field.closest('.form-group');
            if (formGroup) {
                formGroup.classList.add('is-invalid');
            }
        }

        veldNamen.forEach(function (veldNaam) {
            var veld = document.getElementById(veldNaam);
            var waarde = params.get(veldNaam);
            if (veld && waarde !== null) {
                veld.value = waarde;
            }
        });

        if (privacyToestemming) {
            privacyToestemming.checked = params.get('privacy_toestemming') === '1';
        }

        if (renderedField) {
            renderedField.value = Math.floor(Date.now() / 1000);
        }

        if (csrfField && window.crypto && window.crypto.getRandomValues) {
            var token = generateToken();
            csrfField.value = token;
            document.cookie = 'agio_csrf_token=' + token + '; path=/; SameSite=Strict';
        }

        if (fout) {
            (invalidFieldsByError[fout] || []).forEach(markInvalidField);

            var el = document.getElementById('form-error');
            var txt = document.getElementById('form-error-text');
            if (el && txt) {
                txt.textContent = foutmeldingen[fout] || foutmeldingen.invalid_request;
                el.style.display = 'flex';
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    /* 1. STICKY HEADER SCHADUW */
    var header = document.getElementById('site-header');
    if (header) {
        function updateHeader() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', updateHeader, { passive: true });
        updateHeader();
    }

    /* 2. HAMBURGER MOBIEL MENU */
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileSubmenuToggle = document.querySelector('.mobile-submenu-toggle');
    var mobileSubmenu = document.querySelector('.mobile-submenu');

    function closeMobileSubmenu() {
        if (mobileSubmenuToggle && mobileSubmenu) {
            mobileSubmenu.classList.remove('open');
            mobileSubmenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);

            if (!isOpen) {
                closeMobileSubmenu();
            }
        });

        var mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                closeMobileSubmenu();
            });
        });

        document.addEventListener('click', function (e) {
            if (!header.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                closeMobileSubmenu();
            }
        });
    }

    if (mobileSubmenuToggle && mobileSubmenu) {
        mobileSubmenuToggle.addEventListener('click', function () {
            var isExpanded = mobileSubmenuToggle.getAttribute('aria-expanded') === 'true';
            mobileSubmenuToggle.setAttribute('aria-expanded', String(!isExpanded));
            mobileSubmenu.classList.toggle('open', !isExpanded);
        });
    }

    /* 3. ACTIEVE NAV-LINK MARKEREN */
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* 4. FAQ ACCORDEON */
    var faqDetails = document.querySelectorAll('.faq-item details');
    faqDetails.forEach(function (detail) {
        detail.addEventListener('toggle', function () {
            if (detail.open) {
                faqDetails.forEach(function (other) {
                    if (other !== detail && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });

    /* 5. FORMULIER: CLIENT-SIDE VALIDATIE FEEDBACK */
    var form = document.getElementById('contact-form');
    if (form) {
        initContactFormState();

        function clearFieldError(field) {
            field.style.borderColor = '';
            field.classList.remove('is-invalid');
            field.removeAttribute('aria-invalid');

            if (field.type === 'checkbox') {
                field.style.outline = '';
                field.style.outlineOffset = '';
            }

            var formGroup = field.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('is-invalid');
            }
        }

        function markFieldError(field) {
            field.classList.add('is-invalid');
            field.setAttribute('aria-invalid', 'true');

            if (field.type === 'checkbox') {
                field.style.outline = '2px solid #ef4444';
                field.style.outlineOffset = '2px';
            } else {
                field.style.borderColor = '#ef4444';
            }

            var formGroup = field.closest('.form-group');
            if (formGroup) {
                formGroup.classList.add('is-invalid');
            }
        }

        function fieldHasValue(field) {
            if (field.type === 'checkbox' || field.type === 'radio') {
                return field.checked;
            }
            return !!field.value.trim();
        }

        form.addEventListener('submit', function (e) {
            var valid = true;
            var requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(function (field) {
                clearFieldError(field);
                if (!fieldHasValue(field)) {
                    markFieldError(field);
                    valid = false;
                }
            });

            var emailField = form.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    markFieldError(emailField);
                    valid = false;
                }
            }

            if (!valid) {
                e.preventDefault();
                var firstError = form.querySelector('[style*="border-color"], [style*="outline"], .is-invalid');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }

            var submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Bezig met verzenden...';
            }
        });

        form.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('input', function () {
                clearFieldError(field);
            });
            field.addEventListener('change', function () {
                clearFieldError(field);
            });
        });
    }
})();
