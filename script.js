// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

const cursorText = document.createElement('div');
cursorText.className = 'cursor-text';
document.body.appendChild(cursorText);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card, .tech-item, .process-step, .testimonial-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorText.style.opacity = '1';
        cursorText.style.transform = 'translateY(0)';
        
        if (element.classList.contains('cta-button')) {
            cursorText.textContent = 'Click me!';
        } else if (element.classList.contains('service-card')) {
            cursorText.textContent = 'Learn more';
        } else if (element.classList.contains('tech-item')) {
            cursorText.textContent = 'View details';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorText.style.opacity = '0';
        cursorText.style.transform = 'translateY(10px)';
    });
});

// Navbar scroll effects
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form data:', data);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    contactForm.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .tech-item, .process-step, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    heroBackground.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
});

// Testimonials slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

const showSlide = (index) => {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}, 5000);

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
}); 