document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuIcon = document.querySelector('.mobile-menu-toggle i');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle Icon (bars to xmark)
            if (navLinks.classList.contains('active')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-xmark');
            } else {
                mobileMenuIcon.classList.remove('fa-xmark');
                mobileMenuIcon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });

    // Header Background Change on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 6, 23, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(2, 6, 23, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Form Submit handling (Alert)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation check
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if(name && email && message) {
                // Show success alert
                alert(`Thank you, ${name}! Your message has been sent successfully.`);
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Smooth Scrolling for anchored links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetBlock = document.querySelector(targetId);
            
            if(targetBlock) {
                const headerOffset = 80;
                const elementPosition = targetBlock.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
