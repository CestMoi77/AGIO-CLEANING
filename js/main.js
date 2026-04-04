/**
 * Agion Cleaning – Lichte JavaScript
 * Verantwoordelijk voor:
 *  - Mobiel navigatiemenu (hamburger)
 *  - Schaduw op header bij scrollen
 *  - Actieve navigatielink markeren
 */

(function () {
    'use strict';

    /* ── 1. STICKY HEADER SCHADUW ── */
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

    /* ── 2. HAMBURGER MOBIEL MENU ── */
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Sluit menu bij klik op een link
        var mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Sluit menu bij klik buiten het menu
        document.addEventListener('click', function (e) {
            if (!header.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ── 3. ACTIEVE NAV-LINK MARKEREN ── */
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ── 4. FAQ ACCORDEON ── */
    // <details> is native HTML – geen JS nodig voor open/dicht.
    // Optioneel: sluit andere FAQ-items bij het openen van één item.
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

    /* ── 5. FORMULIER: CLIENT-SIDE VALIDATIE FEEDBACK ── */
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            var valid = true;
            var requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(function (field) {
                field.style.borderColor = '';
                if (!field.value.trim()) {
                    field.style.borderColor = '#ef4444';
                    valid = false;
                }
            });

            var emailField = form.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    emailField.style.borderColor = '#ef4444';
                    valid = false;
                }
            }

            if (!valid) {
                e.preventDefault();
                var firstError = form.querySelector('[style*="border-color"]');
                if (firstError) firstError.focus();
                return;
            }

            // Knop uitschakelen om dubbele verzending te voorkomen
            var submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Bezig met verzenden...';
            }
        });
    }

})();
