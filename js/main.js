// Theme Management - Light theme as default
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-icon');
  
  // Default to light theme instead of dark
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the theme immediately
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Show the icon for what you'll GET when you click
  // If currently light → show moon (you'll get dark theme)
  // If currently dark → show light bulb (you'll get light theme)
  themeToggle.textContent = savedTheme === 'dark' ? '💡' : '🌙';
  
  // Theme toggle function
  window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update icon to show what you'll get NEXT
    themeToggle.textContent = newTheme === 'dark' ? '💡' : '🌙';
  };

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, observerOptions);

  // Observe all slide-in elements
  document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
  });

  // Animate progress bars when visible
  const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressFills = entry.target.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
          const width = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.width = width;
          }, 300);
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card').forEach(card => {
    if (card.querySelector('.progress-fill')) {
      progressObserver.observe(card);
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});