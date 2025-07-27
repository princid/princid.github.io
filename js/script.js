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
                    } else if (entry.target.classList.contains('education-timeline-container')) {
                        animateEducationTimelineSection(entry.target);
                    } else if (entry.target.classList.contains('projects-container')) {
                        animateProjectsSection(entry.target);
                    } else if (entry.target.classList.contains('experience')) {
                        animateExperienceSection(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe sections
        const skillsContainer = document.querySelector('.skills-container');
        const timelineContainer = document.querySelector('.timeline-container');
        const educationTimelineContainer = document.querySelector('.education-timeline-container');
        const projectsContainer = document.querySelector('.projects-container');
        const experienceSection = document.querySelector('.experience');
        
        if (skillsContainer) observer.observe(skillsContainer);
        if (timelineContainer) observer.observe(timelineContainer);
        if (educationTimelineContainer) observer.observe(educationTimelineContainer);
        if (projectsContainer) observer.observe(projectsContainer);
        if (experienceSection) observer.observe(experienceSection);

        // Animate Experience Section Background
        function animateExperienceSection(section) {
            section.classList.add('animate');
        }

        // Animate Skills Section
        function animateSkillsSection(container) {
            // Animate the section background
            const skillsSection = document.querySelector('.skills');
            if (skillsSection) {
                skillsSection.classList.add('animate');
                
                // Animate the heading
                const heading = skillsSection.querySelector('.heading');
                if (heading) {
                    animateHeading(heading);
                }
            }
            
            // Trigger container animation
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';

            // Animate skill cards with stagger
            const skillCards = container.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    // Animate the category badge
                    const badge = card.querySelector('.category-badge');
                    if (badge) {
                        setTimeout(() => {
                            badge.style.transform = 'translateY(-3px)';
                            badge.style.opacity = '1';
                            
                            setTimeout(() => {
                                badge.style.transform = 'translateY(0)';
                                badge.style.opacity = '0.7';
                            }, 800);
                        }, 300);
                    }
                    
                    // Animate the icon with a bounce effect
                    const icon = card.querySelector('.skill-icon');
                    if (icon) {
                        setTimeout(() => {
                            icon.style.transform = 'scale(1.1) rotate(5deg)';
                            
                            setTimeout(() => {
                                icon.style.transform = 'scale(1) rotate(0deg)';
                            }, 400);
                        }, 200);
                    }
                    
                    // Animate skill items with cascade effect
                    const skillItems = card.querySelectorAll('.skill-item');
                    skillItems.forEach((item, itemIndex) => {
                        // Set custom property for staggered animation
                        item.style.setProperty('--index', itemIndex + 1);
                        
                        // Add a subtle flash effect to each item as it appears
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                            item.style.background = 'rgba(17, 181, 178, 0.08)';
                            
                            setTimeout(() => {
                                item.style.background = 'rgba(17, 181, 178, 0.03)';
                            }, 300);
                        }, 300 + (itemIndex * 80));
                    });
                    
                    // Animate progress bars with slight delay for better visual effect
                    setTimeout(() => {
                        animateProgressBars(card);
                    }, 600);
                    
                }, index * 150);
            });
        }

        // Enhanced Timeline Section Animation
        function animateTimelineSection(container) {
            const timelineItems = container.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                    
                    // Add subtle animation to achievement items
                    const achievementItems = item.querySelectorAll('.achievement-item');
                    achievementItems.forEach((achievement, achIndex) => {
                        setTimeout(() => {
                            achievement.style.opacity = '1';
                            achievement.style.transform = 'translateX(0)';
                        }, achIndex * 100 + 300);
                    });
                }, index * 200);
            });
        }

        // Enhanced Education Timeline Section Animation
        function animateEducationTimelineSection(container) {
            const educationItems = container.querySelectorAll('.education-item');
            educationItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                    
                    // Add subtle animation to info items
                    const infoItems = item.querySelectorAll('.info-item');
                    infoItems.forEach((info, infoIndex) => {
                        setTimeout(() => {
                            info.style.opacity = '1';
                            info.style.transform = 'translateY(0)';
                        }, infoIndex * 100 + 300);
                    });
                }, index * 200);
            });
        }

        // Enhanced Projects Section Animation
        function animateProjectsSection(container) {
            const projectCards = container.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    // Add subtle animation to tech tags
                    const techTags = card.querySelectorAll('.tech-tag');
                    techTags.forEach((tag, tagIndex) => {
                        setTimeout(() => {
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, tagIndex * 50 + 300);
                    });
                }, index * 150);
            });
        }

        // Animate Headings
        function animateHeading(element) {
            if (element) {
                const h2 = element.querySelector('h2');
                const span = element.querySelector('span');
                
                if (h2) {
                    h2.style.opacity = '0';
                    h2.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        h2.style.transition = 'all 0.5s ease';
                        h2.style.opacity = '1';
                        h2.style.transform = 'translateY(0)';
                    }, 100);
                }
                
                if (span) {
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        span.style.transition = 'all 0.5s ease';
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    }, 300);
                }
            }
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

        // Add hover and mouse-follow effects for skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            // Mouse-follow spotlight effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                this.style.setProperty('--x', `${x}%`);
                this.style.setProperty('--y', `${y}%`);
            });
            
            card.addEventListener('mouseenter', function() {
                // Add gentle pulse animation to icon
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.05) rotate(5deg)';
                }
                
                // Animate the icon container decorative elements
                const iconContainer = this.querySelector('.skill-icon-container');
                if (iconContainer) {
                    iconContainer.style.transform = 'translateY(-2px)';
                }
                
                // Animate category badge
                const badge = this.querySelector('.category-badge');
                if (badge) {
                    badge.style.transform = 'translateY(-3px)';
                    badge.style.opacity = '1';
                }
                
                // Animate skill items on hover with staggered effect
                const skillItems = this.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transform = 'translateX(3px)';
                        item.style.background = 'rgba(17, 181, 178, 0.08)';
                        item.style.borderLeftColor = 'var(--main-color)';
                    }, index * 30);
                });
            });

            card.addEventListener('mouseleave', function() {
                // Reset icon transform
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
                
                // Reset icon container
                const iconContainer = this.querySelector('.skill-icon-container');
                if (iconContainer) {
                    iconContainer.style.transform = 'translateY(0)';
                }
                
                // Reset category badge
                const badge = this.querySelector('.category-badge');
                if (badge) {
                    badge.style.transform = 'translateY(0)';
                    badge.style.opacity = '0.7';
                }
                
                // Reset skill items
                const skillItems = this.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    item.style.transform = 'translateX(0)';
                    item.style.background = 'rgba(17, 181, 178, 0.03)';
                    item.style.borderLeftColor = 'transparent';
                });
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
        if (educationTimelineContainer && isElementInViewport(educationTimelineContainer)) {
            animateEducationTimelineSection(educationTimelineContainer);
        }
        if (projectsContainer && isElementInViewport(projectsContainer)) {
            animateProjectsSection(projectsContainer);
        }
        if (experienceSection && isElementInViewport(experienceSection)) {
            animateExperienceSection(experienceSection);
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