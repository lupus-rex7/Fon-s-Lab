// Ensure scripts are loaded before running logic
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Icons safely
    if (window.lucide) {
        lucide.createIcons();
    } else {
        console.warn("Lucide library not loaded");
    }

    // Typewriter Effect
    const textToType = "Cyber Security Specialist | Student";
    const typeWriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typeWriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
        mobileMenu.classList.toggle('menu-open');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
        });
    });
});