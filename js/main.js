document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.nav-container');
    const navContainer = document.querySelector('header');
    const scrollUp = document.getElementById('scroll-up');
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
            scrollUp.style.display = 'flex';

        } else {
            navbar.classList.remove('scrolled');
            navContainer.classList.remove('scrolled');
            hamburgerButton.classList.remove('scrolled');
            scrollUp.style.display = 'none';

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

    document.querySelector('.hamburger-button').addEventListener('click', function() {
        document.querySelector('.nav-bar').classList.toggle('active');
    });

// Close the nav when a link is clicked
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-bar').classList.remove('active');
        });
    });

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    scrollUp.addEventListener('click', scrollToTop);
    
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
