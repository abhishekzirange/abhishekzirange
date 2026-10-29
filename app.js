/**
 * Abhishek Zirange — Lead AI/ML & Product Engineer Portfolio
 * Interactive Controller (Vanilla JS - Zero external dependencies)
 * Optimized for GitHub Pages Free Static Hosting
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Sticky & Scroll Indicator
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active nav link
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });

    // Close menu when clicking nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      });
    });
  }

  // 3. Nested Case Study Accordions
  const caseStudyHeaders = document.querySelectorAll('.case-study-header');

  caseStudyHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.case-study-item');
      if (!parentItem) return;

      const isOpen = parentItem.classList.contains('open');

      // Optional: close other accordions in the same group if needed, or allow multiple open
      // Here we allow multiple open for comparison, or toggle current
      parentItem.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', !isOpen);
    });

    // Keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // 4. Interactive Domain Filter
  const filterPills = document.querySelectorAll('.filter-pill');
  const caseStudyItems = document.querySelectorAll('.case-study-item');
  const roleCards = document.querySelectorAll('.role-card');
  const filterCounter = document.getElementById('filterCounter');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedDomain = pill.getAttribute('data-domain');
      let visibleCount = 0;

      caseStudyItems.forEach((item) => {
        const itemDomains = (item.getAttribute('data-domains') || '').split(',');
        const isMatch = selectedDomain === 'all' || itemDomains.includes(selectedDomain);

        if (isMatch) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      // Update role cards: if a role card has no visible case studies, hide it or mark it
      roleCards.forEach((role) => {
        const visibleStudiesInRole = role.querySelectorAll('.case-study-item[style*="display: block"]');
        const totalStudiesInRole = role.querySelectorAll('.case-study-item');
        if (selectedDomain === 'all' || visibleStudiesInRole.length > 0) {
          role.style.display = 'block';
        } else if (visibleStudiesInRole.length === 0 && selectedDomain !== 'all') {
          role.style.display = 'none';
        }
      });

      if (filterCounter) {
        filterCounter.textContent = `${visibleCount} Case Studies`;
      }
    });
  });

  // 5. Interactive Architecture Visualizer Tabs
  const visTabs = document.querySelectorAll('.vis-tab-btn');
  const visPanes = document.querySelectorAll('.vis-pane');

  visTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      visTabs.forEach((t) => t.classList.remove('active'));
      visPanes.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 6. One-Click Clipboard Copy with Toast
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  const copyElements = document.querySelectorAll('[data-copy]');
  copyElements.forEach((el) => {
    el.addEventListener('click', (e) => {
      const textToCopy = el.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          // Fallback
          showToast(`Copied: ${textToCopy}`);
        });
      }
    });
  });

  // 7. Contact Form Simulation / Mailto Dispatcher
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName')?.value || 'Inquirer';
      const email = document.getElementById('senderEmail')?.value || '';
      const subject = document.getElementById('senderSubject')?.value || 'Interview / Project Opportunity';
      const message = document.getElementById('senderMessage')?.value || '';

      const mailtoUrl = `mailto:abhishekzirange@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject} - from ${name}`
      )}&body=${encodeURIComponent(
        `Hi Abhishek,\n\n${message}\n\nFrom: ${name} (${email})`
      )}`;

      window.location.href = mailtoUrl;
      showToast('Opening your email client to reach Abhishek!');
    });
  }

  // 8. Metric Animated Counter on Viewport Entry
  const metricValues = document.querySelectorAll('.metric-value[data-target]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNumber = parseFloat(target.getAttribute('data-target'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();

        function animateNumber(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * targetNumber);
          target.textContent = `${prefix}${current}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(animateNumber);
          } else {
            target.textContent = `${prefix}${targetNumber}${suffix}`;
          }
        }

        requestAnimationFrame(animateNumber);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  metricValues.forEach((el) => observer.observe(el));
});
