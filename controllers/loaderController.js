// Loader Controller
class LoaderController {
    constructor() {
        this.loader = document.querySelector('.loader');
        this.init();
    }

    init() {
        // Hide loader after 2 seconds
        setTimeout(() => {
            this.hideLoader();
        }, 2000);
    }

    hideLoader() {
        if (this.loader) {
            this.loader.classList.add('fade-out');
            // Remove loader from DOM after animation
            setTimeout(() => {
                if (this.loader && this.loader.parentNode) {
                    this.loader.parentNode.removeChild(this.loader);
                }
            }, 500);
        }
    }
}

export default LoaderController; 