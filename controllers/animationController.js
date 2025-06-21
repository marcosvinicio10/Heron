// Animation Controller
class AnimationController {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.heroBackground = document.querySelector('.hero-background');
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffect();
        this.initializeAOS();
    }

    setupScrollAnimations() {
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
    }

    setupParallaxEffect() {
        if (this.heroBackground) {
            window.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                this.heroBackground.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
            });
        }
    }

    initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
    }
}

export default AnimationController; 