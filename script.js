
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animation for fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log({ name, email, subject, message });
            contactForm.reset();
        });
    }
	
    // Qualification Tabs
    const tabs = document.querySelectorAll('.qualification-tab');
    const contents = document.querySelectorAll('.qualification-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all content sections
            contents.forEach(c => c.classList.remove('active'));

            // Activate the clicked tab
            tab.classList.add('active');

            // Show the related content
            const tabType = tab.getAttribute('data-tab');
            document.getElementById(`${tabType}-content`).classList.add('active');
        });
    });
    // Toggle hidden certificates
	const seeMoreBtn = document.querySelector('.see-more-btn');
const hiddenCards = document.querySelectorAll('.certificates-grid .certificate-card');

let showMore = false;

seeMoreBtn.addEventListener('click', () => {
    showMore = !showMore;

    hiddenCards.forEach((card, index) => {
        if (index >= 3) { // assuming first 3 are always visible
            if (showMore) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });

    seeMoreBtn.textContent = showMore ? "Hide Certificates" : "See More Certificates";
});


function openEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const developerEmail = "manoharpandey64706125@gmail.com"; // 

    const mailto = `mailto:${developerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    )}`;

    window.location.href = mailto;
    return false; // Prevent default form submit
}


     // Toggle hidden projects
const seeMoreProjectsBtn = document.getElementById('see-more-projects-btn');
const hiddenProjects = document.querySelectorAll('.projects-grid .project-card.hidden');

let showMoreProjects = false;

seeMoreProjectsBtn.addEventListener('click', () => {
    showMoreProjects = !showMoreProjects;

    hiddenProjects.forEach(card => {
        if (showMoreProjects) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    seeMoreProjectsBtn.textContent = showMoreProjects ? "Hide Projects" : "See More Projects";
});

