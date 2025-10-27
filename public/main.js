

// main.js - Adds interactivity to Natours frontend

// 1. Navbar toggle for mobile navigation
// Select the <nav> element and the button with class 'nav__toggle'
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav__toggle');
// If the nav toggle button exists, add a click event listener
if (navToggle) {
    navToggle.addEventListener('click', () => {
        // Toggle the 'nav--open' class to show/hide the mobile menu
        nav.classList.toggle('nav--open');
    });
}


// 2. Smooth scrolling for all anchor links that start with '#'
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default jump behavior
        e.preventDefault();
        // Get the target section by href
        const target = document.querySelector(this.getAttribute('href'));
        // If the target exists, scroll to it smoothly
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. Booking form AJAX submission
// Get the booking form by its ID
const bookingForm = document.getElementById('bookingForm');
// If the booking form exists, add submit event listener
if (bookingForm) {
    bookingForm.addEventListener('submit', async function (e) {
        // Prevent default form submission (page reload)
        e.preventDefault();
        // Collect form data into an object
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());
        // Send POST request to /submit-booking endpoint with form data as JSON
        const res = await fetch('/submit-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        // Parse the server response
        const result = await res.json();
        // Display the response message in the bookingMsg div
        document.getElementById('bookingMsg').textContent = result.message;
    });
}

// 4. Contact form AJAX submission
// Get the contact form by its ID
const contactForm = document.getElementById('contactForm');
// If the contact form exists, add submit event listener
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        // Prevent default form submission (page reload)
        e.preventDefault();
        // Collect form data into an object
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        // Send POST request to /submit-contact endpoint with form data as JSON
        const res = await fetch('/submit-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        // Parse the server response
        const result = await res.json();
        // Display the response message in the contactMsg div
        document.getElementById('contactMsg').textContent = result.message;
    });
}

// 5. Card flip animation (for interactive pricing cards)
// Select all elements with class 'card'
const cards = document.querySelectorAll('.card');
// Add click event to each card to toggle the 'is-flipped' class
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

// 6. Popup example (for modal popups)
// Select the popup button and popup modal
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');
// If both popup button and popup exist, add event listeners
if (popupBtn && popup) {
    // Open popup when button is clicked
    popupBtn.addEventListener('click', () => {
        popup.classList.add('popup--open');
    });
    // Close popup when background is clicked
    popup.addEventListener('click', e => {
        if (e.target === popup) popup.classList.remove('popup--open');
    });
}
