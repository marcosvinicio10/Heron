// Navigation Controller
class NavigationController {
    constructor() {
        this.lastScroll = 0;
        this.navbar = document.querySelector('.navbar');
        this.menuBtn = document.querySelector('.menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.sections = document.querySelectorAll('section');
        this.navItems = document.querySelectorAll('.nav-links a');
        
        // Debug logs
        console.log('NavigationController initialized');
        console.log('Navbar found:', this.navbar);
        console.log('Menu button found:', this.menuBtn);
        console.log('Nav links found:', this.navLinks);
        
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupActiveNavigation();
    }

    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.navbar.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > this.lastScroll && !this.navbar.classList.contains('scroll-down')) {
                this.navbar.classList.remove('scroll-up');
                this.navbar.classList.add('scroll-down');
            } else if (currentScroll < this.lastScroll && this.navbar.classList.contains('scroll-down')) {
                this.navbar.classList.remove('scroll-down');
                this.navbar.classList.add('scroll-up');
            }
            
            this.lastScroll = currentScroll;
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu when clicking on a link
                    this.closeMobileMenu();
                }
            });
        });
    }

    setupMobileMenu() {
        if (!this.menuBtn) {
            console.error('Menu button not found!');
            return;
        }
        
        console.log('Setting up mobile menu...');
        
        this.menuBtn.addEventListener('click', () => {
            console.log('Menu button clicked!');
            this.toggleMobileMenu();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navLinks.classList.contains('active')) {
                // Check if click is outside the menu and not on the menu button
                if (!this.navLinks.contains(e.target) && !this.menuBtn.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });

        // Close mobile menu when clicking on the close button (X)
        this.navLinks.addEventListener('click', (e) => {
            if (e.target === this.navLinks) {
                this.closeMobileMenu();
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navLinks.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        console.log('Toggling mobile menu...');
        this.menuBtn.classList.toggle('open');
        this.navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        this.menuBtn.classList.remove('open');
        this.navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }

    setupActiveNavigation() {
        window.addEventListener('scroll', () => {
            let current = '';
            
            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }
}

export default NavigationController; 