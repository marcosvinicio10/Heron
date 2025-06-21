// Testimonials Controller
class TestimonialsController {
    constructor() {
        this.currentSlide = 0;
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        this.init();
    }

    init() {
        if (this.testimonials.length > 0) {
            this.setupDots();
            this.startAutoAdvance();
        }
    }

    showSlide(index) {
        this.testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    setupDots() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentSlide = index;
                this.showSlide(this.currentSlide);
            });
        });
    }

    startAutoAdvance() {
        setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
            this.showSlide(this.currentSlide);
        }, 5000);
    }
}

export default TestimonialsController; 