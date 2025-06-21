// Header Component
class Header {
    constructor() {
        this.activeLink = 'home';
    }

    setActiveLink(link) {
        this.activeLink = link;
    }

    render() {
        return `
            <nav class="navbar">
                <a href="#" class="logo">
                    <i class="fas fa-code logo-icon"></i>
                    Heron Tech
                </a>
                <div class="nav-links">
                    <a href="#home" class="${this.activeLink === 'home' ? 'active' : ''}">Home</a>
                    <a href="#services" class="${this.activeLink === 'services' ? 'active' : ''}">Services</a>
                    <a href="#technologies" class="${this.activeLink === 'technologies' ? 'active' : ''}">Technologies</a>
                    <a href="#process" class="${this.activeLink === 'process' ? 'active' : ''}">Process</a>
                    <a href="#testimonials" class="${this.activeLink === 'testimonials' ? 'active' : ''}">Testimonials</a>
                    <a href="#contact" class="${this.activeLink === 'contact' ? 'active' : ''}">Contact</a>
                </div>
                <div class="menu-btn">
                    <div class="menu-btn__burger"></div>
                </div>
            </nav>
        `;
    }

    // Method to insert header into a specific element
    mount(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = this.render();
        }
    }
}

export default Header; 