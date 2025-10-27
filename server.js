
// Import the Express framework for building the backend server
const express = require('express');
// Import Node.js path module for working with file and directory paths
const path = require('path');
// Import body-parser middleware to parse incoming request bodies
const bodyParser = require('body-parser');


// Create an instance of the Express application
const app = express();
// Define the port number for the server to listen on
const PORT = 3000;


// MIDDLEWARE
// Parse JSON data in incoming requests
app.use(bodyParser.json());
// Parse URL-encoded data (from forms) in incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files (HTML, CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Serve CSS files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));
// Serve image files from the 'img' directory
app.use('/img', express.static(path.join(__dirname, 'img')));


// ROUTES

// Serve the main homepage
app.get('/', (req, res) => {
    // Send the index.html file to the client
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the About page
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

// Serve the Tours page
app.get('/tours.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/tours.html'));
});

// Serve the Contact page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Serve the Booking page
app.get('/booking.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/booking.html'));
});



// Handle booking form submissions from the frontend
app.post('/submit-booking', (req, res) => {
    // Extract booking data sent from the client
    const bookingData = req.body;
    // Log the booking data to the server console (for debugging)
    console.log('Booking Data:', bookingData);
    // Respond to the client with a success message
    res.status(200).send({ message: 'Booking received!' });
});

// Handle contact form submissions from the frontend
app.post('/submit-contact', (req, res) => {
    // Extract contact data sent from the client
    const contactData = req.body;
    // Log the contact data to the server console (for debugging)
    console.log('Contact Data:', contactData);
    // Respond to the client with a success message
    res.status(200).send({ message: 'Contact form received!' });
});


// Start the server and listen for incoming requests
app.listen(PORT, () => {
    // Log a message to the console when the server is running
    console.log(`Server running on http://localhost:${PORT}`);
});
