/* JavaScript for the website's interactivity */
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element and confirmation message element
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Add an event listener to handle form submission
    form.addEventListener('submit', (event) => {
        // Extract form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        
        // Basic validation to check if fields are filled
        if (!firstName || !lastName || !email) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields.');
            return;
        }

        // Show a preliminary confirmation message to the user
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = `Thank you for contacting us, ${firstName} ${lastName}. Submitting your message...`;
        
        // Allow the form to submit and send data to the server
    });
});