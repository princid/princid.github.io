	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
        menu.classList.toggle('bx-x');
    }
    // window.onscroll = () => {
    //     if (navbar.classList.contains('active')) {
    //         navbar.classList.remove('active');
    //         menu.classList.remove('bx-x');
    //     }
    // }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    const downloadButton = document.getElementById("download-button");
    downloadButton.addEventListener("click", function () {
      // Add your desired tracking or logging code here
    });

    // Enhanced Skills and Experience Animations
    document.addEventListener('DOMContentLoaded', function() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('skills-container')) {
                        animateSkillsSection(entry.target);
                    } else if (entry.target.classList.contains('timeline-container')) {
                        animateTimelineSection(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe sections
        const skillsContainer = document.querySelector('.skills-container');
        const timelineContainer = document.querySelector('.timeline-container');
        
        if (skillsContainer) observer.observe(skillsContainer);
        if (timelineContainer) observer.observe(timelineContainer);

        // Animate Skills Section
        function animateSkillsSection(container) {
            // Trigger container animation
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';

            // Animate skill cards with stagger
            const skillCards = container.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    // Animate progress bars within this card
                    animateProgressBars(card);
                }, index * 150);
            });
        }

        // Animate Timeline Section
        function animateTimelineSection(container) {
            const timelineItems = container.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }

        // Animate Progress Bars
        function animateProgressBars(card) {
            const progressBars = card.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                }, index * 100 + 300);
            });
        }

        // Add hover effects for skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add gentle pulse animation to icon
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });

            card.addEventListener('mouseleave', function() {
                // Reset icon transform
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        // Add hover effects for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                // Add gentle lift animation
                const details = this.querySelector('.experience-details');
                const logo = this.querySelector('.company-logo');
                
                if (details) {
                    details.style.transform = 'translateY(-5px)';
                }
                if (logo) {
                    logo.style.transform = 'scale(1.1)';
                }
            });

            item.addEventListener('mouseleave', function() {
                // Reset transforms
                const details = this.querySelector('.experience-details');
                const logo = this.querySelector('.company-logo');
                
                if (details) {
                    details.style.transform = 'translateY(0)';
                }
                if (logo) {
                    logo.style.transform = 'scale(1)';
                }
            });
        });

        // Initialize sections that are already in view
        if (skillsContainer && isElementInViewport(skillsContainer)) {
            animateSkillsSection(skillsContainer);
        }
        if (timelineContainer && isElementInViewport(timelineContainer)) {
            animateTimelineSection(timelineContainer);
        }

        // Helper function to check if element is in viewport
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    });