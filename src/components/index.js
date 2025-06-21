// Components Index - Example usage
import Header from './Header.js';
import Footer from './Footer.js';

// Example of how to use the components
export function initializeComponents() {
    // Initialize Header
    const header = new Header();
    header.mount('#header-container'); // Insert into element with id="header-container"
    
    // Initialize Footer
    const footer = new Footer();
    footer.mount('#footer-container'); // Insert into element with id="footer-container"
}

// Export components for individual use
export { Header, Footer };

// Usage example:
// 
// 1. Include the CSS files in your HTML:
//    <link rel="stylesheet" href="src/components/header.css">
//    <link rel="stylesheet" href="src/components/footer.css">
//
// 2. Add containers in your HTML:
//    <div id="header-container"></div>
//    <div id="footer-container"></div>
//
// 3. Import and use in your JavaScript:
//    import { Header, Footer } from './src/components/index.js';
//    
//    const header = new Header();
//    header.setActiveLink('home'); // Set active navigation link
//    header.mount('#header-container');
//    
//    const footer = new Footer();
//    footer.mount('#footer-container'); 