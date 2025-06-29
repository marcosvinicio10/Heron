// Import components
import { Header, Footer } from './src/components/index.js';

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Header
    const header = new Header();
    header.setActiveLink('home'); // Set active navigation link
    header.mount('#header-container');
    
    // Initialize Footer
    const footer = new Footer();
    footer.mount('#footer-container');
});

// Main script file - imports and initializes all controllers
import App from './controllers/app.js';
// The App class will handle all initialization
// All functionality is now organized in separate controller files 