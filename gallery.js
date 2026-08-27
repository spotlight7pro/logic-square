/**
 * CampusVibe - Gallery Page Logic
 * Handles category filtering, responsive grid rendering, and interactive Lightbox modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryPage();
});

function initGalleryPage() {
  const galleryContainer = document.getElementById('gallery-container');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close-btn');

  if (!galleryContainer || typeof CampusDataStore === 'undefined') return;

  const galleryItems = CampusDataStore.getGallery();
  let activeCategory = 'All';

  // Initial Render
  renderGallery(galleryItems);

  // Category Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');

      if (activeCategory === 'All') {
        renderGallery(galleryItems);
      } else {
        const filtered = galleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());
        renderGallery(filtered);
      }
    });
  });

  // Render Function
  function renderGallery(items) {
    galleryContainer.innerHTML = items.map(item => `
      <div class="gallery-item" data-id="${item.id}" tabindex="0" role="button" aria-label="View photo: ${item.title}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="badge badge-${item.category.toLowerCase()} gallery-item-category" style="align-self: flex-start; margin-bottom: 0.5rem;">${item.category}</span>
          <div class="gallery-item-title">${item.title}</div>
          <div style="font-size: 0.8rem; opacity: 0.8;">📅 ${item.date}</div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to gallery items
    const renderedItems = galleryContainer.querySelectorAll('.gallery-item');
    renderedItems.forEach(el => {
      const openHandler = () => {
        const id = el.getAttribute('data-id');
        const clickedItem = galleryItems.find(g => g.id === id);
        if (clickedItem) {
          openLightbox(clickedItem);
        }
      };

      el.addEventListener('click', openHandler);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

  // Lightbox Functions
  function openLightbox(item) {
    if (!lightboxModal) return;
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = `${item.category} Event • ${item.date} — ${item.description}`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation & Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
}
