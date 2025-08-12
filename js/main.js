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

  // Projects Carousel Functionality
  const carousel = document.getElementById('projectsCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicatorsContainer = document.getElementById('carouselIndicators');
  
  if (carousel && prevBtn && nextBtn && indicatorsContainer) {
    const cards = carousel.querySelectorAll('.project-card');
    const cardWidth = 350 + 24; // card width + gap
    let currentIndex = 0;
    
    // Create indicators
    cards.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = 'carousel-indicator';
      indicator.setAttribute('aria-label', `Go to project ${index + 1}`);
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
    
    // Update active indicator
    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, cards.length - 1));
      const scrollPosition = currentIndex * cardWidth;
      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      updateIndicators();
      updateNavigationButtons();
    }
    
    // Update navigation button states
    function updateNavigationButtons() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === cards.length - 1;
    }
    
    // Navigation event listeners
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });
    
    // Touch/swipe support
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    });
    
    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });
    
    carousel.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = startX - endX;
      const deltaY = startY - endY;
      
      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < cards.length - 1) {
          // Swiped left - go to next
          goToSlide(currentIndex + 1);
        } else if (deltaX < 0 && currentIndex > 0) {
          // Swiped right - go to previous
          goToSlide(currentIndex - 1);
        }
      }
    });
    
    // Mouse drag support for desktop
    let mouseStartX = 0;
    let isMouseDragging = false;
    
    carousel.addEventListener('mousedown', (e) => {
      mouseStartX = e.clientX;
      isMouseDragging = true;
      carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
      if (!isMouseDragging) return;
      e.preventDefault();
    });
    
    carousel.addEventListener('mouseup', (e) => {
      if (!isMouseDragging) return;
      isMouseDragging = false;
      carousel.style.cursor = 'grab';
      
      const deltaX = mouseStartX - e.clientX;
      
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < cards.length - 1) {
          goToSlide(currentIndex + 1);
        } else if (deltaX < 0 && currentIndex > 0) {
          goToSlide(currentIndex - 1);
        }
      }
    });
    
    carousel.addEventListener('mouseleave', () => {
      isMouseDragging = false;
      carousel.style.cursor = 'grab';
    });
    
    // Initialize carousel
    updateIndicators();
    updateNavigationButtons();
    carousel.style.cursor = 'grab';
    
    // Handle scroll events to update current index based on scroll position
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = carousel.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
          currentIndex = newIndex;
          updateIndicators();
          updateNavigationButtons();
        }
      }, 150);
    });
  }
});