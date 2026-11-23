/**
 * Rabi Jackson J - Portfolio Scripts
 * Simple, fast, and smooth
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopyEmail();
  initSmoothScroll();
  initScrollReveal();
});

// Copy Email with Toast Feedback
function initCopyEmail() {
  const email = 'rabijacksonjohn@email.com';
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');

  if (!copyButtons.length || !toast) return;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        window.location.href = 'mailto:' + email;
      });
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Subtle Scroll Reveal Animation
function initScrollReveal() {
  const elements = document.querySelectorAll('section, .skill-box, .project-card, .item-card, .cert-card');
  elements.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
