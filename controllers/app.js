// Main Application Controller
import LoaderController from './loaderController.js';
import CursorController from './cursorController.js';
import NavigationController from './navigationController.js';
import FormController from './formController.js';
import AnimationController from './animationController.js';
import TestimonialsController from './testimonialsController.js';

class App {
    constructor() {
        this.controllers = {};
        this.init();
    }

    init() {
        // Initialize controllers that don't depend on DOM elements
        this.controllers.loader = new LoaderController();
        this.controllers.cursor = new CursorController();
        this.controllers.form = new FormController();
        this.controllers.animation = new AnimationController();
        this.controllers.testimonials = new TestimonialsController();
        
        // Initialize navigation controller after a small delay to ensure Header is mounted
        setTimeout(() => {
            this.controllers.navigation = new NavigationController();
        }, 100);
        
        console.log('Heron Tech App initialized successfully!');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

export default App; 