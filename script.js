/**
 * CampusVibe - Global Script
 * Handles Theme Toggle, Navigation Drawer, Ticker, Global Search Modal, and Shared Utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNavigation();
  initAnnouncementTicker();
  initGlobalSearch();
  initStatsCounters();
  highlightActiveNavLink();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle & LocalStorage Persistence
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('campusvibe_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButtonIcons(currentTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('campusvibe_theme', newTheme);
      updateThemeButtonIcons(newTheme);
    });
  });
}

function updateThemeButtonIcons(theme) {
  const themeIcons = document.querySelectorAll('.theme-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.textContent = '☀️';
      icon.setAttribute('title', 'Switch to Light Mode');
      icon.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      icon.textContent = '🌙';
      icon.setAttribute('title', 'Switch to Dark Mode');
      icon.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Hamburger Navigation
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (!hamburgerBtn || !mobileDrawer) return;

  function toggleMenu() {
    const isOpen = mobileDrawer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      toggleMenu();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      toggleMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* --------------------------------------------------------------------------
   3. Announcement Ticker
   -------------------------------------------------------------------------- */
function initAnnouncementTicker() {
  const tickerEl = document.getElementById('announcement-ticker');
  if (!tickerEl || typeof CampusDataStore === 'undefined') return;

  const announcements = CampusDataStore.getAnnouncements();
  if (!announcements || announcements.length === 0) return;

  let currentIndex = 0;

  function renderTickerItem(index) {
    const item = announcements[index];
    tickerEl.innerHTML = `
      <span class="ticker-item">
        ${item.text}
      </span>
    `;
  }

  renderTickerItem(0);

  // Cycle announcements every 4 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % announcements.length;
    renderTickerItem(currentIndex);
  }, 4000);
}

/* --------------------------------------------------------------------------
   4. Global Search Modal (Ctrl+K or Search Icon)
   -------------------------------------------------------------------------- */
function initGlobalSearch() {
  const searchTriggers = document.querySelectorAll('.search-modal-trigger');
  const searchModal = document.getElementById('global-search-modal');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');
  const searchClose = document.getElementById('global-search-close');

  if (!searchModal || !searchInput || !searchResults) return;

  function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 50);
    renderSearchResults('');
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Shortcut Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchModal.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Search input change
  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    if (typeof CampusDataStore === 'undefined') return;
    const allEvents = CampusDataStore.getAllEvents();
    
    let matches = allEvents;
    if (query) {
      matches = allEvents.filter(event => 
        event.name.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.shortDescription.toLowerCase().includes(query)
      );
    }

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <p>No events found for "<strong>${query}</strong>"</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.slice(0, 5).map(event => `
      <a href="./event-details.html?id=${event.id}" class="search-result-row">
        <div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 1rem;">${event.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">📅 ${event.date} &nbsp;•&nbsp; 📍 ${event.venue}</div>
        </div>
        <span class="badge badge-${event.category.toLowerCase()}">${event.category}</span>
      </a>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   5. Highlight Active Navigation Link (Handles GitHub Pages subpaths)
   -------------------------------------------------------------------------- */
function highlightActiveNavLink() {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  let currentFile = pathSegments.pop() || 'index.html';
  if (!currentFile.endsWith('.html')) {
    currentFile = 'index.html';
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkFile = href ? href.replace(/^\.\//, '').split('?')[0] : '';
    if (linkFile === currentFile || (currentFile === 'index.html' && (linkFile === 'index.html' || linkFile === ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   6. Animated Statistics Counters
   -------------------------------------------------------------------------- */
function initStatsCounters() {
  const counterElements = document.querySelectorAll('.stat-count');
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersectObserver && entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        if (target) {
          animateCounter(entry.target, target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + '+';
        clearInterval(timer);
      } else {
        el.textContent = current + '+';
      }
    }, 30);
  }
}
