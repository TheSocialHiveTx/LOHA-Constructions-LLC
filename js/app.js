document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLogoText = document.getElementById('nav-logo-text');
    const navLogoSub = document.getElementById('nav-logo-sub');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerOverlay = document.getElementById('header-overlay');
    const mobileMenuIcon = mobileBtn.querySelector('i');

    // Services Dropdown Logic
    const servicesBtn = document.getElementById('services-btn');
    const servicesDropdown = document.getElementById('services-dropdown-container'); // Parent container
    let isDropdownOpen = false;

    // Scroll Logic
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-lg', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-4');

            navLogoText.classList.remove('text-white');
            navLogoText.classList.add('text-primary');

            navLogoSub.classList.remove('text-zinc-200');
            navLogoSub.classList.add('text-zinc-600');

            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-zinc-800');

            if (headerOverlay) headerOverlay.classList.add('opacity-0');

            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-zinc-800');
            });

            servicesBtn.classList.remove('text-white');
            servicesBtn.classList.add('text-zinc-800');

        } else {
            navbar.classList.remove('bg-white', 'shadow-lg', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4');

            navLogoText.classList.remove('text-primary');
            navLogoText.classList.add('text-white');

            navLogoSub.classList.remove('text-zinc-600');
            navLogoSub.classList.add('text-zinc-200');

            mobileBtn.classList.remove('text-zinc-800');
            mobileBtn.classList.add('text-white');

            if (headerOverlay) headerOverlay.classList.remove('opacity-0');

            navLinks.forEach(link => {
                link.classList.remove('text-zinc-800');
                link.classList.add('text-white');
            });

            servicesBtn.classList.remove('text-zinc-800');
            servicesBtn.classList.add('text-white');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        let isOpen = !mobileMenu.classList.contains('max-h-0');

        // Toggle (inverse of current state)
        if (!isOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-[600px]', 'opacity-100', 'py-6');
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        } else {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-[600px]', 'opacity-100', 'py-6');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-[600px]', 'opacity-100', 'py-6');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });
});
