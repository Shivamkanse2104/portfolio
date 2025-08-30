// DOM Elements
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const viewProjectsBtn2 = document.getElementById('viewProjectsBtn2');
const closeBtn = document.querySelector('.close');
const logo = document.querySelector('.logo');
const modal = document.getElementById('projectsModal');
const downloadCVBtn = document.getElementById('downloadCVBtn');

// Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

// Modal Functionality
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (viewProjectsBtn2) {
    viewProjectsBtn2.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Close modal when clicking outside
if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        if (targetId === 'projects') {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else if (targetId === 'about') {
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (targetId === 'contact') {
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Download CV functionality
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
        // Create a link to the actual resume PDF file
        const link = document.createElement('a');
        link.href = 'resume.pdf.pdf';
        link.download = 'Shivam_Kanse_Resume.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Skill tag click effect
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Store original styles
        const originalBackground = tag.style.background;
        const originalTransform = tag.style.transform;
        
        // Apply highlight effect
        tag.style.background = 'var(--gradient-secondary)';
        tag.style.transform = 'scale(1.1)';
        
        // Revert after animation
        setTimeout(() => {
            tag.style.background = originalBackground;
            tag.style.transform = originalTransform;
        }, 300);
    });
});

// Social link functionality
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className;
        
        // Add click effect
        link.style.transform = 'scale(0.9)';
        setTimeout(() => {
            link.style.transform = '';
        }, 150);
        
        // Handle different platforms
        if (platform.includes('fa-linkedin')) {
            window.open('https://www.linkedin.com/in/shivam-kanse-32a2822bb/', '_blank');
        } else if (platform.includes('fa-github')) {
            window.open('https://github.com/Shivamkanse2104', '_blank');
        } else if (platform.includes('fa-twitter')) {
            window.open('https://x.com/shivam98997467', '_blank');
        } else if (platform.includes('fa-instagram')) {
            window.open('https://www.instagram.com/shivamkanse_2104/', '_blank');
        }
    });
});

// Initialize EmailJS
(function() {
    // Check if EmailJS is available
    if (typeof emailjs !== 'undefined') {
        emailjs.init("Vhz4K3_jyP_XzFB7L");
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS not loaded. Please check the script tag.');
    }
})();

// Contact Form Functionality
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            showFormMessage('Email service not available. Please refresh the page and try again.', 'error');
            return;
        }
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Remove any existing messages
        const existingMessage = contactForm.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Validate form
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>Sending...';
        submitBtn.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'Shivam Kanse',
            reply_to: email
        };
        
        // Send email using EmailJS
        console.log('Sending email with params:', templateParams);
        console.log('Service ID:', 'service_6hs158e');
        console.log('Template ID:', 'template_7fsx2iu');
        
        emailjs.send('service_6hs158e', 'template_7fsx2iu', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                showFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
            }, function(error) {
                console.log('FAILED...', error);
                console.log('Error details:', {
                    status: error.status,
                    text: error.text,
                    response: error.response
                });
                
                // Show detailed error message for debugging
                let errorMessage = 'Sorry, there was an error sending your message. ';
                if (error.text) {
                    errorMessage += 'Error: ' + error.text;
                } else if (error.status) {
                    errorMessage += 'Status: ' + error.status;
                }
                showFormMessage(errorMessage, 'error');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Function to show form messages
function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.textContent = message;
    
    const contactForm = document.getElementById('contactForm');
    contactForm.appendChild(messageDiv);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe content blocks for animation
const contentBlocks = document.querySelectorAll('.content-block');
contentBlocks.forEach(block => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(30px)';
    block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(block);
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Touch event handling for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
            console.log('Swiped up');
        } else {
            // Swipe down
            console.log('Swiped down');
        }
    }
}

// Debounced scroll handler for performance
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

// Apply debounced scroll handling
const debouncedScrollHandler = debounce(() => {
    // Any scroll-based functionality can go here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for animations
    document.body.classList.add('loaded');
    
    // Set initial header state
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    }
    
    console.log('Portfolio loaded successfully! 🚀');
});
