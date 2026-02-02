// ===== Mobile Navigation Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger to X
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 17, 40, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(74, 144, 226, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 17, 40, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(74, 144, 226, 0.3)';
    }
});

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all menu items and info cards
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.menu-item, .info-card, .feature-item, .about-text, .about-image');

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Dynamic Star Generation (Additional Stars) =====
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            animation: twinkle ${Math.random() * 3 + 2}s infinite;
        `;
        starsContainer.appendChild(star);
    }
}

// Add twinkle animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Create stars when page loads
createStars();

// ===== Parallax Effect for Hero Image =====
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===== Add active state to current section in nav =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Console Easter Egg =====
console.log('%c🐱 歡迎來到太空貓咖啡館！', 'font-size: 20px; color: #ffd700; text-shadow: 0 0 10px #4a90e2;');
console.log('%c在這裡，每一杯咖啡都是星際旅程的開始...', 'font-size: 14px; color: #4a90e2;');
