// Footer Component
class Footer {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    render() {
        return `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-logo">
                        <i class="fas fa-code"></i>
                        Heron Tech
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Services</h4>
                            <a href="#services">Web Development</a>
                            <a href="#services">Mobile Apps</a>
                            <a href="#services">Game Development</a>
                        </div>
                        <div class="footer-column">
                            <h4>Company</h4>
                            <a href="#about">About Us</a>
                            <a href="#process">Our Process</a>
                            <a href="#testimonials">Testimonials</a>
                        </div>
                        <div class="footer-column">
                            <h4>Contact</h4>
                            <a href="#contact">Get in Touch</a>
                            <a href="#contact">Support</a>
                            <a href="#contact">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${this.currentYear} Heron Tech. All rights reserved.</p>
                </div>
            </footer>
        `;
    }

    // Method to insert footer into a specific element
    mount(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = this.render();
        }
    }
}

export default Footer; 