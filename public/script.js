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

// Skills data
const skills = [
    {
        icon: 'fas fa-keyboard',
        title: 'Data Entry',
        description: 'Accurate data input and record maintenance.'
    },
    {
        icon: 'fas fa-folder-open',
        title: 'Organization',
        description: 'Structured file, document, and task organization.'
    },
    {
        icon: 'fas fa-comments',
        title: 'Communication',
        description: 'Clear client updates and responsive collaboration.'
    },
    {
        icon: 'fas fa-clock',
        title: 'Time Management',
        description: 'Prioritizes tasks and meets deadlines consistently.'
    },
    {
        icon: 'fas fa-desktop',
        title: 'Computer Literacy',
        description: 'Confident with digital tools and online workflows.'
    },
    {
        icon: 'fas fa-bolt',
        title: 'Fast Learner',
        description: 'Quickly adapts to new tools and processes.'
    },
    {
        icon: 'fas fa-search',
        title: 'Attention to Detail',
        description: 'Reviews information carefully for accuracy.'
    },
    {
        icon: 'fas fa-sync-alt',
        title: 'Adaptability',
        description: 'Flexible and reliable in changing priorities.'
    }
];

// Tools data - platforms and software you use
const tools = [
    {
        icon: 'fab fa-google',
        title: 'Google Workspace',
        description: 'Docs, Sheets, and Calendar for daily productivity.',
        category: 'Productivity'
    },
    {
        icon: 'fas fa-file-word',
        title: 'Microsoft Office',
        description: 'Word, Excel, and PowerPoint for professional documents.',
        category: 'Office Suite'
    },
    {
        icon: 'fas fa-headset',
        title: 'Slack, Zoom, Discord',
        description: 'Team communication and virtual meetings.',
        category: 'Communication'
    },
    {
        icon: 'fas fa-tasks',
        title: 'Trello / Asana',
        description: 'Project management and task tracking.',
        category: 'Project Management'
    },
    {
        icon: 'fab fa-facebook',
        title: 'Facebook Business Suite',
        description: 'Social media publishing and page management.',
        category: 'Social Media'
    }
];

// Experience data
const projects = [
    {
        title: 'Freelance Virtual Assistant',
        period: '2022 - 2025',
        description: 'Managed emails, documents, and digital files; performed accurate data entry and administrative support; communicated clearly with clients and completed tasks on time.',
        image: 'fas fa-briefcase'
    },
    {
        title: 'Marketing Manager & Specialist',
        period: '2022 - 2025',
        description: 'Supported marketing and online tasks while maintaining reliable task completion and timely updates.',
        image: 'fas fa-bullhorn'
    },
    {
        title: 'Executive Administrative Partner',
        period: '2022 - 2025',
        description: 'Assisted with daily administrative and online tasks; organized records and maintained accurate information.',
        image: 'fas fa-user-tie'
    },
    {
        title: 'Admin Support & Specialist',
        period: '2022 - 2025',
        description: 'Provided administrative support with a focus on accuracy and organization.',
        image: 'fas fa-clipboard-list'
    },
    {
        title: 'Records and Data Organization',
        period: '2022 - 2025',
        description: 'Organized records and ensured information accuracy and completeness.',
        image: 'fas fa-folder-tree'
    },
    {
        title: 'Skills Development / Self-Training',
        period: '2022 - 2026',
        description: 'Practiced accurate data input and spreadsheet management; reviewed information carefully to ensure accuracy and completeness.',
        image: 'fas fa-graduation-cap'
    }
];

// Education data
const education = [
    {
        school: 'Northern Bukidnon College',
        program: 'Bachelor of General Education',
        period: '2023 - Present',
        details: [
            'GPA: 95',
            'Demonstrated strong analytical and written communication skills.',
            'Maintained strong academic performance.',
            'Developed skills in research, documentation, and communication.',
            'Strengthened time management and digital productivity skills.'
        ]
    },
    {
        school: 'Libona Bukidnon National High School',
        program: 'General Academic Strand',
        period: '2021 - 2023',
        details: []
    }
];

// Languages data
const languages = [
    {
        language: 'English',
        level: 'Fluent'
    },
    {
        language: 'Bisaya',
        level: 'Fluent'
    },
    {
        language: 'Filipino',
        level: 'Basic'
    }
];

