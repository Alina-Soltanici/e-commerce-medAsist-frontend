document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const navbarContainer = document.getElementById('navbar-container');
            const backToTopButton = document.getElementById('back-to-top');

            const hamburgerButton = document.getElementById('hamburger-button');
            const closeMenuButton = document.getElementById('close-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            const openMenu = () => body.classList.add('mobile-menu-open');
            const closeMenu = () => body.classList.remove('mobile-menu-open');

            hamburgerButton.addEventListener('click', openMenu);
            closeMenuButton.addEventListener('click', closeMenu);
            mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) { closeMenu(); } });
            mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

            window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop;
                if (navbarContainer) {
                    if (window.scrollY > 30) { navbarContainer.classList.add('scrolled'); } 
                    else { navbarContainer.classList.remove('scrolled'); }
                }

                if (backToTopButton) {
                    if (scrollTop > 400) { backToTopButton.classList.remove('hidden'); }
                    else { backToTopButton.classList.add('hidden'); }
                }
            });

            if (backToTopButton) {
                backToTopButton.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }

            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            animatedElements.forEach(element => observer.observe(element));
        });