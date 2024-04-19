document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.nav-container');
    const navContainer = document.querySelector('header');
    const scrollThreshold = 50;
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navBar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    const sections = document.querySelectorAll('section');
    const body = document.body;
    const breakpoint = 900;

    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
            navContainer.classList.add('scrolled');
            hamburgerButton.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navContainer.classList.remove('scrolled');
            hamburgerButton.classList.remove('scrolled');
        }
        updateActiveNavItem();
    }

    function updateActiveNavItem() {
        let found = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150 && !found) {
                navLinks.forEach(link => {
                    link.parentNode.classList.toggle('active', link.getAttribute('href') === '#' + section.id);
                });
                found = true;
            }
        });
        if (!found) navLinks.forEach(link => link.parentNode.classList.remove('active'));
    }

    function toggleMenu() {
        navBar.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    function hideMenuOnClick() {
        if (navBar.classList.contains('active')) {
            toggleMenu();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hideMenuOnClick(); 
        });
    });

    window.addEventListener('scroll', checkScroll);
    hamburgerButton.addEventListener('click', toggleMenu);

    window.addEventListener('resize', function() {
        if (window.innerWidth > breakpoint && body.classList.contains('no-scroll')) {
            body.classList.remove('no-scroll');
        }
        if (window.innerWidth > breakpoint && navBar.classList.contains('active')) {
            navBar.classList.remove('active');
            hamburgerButton.classList.remove('active');
        }
    });

});
