/**
 * CampusVibe - Events Discovery Page Logic
 * Handles dynamic event rendering, category filter pills, real-time search, and URL parameter syncing.
 */

document.addEventListener('DOMContentLoaded', () => {
  initEventsPage();
});

function initEventsPage() {
  const eventsContainer = document.getElementById('events-container');
  const searchInput = document.getElementById('events-search-input');
  const filterButtons = document.querySelectorAll('.category-filter-btn');
  const resultsCountEl = document.getElementById('events-results-count');
  const emptyStateEl = document.getElementById('events-empty-state');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (!eventsContainer || typeof CampusDataStore === 'undefined') return;

  const allEvents = CampusDataStore.getAllEvents();
  
  // Read URL query parameters (e.g., ?category=Technical or ?search=hackathon)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'All';
  let searchQuery = (urlParams.get('search') || '').trim().toLowerCase();

  if (searchInput && searchQuery) {
    searchInput.value = searchQuery;
  }

  // Set active button state
  updateActiveFilterButton(activeCategory);

  // Initial render
  filterAndRenderEvents();

  // Search input event listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterAndRenderEvents();
    });
  }

  // Category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      updateActiveFilterButton(activeCategory);
      filterAndRenderEvents();
      
      // Update URL query without page reload
      const newUrl = new URL(window.location);
      if (activeCategory === 'All') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', activeCategory);
      }
      window.history.replaceState({}, '', newUrl);
    });
  });

  // Reset filters button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'All';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      updateActiveFilterButton('All');
      filterAndRenderEvents();

      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('category');
      newUrl.searchParams.delete('search');
      window.history.replaceState({}, '', newUrl);
    });
  }

  function updateActiveFilterButton(category) {
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-category').toLowerCase() === category.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function filterAndRenderEvents() {
    let filtered = allEvents;

    // Filter by Category
    if (activeCategory && activeCategory.toLowerCase() !== 'all') {
      filtered = filtered.filter(e => e.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Search Query
    if (searchQuery) {
      filtered = filtered.filter(e => 
        e.name.toLowerCase().includes(searchQuery) ||
        e.shortDescription.toLowerCase().includes(searchQuery) ||
        e.venue.toLowerCase().includes(searchQuery) ||
        e.category.toLowerCase().includes(searchQuery) ||
        (e.club && e.club.toLowerCase().includes(searchQuery))
      );
    }

    // Update results counter
    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${filtered.length} of ${allEvents.length} events`;
    }

    // Render cards or show empty state
    if (filtered.length === 0) {
      eventsContainer.style.display = 'none';
      if (emptyStateEl) emptyStateEl.style.display = 'block';
    } else {
      eventsContainer.style.display = 'grid';
      if (emptyStateEl) emptyStateEl.style.display = 'none';
      renderEventCards(filtered);
    }
  }

  function renderEventCards(eventsList) {
    eventsContainer.innerHTML = eventsList.map(event => `
      <article class="event-card">
        <div class="event-card-media">
          <img src="${event.image}" alt="${event.name}" loading="lazy" />
          <span class="badge badge-${event.category.toLowerCase()} event-card-category">${event.category}</span>
          <span class="status-badge ${event.statusClass} event-card-status">${event.status}</span>
        </div>
        <div class="event-card-body">
          <h3 class="event-card-title">${event.name}</h3>
          <p class="event-card-desc">${event.shortDescription}</p>
          
          <div class="event-card-meta">
            <div class="meta-row">
              <span class="meta-row-icon">📅</span>
              <span><strong>${event.date}</strong> &bull; ${event.time}</span>
            </div>
            <div class="meta-row">
              <span class="meta-row-icon">📍</span>
              <span>${event.venue}</span>
            </div>
          </div>

          <div class="event-card-footer">
            <span style="font-size: 0.85rem; color: var(--text-muted);">👥 ${event.teamSize}</span>
            <a href="./event-details.html?id=${event.id}" class="btn btn-outline btn-sm">
              View Details &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }
}
