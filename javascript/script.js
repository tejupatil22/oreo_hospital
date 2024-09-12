document.addEventListener('DOMContentLoaded', (event) => {
    // Show the popup when the window is opened
    const popup = document.getElementById('popup-form');
    const closeButton = document.querySelector('.close-btn');

    popup.style.display = 'block';

    closeButton.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    // Handle form submission
    document.getElementById('info-form').onsubmit = function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert('Form submitted successfully!');
        popup.style.display = 'none'; // Hide popup after submission
    }
});

