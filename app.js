const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // To handle form data

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve index.html (home page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the contact.html (contact page)
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// POST route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, phone, email, message } = req.body;

    console.log(`Form Data: First Name: ${firstName}, Last Name: ${lastName}, Phone: ${phone}, Email: ${email}, Message: ${message}`);

    // Send back a final confirmation
    res.send(`Thank you, ${firstName} ${lastName}. Your message has been received.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});