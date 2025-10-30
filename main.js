document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Contact Form Submission (client-side simulation)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission

            // In a real application, you would send this data to a backend server
            // For now, we'll just simulate a successful submission.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simulate API call delay
            formStatus.textContent = 'Sending message...';
            formStatus.style.color = '#007bff';

            setTimeout(() => {
                formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
                formStatus.style.color = 'green';
                contactForm.reset(); // Clear the form
            }, 2000); // 2 seconds delay

            // Optional: You could add more robust client-side validation here
        });
    }
});