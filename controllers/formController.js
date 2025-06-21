// Form Controller
class FormController {
    constructor() {
        this.contactForm = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.contactForm) {
            this.setupFormSubmission();
        }
    }

    setupFormSubmission() {
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    handleFormSubmission() {
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form data:', data);
        
        this.showSuccessMessage();
        this.resetForm();
    }

    showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        this.contactForm.appendChild(successMessage);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }

    resetForm() {
        this.contactForm.reset();
    }
}

export default FormController; 