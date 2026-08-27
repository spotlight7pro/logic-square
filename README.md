# CampusVibe — College Event Management & Discovery Platform

> *"Discover. Participate. Experience."*

**CampusVibe** is a modern, responsive, and interactive frontend college event discovery and management platform. Designed specifically for university students, organizers, and clubs, CampusVibe unifies campus hackathons, cultural festivals, sports tournaments, technical symposiums, and hands-on workshops into one central digital portal.

---

## 🌟 Key Features

- 🌓 **Dynamic Dark / Light Mode**: Seamless theme toggle with user preference persistence via `localStorage` and system theme detection.
- ⚡ **Centralized Event Catalog**: 10+ detailed campus events categorized under Technical, Cultural, Sports, Workshops, and Competitions.
- 🔍 **Real-Time Live Search & Filtering**: Instant keyword search across event titles, categories, venues, and hosts with reactive filter pills.
- ⏳ **Live Countdown Timer**: Real-time ticker counting down days, hours, minutes, and seconds to event commencement.
- 📝 **Smart Registration System**: Client-side validation for solo and team registrations with dynamic member fields, instant feedback, and printable receipt generation.
- 👥 **Student Clubs Directory**: Comprehensive profiles of student societies with meeting schedules, leadership details, and direct event filter links.
- 🖼️ **Interactive Campus Gallery**: Categorized photo showcase with modal Lightbox zoom, dark backdrop overlay, and keyboard navigation (`Esc`).
- 📱 **100% Fully Responsive UI**: Mobile-friendly navigation with an animated hamburger drawer, CSS Grid and Flexbox layouts, and zero horizontal scrolling.
- ♿ **Accessible & Semantic**: Built with semantic HTML5 tags, ARIA labels, keyboard focus states, and high-contrast color palettes.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`).
- **CSS3**:
  - CSS Custom Properties (CSS variables) for full-spectrum theming.
  - CSS Flexbox & CSS Grid for fluid layouts.
  - Backdrop filter glassmorphism & subtle gradient lighting.
  - CSS Keyframe animations and smooth transitions.
  - Responsive CSS Media Queries (`@media (max-width: 1024px)`, `@media (max-width: 768px)`).
- **Vanilla JavaScript (ES6+)**:
  - Modular script architecture (`script.js`, `events.js`, `event-details.js`, `registration.js`, `gallery.js`, `data.js`).
  - DOM manipulation and dynamic template generation.
  - `localStorage` APIs for persisting dark mode state and event registration receipts.
  - Keyboard event listeners (`Ctrl+K` for global search, `Esc` for modals).

---

## 📁 Folder Structure

```
college-events/
│
├── index.html              # Homepage (Hero, Featured Spotlight, Upcoming 6 Events, Why Participate, Ticker, CTA)
├── events.html             # Events Discovery (Category Pills, Search Bar, Dynamic 10+ Event Cards, Status Badges)
├── event-details.html      # Reusable Event Details View (Live Countdown, Prizes, Rules, Schedule, Eligibility)
├── register.html           # Dedicated Registration Form (Form Validation, Dynamic Team Fields, LocalStorage)
├── clubs.html              # Student Clubs Showcase (6 Societies, Meeting Schedules, Event Counts, Quick Links)
├── gallery.html            # Campus Photo Gallery (Category Filter Grid, Lightbox Modal with Backdrop)
├── about.html              # About CampusVibe (Mission, Animated Statistics, Core Features, FAQ Accordion)
│
├── css/
│   └── style.css           # Master stylesheet (CSS variables, Dark mode, Components, Animations, Responsive rules)
│
├── js/
│   ├── data.js             # Centralized dataset of events, clubs, gallery, announcements, & LocalStorage helpers
│   ├── script.js           # Global navbar, mobile hamburger drawer, theme toggle, search modal, ticker
│   ├── events.js           # Event catalog search, category filtering, and card rendering
│   ├── event-details.js    # Single event detail loader, real-time live countdown timer, and schedule
│   ├── registration.js     # Form validation, dynamic team inputs, receipt generation, and LocalStorage
│   └── gallery.js          # Gallery category filter and interactive Lightbox modal
│
├── images/                 # Optimized graphic assets and visual placeholders
│
└── README.md               # Complete project documentation and guide
```

---

## 🚀 How to Run the Project

1. **Clone or Download** the project folder to your local machine.
2. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave):
   - Simply double-click `index.html`, OR
   - Drag and drop `index.html` into your browser window.
3. *(Optional)* If using Visual Studio Code:
   - Install the **Live Server** extension.
   - Right-click `index.html` and select **"Open with Live Server"**.
4. *(Optional)* If using Python via terminal:
   ```bash
   cd college-events
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🔮 Future Improvements

While this version is a polished frontend client prototype, future iterations can introduce:

1. **Backend Integration**: RESTful or GraphQL APIs powered by Node.js/Express, Python (FastAPI/Django), or Go.
2. **Database Persistence**: Persistent cloud database (PostgreSQL, MongoDB, or Supabase) replacing `localStorage`.
3. **Student & Faculty Authentication**: Single Sign-On (SSO) with university student email accounts, Google OAuth, and JWT session handling.
4. **Admin / Organizer Dashboard**: Role-based access for club presidents and event coordinators to create, approve, and edit campus events.
5. **QR Code Digital Event Tickets**: Automated generation of scannable QR ticket passes for on-ground student check-ins and attendance tracking.
6. **Automated Email / SMS Notifications**: Real-time RSVP confirmation emails, calendar invite attachments (.ics), and SMS deadline reminders.
7. **Interactive Campus Map**: Mapbox / Leaflet integration pinpointing event venues, seminar halls, and parking spots on campus.

---

## 📄 License & Attribution

Designed and developed for **CampusVibe College Events Platform**. Fictional demonstration project for modern frontend development.
