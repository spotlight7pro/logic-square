/**
 * CampusVibe - Event Registration Logic
 * Handles dynamic event dropdown population, dynamic team member fields,
 * real-time validation, localStorage persistence, and confirmation modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationForm();
});

function initRegistrationForm() {
  const form = document.getElementById('event-registration-form');
  const eventSelect = document.getElementById('reg-event');
  const teamSizeSelect = document.getElementById('reg-team-size');
  const teamSection = document.getElementById('dynamic-team-members');
  const teamNameInput = document.getElementById('reg-team-name');
  const successModal = document.getElementById('registration-success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOkBtn = document.getElementById('modal-ok-btn');
  const printReceiptBtn = document.getElementById('print-receipt-btn');

  if (!form || typeof CampusDataStore === 'undefined') return;

  // 1. Populate Event Dropdown
  const allEvents = CampusDataStore.getAllEvents();
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedEventId = urlParams.get('event');

  if (eventSelect) {
    eventSelect.innerHTML = '<option value="">-- Choose an Event --</option>' +
      allEvents.map(ev => {
        const isClosed = ev.status === 'Registration Closed';
        const isSelected = ev.id === preselectedEventId;
        return `<option value="${ev.id}" ${isSelected ? 'selected' : ''} ${isClosed ? 'disabled' : ''}>
          ${ev.name} (${ev.category}) ${isClosed ? '— [CLOSED]' : ''}
        </option>`;
      }).join('');
  }

  // 2. Dynamic Team Member Inputs
  if (teamSizeSelect && teamSection) {
    teamSizeSelect.addEventListener('change', (e) => {
      const size = parseInt(e.target.value, 10) || 1;
      renderTeamMemberInputs(size);
    });

    // Initial check
    const initialSize = parseInt(teamSizeSelect.value, 10) || 1;
    renderTeamMemberInputs(initialSize);
  }

  function renderTeamMemberInputs(size) {
    if (size <= 1) {
      teamSection.innerHTML = '';
      teamSection.style.display = 'none';
      if (teamNameInput) {
        teamNameInput.closest('.form-group').style.display = 'none';
        teamNameInput.required = false;
      }
    } else {
      teamSection.style.display = 'flex';
      if (teamNameInput) {
        teamNameInput.closest('.form-group').style.display = 'flex';
        teamNameInput.required = true;
      }
      
      let html = `<h4 style="font-size: 1rem; font-weight: 700; color: var(--brand-primary); margin-bottom: 0.5rem;">Team Members Information</h4>`;
      for (let i = 2; i <= size; i++) {
        html += `
          <div class="team-member-input-row">
            <div class="form-group">
              <label class="form-label">Member ${i} Full Name <span class="required-star">*</span></label>
              <input type="text" class="form-control member-name-input" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div class="form-group">
              <label class="form-label">Member ${i} College Email <span class="required-star">*</span></label>
              <input type="email" class="form-control member-email-input" placeholder="e.g. rahul@campus.edu" required />
            </div>
          </div>
        `;
      }
      teamSection.innerHTML = html;
    }
  }

  // 3. Real-time Field Validation on Blur
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });
  });

  function validateField(field) {
    const val = field.value.trim();
    let isValid = true;
    let errorMsg = '';

    if (field.required && !val) {
      isValid = false;
      errorMsg = 'This field is required.';
    } else if (field.type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        isValid = false;
        errorMsg = 'Please enter a valid email address.';
      }
    } else if (field.id === 'reg-phone' && val) {
      const phoneDigits = val.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 13) {
        isValid = false;
        errorMsg = 'Please enter a valid 10-digit phone number.';
      }
    } else if (field.id === 'reg-name' && val && val.length < 2) {
      isValid = false;
      errorMsg = 'Name must be at least 2 characters.';
    }

    const errorContainer = field.parentElement.querySelector('.form-error-msg');
    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      if (errorContainer) errorContainer.style.display = 'none';
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      if (errorContainer) {
        errorContainer.textContent = errorMsg;
        errorContainer.style.display = 'block';
      }
    }

    return isValid;
  }

  // 4. Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    const requiredInputs = form.querySelectorAll('input[required], select[required]');
    
    requiredInputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    // Check dynamic team member fields if visible
    const memberNameInputs = form.querySelectorAll('.member-name-input');
    const memberEmailInputs = form.querySelectorAll('.member-email-input');
    const teamMembersList = [];

    memberNameInputs.forEach((nameInput, idx) => {
      const emailInput = memberEmailInputs[idx];
      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        isFormValid = false;
        nameInput.classList.add('is-invalid');
        emailInput.classList.add('is-invalid');
      } else {
        teamMembersList.push({
          name: nameInput.value.trim(),
          email: emailInput.value.trim()
        });
      }
    });

    if (!isFormValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Collect Registration Data
    const selectedEvent = CampusDataStore.getEventById(eventSelect.value);
    const registrationRecord = {
      eventName: selectedEvent ? selectedEvent.name : eventSelect.value,
      eventId: eventSelect.value,
      eventDate: selectedEvent ? selectedEvent.date : 'TBA',
      eventVenue: selectedEvent ? selectedEvent.venue : 'Campus',
      leadName: document.getElementById('reg-name').value.trim(),
      email: document.getElementById('reg-email').value.trim(),
      phone: document.getElementById('reg-phone').value.trim(),
      department: document.getElementById('reg-dept').value,
      year: document.getElementById('reg-year').value,
      teamSize: teamSizeSelect.value,
      teamName: teamNameInput && teamSizeSelect.value > 1 ? teamNameInput.value.trim() : 'N/A',
      teamMembers: teamMembersList
    };

    // Save into LocalStorage
    const savedEntry = CampusDataStore.saveRegistration(registrationRecord);

    // Show Confirmation Modal
    showSuccessReceipt(savedEntry || registrationRecord);
    form.reset();
    renderTeamMemberInputs(1);
    
    // Clear validation classes
    form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
  });

  // 5. Success Modal Functions
  function showSuccessReceipt(record) {
    if (!successModal) return;

    document.getElementById('receipt-reg-id').textContent = record.id || 'REG-' + Date.now().toString(36).toUpperCase();
    document.getElementById('receipt-event').textContent = record.eventName;
    document.getElementById('receipt-lead').textContent = record.leadName;
    document.getElementById('receipt-dept-year').textContent = `${record.department} • ${record.year}`;
    document.getElementById('receipt-venue-date').textContent = `${record.eventDate} | ${record.eventVenue}`;
    document.getElementById('receipt-team').textContent = record.teamSize > 1 ? `${record.teamName} (${record.teamSize} Members)` : 'Individual Participant';

    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!successModal) return;
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeModal();
    });
  }

  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
