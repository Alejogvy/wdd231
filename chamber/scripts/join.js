// Display copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();

document.addEventListener('DOMContentLoaded', () => {
    // Set current timestamp
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.close-modal');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('visible');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').classList.remove('visible');
        });
    });

    // Close modal on outside click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Map form fields to their corresponding IDs in the page
    const fields = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: 'phone',
        businessName: 'businessName',
        timestamp: 'timestamp'
    };

    // Populate the fields with the data from the URL
    for (const [key, id] of Object.entries(fields)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = urlParams.get(key) || 'Not provided';
        }
    }
});
