// Custom Cursor Controller
class CursorController {
    constructor() {
        this.cursor = null;
        this.cursorFollower = null;
        this.cursorText = null;
        this.init();
    }

    init() {
        this.createCursorElements();
        this.setupMouseTracking();
        this.setupInteractiveElements();
    }

    createCursorElements() {
        // Create cursor elements
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor';
        document.body.appendChild(this.cursor);

        this.cursorFollower = document.createElement('div');
        this.cursorFollower.className = 'cursor-follower';
        document.body.appendChild(this.cursorFollower);

        this.cursorText = document.createElement('div');
        this.cursorText.className = 'cursor-text';
        document.body.appendChild(this.cursorText);
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                this.cursorFollower.style.left = e.clientX + 'px';
                this.cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
    }

    setupInteractiveElements() {
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .tech-item, .process-step, .testimonial-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursorFollower.style.transform = 'scale(1.5)';
                this.cursorText.style.opacity = '1';
                this.cursorText.style.transform = 'translateY(0)';
                
                this.setCursorText(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursorFollower.style.transform = 'scale(1)';
                this.cursorText.style.opacity = '0';
                this.cursorText.style.transform = 'translateY(10px)';
            });
        });
    }

    setCursorText(element) {
        if (element.classList.contains('cta-button')) {
            this.cursorText.textContent = 'Click me!';
        } else if (element.classList.contains('service-card')) {
            this.cursorText.textContent = 'Learn more';
        } else if (element.classList.contains('tech-item')) {
            this.cursorText.textContent = 'View details';
        }
    }
}

export default CursorController; 