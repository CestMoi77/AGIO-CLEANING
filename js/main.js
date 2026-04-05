/**
 * Agio Cleaning â€“ Lichte JavaScript
 * Verantwoordelijk voor:
 *  - Mobiel navigatiemenu (hamburger)
 *  - Schaduw op header bij scrollen
 *  - Actieve navigatielink markeren
 */

(function () {
    'use strict';

    /* â”€â”€ 1. STICKY HEADER SCHADUW â”€â”€ */
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

    /* â”€â”€ 2. HAMBURGER MOBIEL MENU â”€â”€ */
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        var mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', function (e) {
            if (!header.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* â”€â”€ 3. ACTIEVE NAV-LINK MARKEREN â”€â”€ */
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* â”€â”€ 4. FAQ ACCORDEON â”€â”€ */
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

    /* â”€â”€ 5. FORMULIER: CLIENT-SIDE VALIDATIE FEEDBACK â”€â”€ */
    var form = document.getElementById('contact-form');
    if (form) {
        function clearFieldError(field) {
            field.style.borderColor = '';
            if (field.type === 'checkbox') {
                field.style.outline = '';
                field.style.outlineOffset = '';
            }
        }

        function markFieldError(field) {
            if (field.type === 'checkbox') {
                field.style.outline = '2px solid #ef4444';
                field.style.outlineOffset = '2px';
            } else {
                field.style.borderColor = '#ef4444';
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
                var firstError = form.querySelector('[style*="border-color"], [style*="outline"]');
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
