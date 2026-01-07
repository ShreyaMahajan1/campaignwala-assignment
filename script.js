// FreeLancer Waala JavaScript

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(nextSlide, 5000);

// Navigation buttons
document.querySelector('.next-btn')?.addEventListener('click', nextSlide);
document.querySelector('.prev-btn')?.addEventListener('click', prevSlide);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.kf-header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.kf-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animate__active');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.kf-menu-item, .kf-blog-grid-item, .kf-choose-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Button click handlers
document.querySelectorAll('.kf-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Handle specific button actions
        const buttonText = this.textContent.trim();
        if (buttonText.includes('Get Started')) {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection && !this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Service item hover effects
document.querySelectorAll('.kf-menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Blog item click handlers
document.querySelectorAll('.kf-blog-grid-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.name').textContent;
        alert(`Blog post: "${title}"\n\nThis would redirect to the full blog post in a real implementation.`);
    });
});

// Contact form simulation (if contact form exists)
function handleContactForm() {
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.\n\nIn a real implementation, this would submit the form data.');
        });
    });
}

// Initialize contact form handling
handleContactForm();

// Mobile menu toggle (if mobile menu exists)
function initMobileMenu() {
    const menuBtn = document.querySelector('.kf-menu-btn');
    const mobileMenu = document.querySelector('.kf-navbar-mobile');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
initMobileMenu();

// Brands slider animation
function animateBrands() {
    const brandsSlider = document.querySelector('.brands-slider');
    if (brandsSlider) {
        let scrollAmount = 0;
        const scrollStep = 1;
        const maxScroll = brandsSlider.scrollWidth - brandsSlider.clientWidth;
        
        setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            }
            brandsSlider.scrollLeft = scrollAmount;
        }, 50);
    }
}

// Initialize brands animation
animateBrands();

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.slide-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effects to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.color = '#ff6b35';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.color = '';
    });
});

// Console welcome message
console.log('%c🚀 Welcome to FreeLancer Waala!', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%cJoin us for flexible work opportunities!', 'color: #2c3e50; font-size: 14px;');

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('FreeLancer Waala website loaded successfully!');
    
    // Add any additional initialization here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: 'FreeLancer Waala - Home',
            page_location: window.location.href
        });
    }
});