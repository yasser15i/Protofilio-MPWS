script.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill bars when they become visible
            if (entry.target.classList.contains('skills-container')) {
                const skillBars = entry.target.querySelectorAll('.skill-per');
                skillBars.forEach(bar => {
                    const per = bar.getAttribute('per');
                    bar.style.width = per + '%';
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Add scroll class to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Form submission animation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('submitted');
    setTimeout(() => {
        form.reset();
        form.classList.remove('submitted');
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.typewriter');
    const originalText = text.textContent;
    text.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            text.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
});

// Initialize skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-per');
    skills.forEach(skill => {
        const per = skill.getAttribute('per');
        skill.style.setProperty('--width', `${per}%`);
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Theme Toggle Implementation
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Get saved theme
    let currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(icon, currentTheme);

    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(icon, currentTheme);
    });

    // Typewriter Effect
    const text = document.querySelector('.typewriter');
    if (text) {
        const strText = text.textContent;
        text.textContent = '';
        let index = 0;

        function typeWriter() {
            if (index < strText.length) {
                text.textContent += strText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('skill-per')) {
                    const per = entry.target.getAttribute('per');
                    entry.target.style.width = `${per}%`;
                }
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal, .skill-per').forEach(el => observer.observe(el));

    // Project Cards Hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Theme Icon Update
function updateThemeIcon(icon, theme) {
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Projects Display
document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.projects');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectsSection && projectCards.length > 0) {
        projectsSection.style.opacity = '1';
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
});