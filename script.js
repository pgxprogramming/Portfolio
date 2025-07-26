document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Toggle icon between bars and times (X)
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileMenu.getElementsByTagName('a');
    for(let link of mobileNavLinks) {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }

            // --- Typed.js Animation ---
    if (document.querySelector('.typed-text')) {
           new Typed('.typed-text', {
            strings: ["Web Developer.", "Problem Solver.", "Software Engineer and more."],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

revealElements.forEach(el => {
    observer.observe(el);
});
});