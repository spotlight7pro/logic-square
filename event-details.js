/**
 * CampusVibe - Event Details Logic
 * Handles dynamic content population, live countdown timer, and registration link synchronization.
 */

document.addEventListener('DOMContentLoaded', () => {
  initEventDetailsPage();
});

function initEventDetailsPage() {
  if (typeof CampusDataStore === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id') || 'hackathon-2026';
  const event = CampusDataStore.getEventById(eventId) || CampusDataStore.getAllEvents()[0];

  if (!event) return;

  // Set Page Title
  document.title = `${event.name} | CampusVibe`;

  // Populate Header & Badges
  const breadcrumbEl = document.getElementById('details-breadcrumb-current');
  const titleEl = document.getElementById('details-event-title');
  const categoryBadgeEl = document.getElementById('details-category-badge');
  const statusBadgeEl = document.getElementById('details-status-badge');
  const clubBadgeEl = document.getElementById('details-club-badge');
  const heroImageEl = document.getElementById('details-hero-image');

  if (breadcrumbEl) breadcrumbEl.textContent = event.name;
  if (titleEl) titleEl.textContent = event.name;
  if (categoryBadgeEl) {
    categoryBadgeEl.textContent = event.category;
    categoryBadgeEl.className = `badge badge-${event.category.toLowerCase()}`;
  }
  if (statusBadgeEl) {
    statusBadgeEl.textContent = event.status;
    statusBadgeEl.className = `status-badge ${event.statusClass}`;
  }
  if (clubBadgeEl) {
    clubBadgeEl.textContent = `Hosted by ${event.club || 'CampusVibe'}`;
  }
  if (heroImageEl) {
    heroImageEl.src = event.image;
    heroImageEl.alt = event.name;
  }

  // Populate Sidebar Quick Facts
  const dateEl = document.getElementById('details-date');
  const timeEl = document.getElementById('details-time');
  const venueEl = document.getElementById('details-venue');
  const teamSizeEl = document.getElementById('details-teamsize');
  const deadlineEl = document.getElementById('details-deadline');
  const registerBtn = document.getElementById('details-register-btn');

  if (dateEl) dateEl.textContent = event.date;
  if (timeEl) timeEl.textContent = event.time;
  if (venueEl) venueEl.textContent = event.venue;
  if (teamSizeEl) teamSizeEl.textContent = event.teamSize;
  if (deadlineEl) deadlineEl.textContent = event.registrationDeadline;

  if (registerBtn) {
    if (event.status === 'Registration Closed') {
      registerBtn.textContent = 'Registration Closed';
      registerBtn.classList.add('disabled');
      registerBtn.style.pointerEvents = 'none';
      registerBtn.style.opacity = '0.6';
      registerBtn.href = '#';
    } else {
      registerBtn.href = `./register.html?event=${event.id}`;
    }
  }

  // Populate About Description
  const descEl = document.getElementById('details-full-description');
  if (descEl) {
    descEl.textContent = event.fullDescription || event.shortDescription;
  }

  // Populate Eligibility
  const eligibilityListEl = document.getElementById('details-eligibility-list');
  if (eligibilityListEl && event.eligibility) {
    eligibilityListEl.innerHTML = event.eligibility.map(item => `<li>${item}</li>`).join('');
  }

  // Populate Prizes
  const prizesGridEl = document.getElementById('details-prizes-grid');
  if (prizesGridEl && event.prizes) {
    prizesGridEl.innerHTML = event.prizes.map(prize => `
      <div class="prize-card">
        <div class="prize-rank">${prize.rank}</div>
        <div class="prize-amount">${prize.amount}</div>
        <div class="prize-badge">${prize.badge}</div>
      </div>
    `).join('');
  }

  // Populate Rules
  const rulesListEl = document.getElementById('details-rules-list');
  if (rulesListEl && event.rules) {
    rulesListEl.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join('');
  }

  // Populate Schedule
  const scheduleBlockEl = document.getElementById('details-schedule-block');
  const timelineEl = document.getElementById('details-timeline');
  if (event.schedule && event.schedule.length > 0) {
    if (scheduleBlockEl) scheduleBlockEl.style.display = 'block';
    if (timelineEl) {
      timelineEl.innerHTML = event.schedule.map(item => `
        <div class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-title">${item.title}</div>
        </div>
      `).join('');
    }
  } else if (scheduleBlockEl) {
    scheduleBlockEl.style.display = 'none';
  }

  // Start Live Countdown Timer
  startCountdownTimer(event.isoDate || event.date);
}

/* --------------------------------------------------------------------------
   Real-Time Countdown Timer
   -------------------------------------------------------------------------- */
function startCountdownTimer(targetDateStr) {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');
  const timerHeadingEl = document.querySelector('.countdown-heading');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(targetDateStr).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      if (timerHeadingEl) timerHeadingEl.textContent = '🎉 EVENT IS LIVE / CONCLUDED';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}