// Work samples data
function createWorkImage(title, colorStart, colorEnd) {
    const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'>
            <defs>
                <linearGradient id='grad' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stop-color='${colorStart}' />
                    <stop offset='100%' stop-color='${colorEnd}' />
                </linearGradient>
            </defs>
            <rect width='800' height='500' fill='url(#grad)' />
            <rect x='60' y='60' width='680' height='380' rx='32' fill='rgba(255,255,255,0.18)' />
            <text x='400' y='260' text-anchor='middle' font-family='Poppins, sans-serif' font-size='42' fill='white' font-weight='600'>${title}</text>
        </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const workSamples = [
    {
        title: 'Administrative Support Samples',
        description: 'Calendar, inbox, and reporting support workflows.',
        image: createWorkImage('Admin Support', '#4c1d95', '#8b5cf6'),
        examples: [
            {
                title: 'Inbox Triage',
                description: 'Prioritized messages with labels, follow-ups, and response tracking.',
                image: createWorkImage('Inbox Triage', '#5b21b6', '#a78bfa')
            },
            {
                title: 'Calendar Coordination',
                description: 'Managed availability, scheduling, and reminders for meetings.',
                image: createWorkImage('Calendar', '#6d28d9', '#c4b5fd')
            },
            {
                title: 'Weekly Reports',
                description: 'Summarized tasks and outcomes into clean weekly updates.',
                image: createWorkImage('Reports', '#7c3aed', '#f9a8d4')
            }
        ]
    },
    {
        title: 'Graphic Design Samples',
        description: 'Social graphics, promos, and brand templates.',
        image: '/images/1.png',
        examples: [
            {
                title: 'Design Sample 1',
                description: 'Graphic design sample.',
                image: '/images/1.png'
            },
            {
                title: 'Design Sample 2',
                description: 'Graphic design sample.',
                image: '/images/2.png'
            },
            {
                title: 'Design Sample 3',
                description: 'Graphic design sample.',
                image: '/images/3.png'
            },
            {
                title: 'Design Sample 4',
                description: 'Graphic design sample.',
                image: '/images/4.png'
            },
            {
                title: 'Design Sample 5',
                description: 'Graphic design sample.',
                image: '/images/5.png'
            },
            {
                title: 'Design Sample 6',
                description: 'Graphic design sample.',
                image: '/images/6.png'
            },
            {
                title: 'Design Sample 7',
                description: 'Graphic design sample.',
                image: '/images/7.png'
            },
            {
                title: 'Design Sample 8',
                description: 'Graphic design sample.',
                image: '/images/8.png'
            },
            {
                title: 'Design Sample 9',
                description: 'Graphic design sample.',
                image: '/images/Research%20Poster.png'
            },
            {
                title: 'Design Sample 10',
                description: 'Graphic design sample.',
                image: '/images/Screenshot%202026-03-03%20225541.png'
            }
        ]
    },
    {
        title: 'Social Media Content Samples',
        description: 'Captions, content plans, and scheduling support.',
        image: createWorkImage('Social Content', '#f97316', '#fb7185'),
        examples: [
            {
                title: 'Content Calendar',
                description: 'Planned weekly themes and posting cadence.',
                image: createWorkImage('Calendar', '#f97316', '#fb7185')
            },
            {
                title: 'Caption Writing',
                description: 'Wrote engaging captions aligned with brand voice.',
                image: createWorkImage('Captions', '#fb923c', '#facc15')
            },
            {
                title: 'Engagement Checklist',
                description: 'Tracked comments and response turnaround.',
                image: createWorkImage('Engagement', '#fdba74', '#f97316')
            }
        ]
    },
    {
        title: 'Education / Tutoring Materials',
        description: 'Lesson plans, worksheets, and study guides.',
        image: '/images/education/image.png',
        examples: [
            {
                title: 'Comprehensive English Assessment',
                description: 'File Sample.',
                fileUrl: '/images/education/Eng-CAE.pdf',
                previewUrl: '/images/education/Eng-CAE.pdf'
            },
            {
                title: 'Length Using Standard and Nonstandard Units',
                description: 'File Sample.',
                fileUrl: '/images/education/Length_Using_Standard_and_NonStandard_Units_Final.pdf',
                previewUrl: '/images/education/Length_Using_Standard_and_NonStandard_Units_Final.pdf'
            },
            {
                title: 'Detailed Lesson Plan Document',
                description: 'File Sample.',
                fileUrl: '/images/education/Noay,%20Krizsha%20%5BDLP%5D.pdf',
                previewImage: '/images/education/image.png'
            },
            {
                title: 'Professional Development Plan',
                description: 'File Sample.',
                fileUrl: '/images/education/PDP%20ENGLISH.pdf',
                previewUrl: '/images/education/PDP%20ENGLISH.pdf'
            }
        ]
    },
    {
        title: 'E-commerce Support Samples',
        description: 'Product listings, inventory updates, and order checks.',
        image: createWorkImage('E-commerce', '#7c2d12', '#fb923c'),
        examples: [
            {
                title: 'Product Listings',
                description: 'Formatted titles, descriptions, and tags for new items.',
                image: createWorkImage('Listings', '#7c2d12', '#fdba74')
            },
            {
                title: 'Inventory Tracker',
                description: 'Maintained stock counts and low-inventory alerts.',
                image: createWorkImage('Inventory', '#9a3412', '#fb923c')
            },
            {
                title: 'Order Checks',
                description: 'Verified orders, shipping details, and status updates.',
                image: createWorkImage('Orders', '#b45309', '#f59e0b')
            }
        ]
    },
    {
        title: 'Content Writing Samples',
        description: 'Blog drafts, product copy, and email content.',
        image: createWorkImage('Content Writing', '#1e293b', '#64748b'),
        examples: [
            {
                title: 'Blog Draft',
                description: 'Outlined and drafted a 600-word article with headings.',
                image: createWorkImage('Blog Draft', '#1e293b', '#94a3b8')
            },
            {
                title: 'Product Copy',
                description: 'Wrote concise descriptions highlighting key benefits.',
                image: createWorkImage('Product Copy', '#334155', '#64748b')
            }
        ]
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
                ${project.period ? `<div class="project-period">${project.period}</div>` : ''}
                <p>${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Dynamically populate work showcase section
function populateWorkShowcase() {
    const workGrid = document.querySelector('.work-grid');
    if (!workGrid) {
        return;
    }
    workGrid.innerHTML = '';

    workSamples.forEach((sample, index) => {
        const workCard = document.createElement('button');
        workCard.className = 'work-card';
        workCard.type = 'button';
        workCard.dataset.workIndex = String(index);
        workCard.innerHTML = `
            <img src="${sample.image}" alt="${sample.title}">
            <div class="work-card-body">
                <h3>${sample.title}</h3>
                <p>${sample.description}</p>
            </div>
        `;
        workGrid.appendChild(workCard);
    });
}

function openWorkModal(sample) {
    const modal = document.querySelector('#work-modal');
    const title = document.querySelector('#modal-title');
    const subtitle = document.querySelector('#modal-subtitle');
    const grid = document.querySelector('#modal-grid');

    if (!modal || !title || !subtitle || !grid) {
        return;
    }

    title.textContent = sample.title;
    subtitle.textContent = sample.description;
    grid.innerHTML = '';

    sample.examples.forEach(item => {
        const card = document.createElement('div');
        card.className = 'modal-card';
        if (item.previewImage) {
            card.innerHTML = `
                <button class="modal-preview" type="button" data-file="${item.fileUrl}" aria-label="View ${item.title}">
                    <img src="${item.previewImage}" alt="${item.title}">
                    <span class="modal-preview-overlay">View</span>
                </button>
                <div class="modal-card-body">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (item.image) {
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" data-full="${item.image}">
                <div class="modal-card-body">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (item.previewUrl) {
            card.innerHTML = `
                <button class="modal-preview" type="button" data-file="${item.fileUrl}" aria-label="View ${item.title}">
                    <iframe src="${item.previewUrl}#page=1&view=FitH" title="${item.title}" loading="lazy"></iframe>
                    <span class="modal-preview-overlay">View</span>
                </button>
                <div class="modal-card-body">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `;
        }
        grid.appendChild(card);
    });

    grid.querySelectorAll('img[data-full]').forEach(image => {
        image.addEventListener('click', () => {
            openImageLightbox(image.dataset.full, image.alt);
        });
    });

    grid.querySelectorAll('.modal-preview[data-file]').forEach(button => {
        button.addEventListener('click', () => {
            openFileLightbox(button.dataset.file, button.getAttribute('aria-label'));
        });
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

let lightbox = null;
let fileLightbox = null;

function ensureLightbox() {
    if (lightbox) {
        return;
    }

    lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
        <div class="image-lightbox-overlay" data-lightbox-close></div>
        <div class="image-lightbox-content" role="dialog" aria-modal="true">
            <button class="image-lightbox-close" type="button" aria-label="Close" data-lightbox-close>
                <i class="fas fa-times"></i>
            </button>
            <img class="image-lightbox-img" alt="">
        </div>
    `;

    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', event => {
        if (event.target.closest('[data-lightbox-close]')) {
            closeImageLightbox();
        }
    });
}

function openImageLightbox(src, altText) {
    ensureLightbox();
    const image = lightbox.querySelector('.image-lightbox-img');
    image.src = src;
    image.alt = altText || 'Work sample image';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
    if (!lightbox) {
        return;
    }
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function isLightboxOpen() {
    return Boolean(lightbox && lightbox.classList.contains('is-open'));
}

function ensureFileLightbox() {
    if (fileLightbox) {
        return;
    }

    fileLightbox = document.createElement('div');
    fileLightbox.className = 'file-lightbox';
    fileLightbox.setAttribute('aria-hidden', 'true');
    fileLightbox.innerHTML = `
        <div class="file-lightbox-overlay" data-file-close></div>
        <div class="file-lightbox-content" role="dialog" aria-modal="true">
            <button class="file-lightbox-close" type="button" aria-label="Close" data-file-close>
                <i class="fas fa-times"></i>
            </button>
            <div class="file-lightbox-toolbar">
                <a class="file-lightbox-download" href="#" target="_blank" rel="noopener">Open file</a>
            </div>
            <iframe class="file-lightbox-frame" title=""></iframe>
        </div>
    `;

    document.body.appendChild(fileLightbox);

    fileLightbox.addEventListener('click', event => {
        if (event.target.closest('[data-file-close]')) {
            closeFileLightbox();
        }
    });
}

function openFileLightbox(src, label) {
    ensureFileLightbox();
    const frame = fileLightbox.querySelector('.file-lightbox-frame');
    const download = fileLightbox.querySelector('.file-lightbox-download');
    frame.src = src;
    frame.title = label || 'Education file preview';
    download.href = src;
    fileLightbox.classList.add('is-open');
    fileLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeFileLightbox() {
    if (!fileLightbox) {
        return;
    }
    const frame = fileLightbox.querySelector('.file-lightbox-frame');
    frame.src = '';
    fileLightbox.classList.remove('is-open');
    fileLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function isFileLightboxOpen() {
    return Boolean(fileLightbox && fileLightbox.classList.contains('is-open'));
}

function closeWorkModal() {
    const modal = document.querySelector('#work-modal');
    if (!modal) {
        return;
    }
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function setupWorkModal() {
    const workGrid = document.querySelector('.work-grid');
    const modal = document.querySelector('#work-modal');

    if (!workGrid || !modal) {
        return;
    }

    workGrid.addEventListener('click', event => {
        const target = event.target.closest('.work-card');
        if (!target) {
            return;
        }
        const index = Number(target.dataset.workIndex);
        const sample = workSamples[index];
        if (sample) {
            openWorkModal(sample);
        }
    });

    modal.addEventListener('click', event => {
        if (event.target.closest('[data-modal-close]')) {
            closeWorkModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            if (isFileLightboxOpen()) {
                closeFileLightbox();
                return;
            }
            if (isLightboxOpen()) {
                closeImageLightbox();
                return;
            }
            closeWorkModal();
        }
    });
}


// Dynamically populate education section
function populateEducation() {
    const educationGrid = document.querySelector('.education-grid');
    if (!educationGrid) {
        return;
    }
    educationGrid.innerHTML = '';

    education.forEach(item => {
        const educationCard = document.createElement('div');
        educationCard.className = 'education-card';
        const detailsList = item.details.length
            ? `<ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`
            : '';

        educationCard.innerHTML = `
            <h3>${item.school}</h3>
            <div class="education-meta">${item.program} | ${item.period}</div>
            <div class="education-details">
                ${detailsList}
            </div>
        `;
        educationGrid.appendChild(educationCard);
    });
}

// Dynamically populate languages section
function populateLanguages() {
    const languagesGrid = document.querySelector('.languages-grid');
    if (!languagesGrid) {
        return;
    }
    languagesGrid.innerHTML = '';

    languages.forEach(item => {
        const languageCard = document.createElement('div');
        languageCard.className = 'language-card';
        languageCard.innerHTML = `
            <h3>${item.language}</h3>
            <div class="language-level">${item.level}</div>
        `;
        languagesGrid.appendChild(languageCard);
    });
}

// Contact form handling (SMTP API)
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('#form-status');

const contactApiConfig = {
    endpoint: '/api/contact',
    redirectUrl: 'thank-you.html'
};

function setFormStatus(message, type) {
    if (!formStatus) {
        return;
    }
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
}

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            setFormStatus('Please fill in all fields.', 'error');
            return;
        }

        setFormStatus('Sending your message...', 'pending');

        try {
            const response = await fetch(contactApiConfig.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            if (!response.ok) {
                const result = await response.json().catch(() => ({}));
                const errorMessage = result.error || 'Sorry, something went wrong. Please try again later.';
                setFormStatus(errorMessage, 'error');
                return;
            }

            this.reset();
            window.location.href = contactApiConfig.redirectUrl;
        } catch (error) {
            setFormStatus('Sorry, something went wrong. Please try again later.', 'error');
        }
    });
}

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
    const animatedElements = document.querySelectorAll('.skill-card, .tool-card, .project-card, .work-card, .work-toggle-card, .education-card, .language-card, .about-text, .contact-info, .contact-form');

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
    populateWorkShowcase();
    setupWorkModal();
    populateEducation();
    populateLanguages();
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