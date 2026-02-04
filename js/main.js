// ================================
// Mobile Menu Toggle
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navBar = document.querySelector('.navbar');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ================================
// Gallery Filter
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        // Add fade in animation
                        item.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// ================================
// Contact Form Handling
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                projectType: document.getElementById('projectType').value,
                timeline: document.getElementById('timeline').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            // In production, you would send this data to your server
            console.log('Form Data:', formData);
            
            // Show success message
            showFormMessage('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In production, you would do something like:
            /*
            fetch('your-server-endpoint.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                showFormMessage('Thank you! We will contact you soon.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                showFormMessage('Sorry, there was an error. Please try again.', 'error');
            });
            */
        });
    }
    
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = 'form-message ' + type;
            
            // Auto-hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }
    }
});

// ================================
// Smooth Scroll for Anchor Links
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchors (not just "#")
            if (href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Get navbar height for offset
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    
                    // Calculate scroll position
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ================================
// Scroll-to-Top Button (Optional)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '▲';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color, #ff6b35);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#ff5722';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#ff6b35';
    });
    
    // Create WhatsApp button
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/381692401991?text=Zdravo%2C%20zainteresovan%20sam%20za%20vaše%20usluge';
    whatsappButton.target = '_blank';
    whatsappButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#ffffff" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>';
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #25D366;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 28px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        z-index: 999;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(whatsappButton);
    
    // Hover effect for WhatsApp button
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#20BA5A';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#25D366';
    });
});

// ================================
// Fade-in Animation on Scroll
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToAnimate = document.querySelectorAll(
        '.feature-card, .service-card, .service-detail-card, .value-card, .stat-card, .equipment-card, .testimonial-card, .gallery-item'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ================================
// Active Navigation Link Highlight
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

// ================================
// Phone Number Click Tracking (Optional)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone number clicked:', this.getAttribute('href'));
            // Here you could add analytics tracking
            // Example: gtag('event', 'phone_click', { phone_number: this.getAttribute('href') });
        });
    });
});

// ================================
// Form Field Character Counter (Optional)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const messageField = document.getElementById('message');
    
    if (messageField) {
        const maxLength = 1000;
        
        // Create counter element
        const counter = document.createElement('div');
        counter.style.cssText = 'text-align: right; font-size: 0.9rem; color: #666; margin-top: 5px;';
        counter.textContent = `0 / ${maxLength} characters`;
        
        messageField.parentNode.appendChild(counter);
        
        // Update counter on input
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            counter.textContent = `${length} / ${maxLength} characters`;
            
            if (length > maxLength * 0.9) {
                counter.style.color = '#ff6b35';
            } else {
                counter.style.color = '#666';
            }
        });
    }
});

// ================================
// Print Page Function (Optional)
// ================================
function printPage() {
    window.print();
}

// ================================
// Utility Functions
// ================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Validate email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ================================
// Carousel Gallery
// ================================
class Carousel {
    constructor(container, options = {}) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.items = Array.from(this.track.querySelectorAll('.carousel-item'));
        this.prevBtn = container.querySelector('.carousel-btn.prev');
        this.nextBtn = container.querySelector('.carousel-btn.next');
        this.dotsContainer = container.querySelector('.carousel-dots');
        
        // Store custom options
        this.options = options;
        
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalPages = Math.ceil(this.items.length / this.itemsPerView);
        
        // Touch/swipe variables
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartY = 0;
        this.touchEndY = 0;
        this.isDragging = false;
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.updateCarousel();
        this.attachEventListeners();
        
        // Update on window resize
        window.addEventListener('resize', () => {
            const oldItemsPerView = this.itemsPerView;
            this.itemsPerView = this.getItemsPerView();
            
            if (oldItemsPerView !== this.itemsPerView) {
                this.totalPages = Math.ceil(this.items.length / this.itemsPerView);
                this.currentIndex = Math.min(this.currentIndex, this.totalPages - 1);
                this.createDots();
                this.updateCarousel();
            }
        });
    }
    
    getItemsPerView() {
        // If custom itemsPerView is provided in options, use it
        if (this.options.itemsPerView) {
            return this.options.itemsPerView;
        }
        
        // Otherwise, use responsive default
        const width = window.innerWidth;
        if (width <= 540) return 1;
        if (width <= 768) return 1;
        if (width <= 1024) return 2;
        return 2;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalPages; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to page ${i + 1}`);
            if (i === this.currentIndex) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.goToPage(i);
            });
            
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateCarousel() {
        const itemWidth = this.items[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(this.track).gap) || 0;
        const offset = -(this.currentIndex * this.itemsPerView * (itemWidth + gap));
        
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Update buttons state
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex >= this.totalPages - 1;
        }
        
        // Update dots
        this.updateDots();
    }
    
    updateDots() {
        if (!this.dotsContainer) return;
        
        const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    goToPage(pageIndex) {
        this.currentIndex = Math.max(0, Math.min(pageIndex, this.totalPages - 1));
        this.updateCarousel();
    }
    
    next() {
        if (this.currentIndex < this.totalPages - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    attachEventListeners() {
        // Button navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Touch/swipe support
        this.track.addEventListener('touchstart', (e) => {
            // Don't capture touch events on iframes
            if (e.target.tagName === 'IFRAME') {
                return;
            }
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
            this.isDragging = true;
        }, { passive: true });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            // Don't capture touch events on iframes
            if (e.target.tagName === 'IFRAME') {
                return;
            }
            this.touchEndX = e.touches[0].clientX;
            this.touchEndY = e.touches[0].clientY;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            if (!this.isDragging) return;
            // Don't capture touch events on iframes
            if (e.target.tagName === 'IFRAME') {
                return;
            }
            this.handleSwipe();
            this.isDragging = false;
        });
        
        // Mouse drag support for desktop
        this.track.addEventListener('mousedown', (e) => {
            // Don't capture mouse events on iframes
            if (e.target.tagName === 'IFRAME') {
                return;
            }
            this.touchStartX = e.clientX;
            this.touchStartY = e.clientY;
            this.isDragging = true;
            this.track.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        this.track.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            this.touchEndX = e.clientX;
            this.touchEndY = e.clientY;
        });
        
        this.track.addEventListener('mouseup', () => {
            if (!this.isDragging) return;
            this.handleSwipe();
            this.isDragging = false;
            this.track.style.cursor = 'grab';
        });
        
        this.track.addEventListener('mouseleave', () => {
            if (this.isDragging) {
                this.isDragging = false;
                this.track.style.cursor = 'grab';
            }
        });
        
        // Keyboard navigation
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });
    }
    
    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = Math.abs(this.touchEndY - this.touchStartY);
        const minSwipeDistance = 50;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe right
                this.prev();
            } else {
                // Swipe left
                this.next();
            }
        }
    }
}

// Initialize all carousels on the page
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.gallery-category');
    
    carouselContainers.forEach(container => {
        new Carousel(container);
    });

    const equipmentCarousel = document.querySelectorAll('.equipment-carousel'); 
        
    equipmentCarousel.forEach(carousel => {
        new Carousel(carousel,{
            itemsPerView: 1
        });
    });
    

});

console.log('ExcavaPro website loaded successfully!');
