// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Skills data - you can modify this array to add your skills
const skills = [
    {
        icon: 'fab fa-facebook',
        title: 'Facebook Ads',
        description: 'Complete Facebook Ads expertise from beginner to advanced level. Ad creation, targeting, monitoring, and campaign optimization.'
    },
    {
        icon: 'fab fa-google',
        title: 'Google Ads',
        description: 'Basic Google Ads management including keyword setup, campaign creation, and performance adjustments.'
    },
    {
        icon: 'fas fa-palette',
        title: 'Canva Design',
        description: 'Social media graphics creation, basic brand kits development, and marketing visual design using Canva.'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email Marketing & Automation',
        description: 'Newsletter creation, email scheduling, list management, and automated email campaign setup.'
    },
    {
        icon: 'fas fa-pen-fancy',
        title: 'Copywriting & Content',
        description: 'Writing captions, product descriptions, ad copy, blog posts, and content formatting and uploading.'
    },
    {
        icon: 'fas fa-share-alt',
        title: 'Social Media Management',
        description: 'Post scheduling, content calendar creation, basic engagement monitoring, and social media strategy.'
    },
    {
        icon: 'fas fa-chart-bar',
        title: 'Digital Marketing',
        description: 'Content planning, market research assistance, and basic digital marketing strategy implementation.'
    },
    {
        icon: 'fas fa-tasks',
        title: 'Administrative Support',
        description: 'Data entry, file organization, calendar management, email handling, document formatting, and spreadsheet tasks.'
    }
];

// Tools data - platforms and software you use
const tools = [
    {
        icon: 'fas fa-palette',
        title: 'Canva',
        description: 'Professional graphic design for social media, marketing materials, and brand visuals.',
        category: 'Design'
    },
    {
        icon: 'fab fa-google',
        title: 'Google Workspace',
        description: 'Complete productivity suite including Gmail, Drive, Docs, Sheets, and Calendar management.',
        category: 'Productivity'
    },
    {
        icon: 'fab fa-facebook',
        title: 'Facebook Ads Manager',
        description: 'Advanced campaign creation, audience targeting, budget management, and performance analytics.',
        category: 'Advertising'
    },
    {
        icon: 'fas fa-tasks',
        title: 'Trello / Notion',
        description: 'Project management, task organization, workflow tracking, and team collaboration.',
        category: 'Project Management'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Mailchimp',
        description: 'Email marketing campaigns, automation sequences, list management, and basic analytics.',
        category: 'Email Marketing'
    }
];

// Projects data - you can modify this array to add your projects
const projects = [
    {
        title: 'Facebook Ads Campaign Management',
        description: 'Managed complete Facebook Ads campaigns from setup to optimization, including audience targeting, ad creation, and performance monitoring for multiple clients.',
        image: 'fab fa-facebook'
    },
    {
        title: 'Email Marketing Automation',
        description: 'Created and managed email marketing campaigns with automated sequences, newsletter design, and list management resulting in improved client engagement.',
        image: 'fas fa-envelope'
    },
    {
        title: 'Content & Design Package',
        description: 'Developed comprehensive content strategy including blog writing, social media graphics in Canva, copywriting for ads, and social media management.',
        image: 'fas fa-palette'
    }
];

// Dynamically populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Dynamically populate tools section
function populateTools() {
    const toolsGrid = document.querySelector('.tools-grid');
    toolsGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <div class="tool-content">
                <h3>${tool.title}</h3>
                <span class="tool-category">${tool.category}</span>
                <p>${tool.description}</p>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// Dynamically populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.image}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Intersection Observer for animations
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

// Add animation styles and observe elements
function initAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .tool-card, .project-card, .about-text, .contact-info, .contact-form');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    populateTools();
    populateProjects();
    initAnimations();
    
    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 150);
        }, 1000);
    }
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();