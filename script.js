/* JavaScript for the website's interactivity */
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Add an event listener to handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting to the server

        // Extract form values (optional, if you want to log them)
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Show a confirmation message to the user
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = `Thank you for contacting us, ${firstName} ${lastName}. We will get back to you at ${email}.`;

        // Optionally reset the form after submission
        form.reset();
    });
});