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
