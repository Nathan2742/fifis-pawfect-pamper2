// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    let currentUrl = window.location.href;

    // Get all nav links
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each nav link
    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === currentUrl) {
            // Add the active class to the link
            link.classList.add('active');
        }
    });
});
