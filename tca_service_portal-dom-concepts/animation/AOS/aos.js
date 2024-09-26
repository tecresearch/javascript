// Load the AOS library and initialize it with desired settings
const script = document.createElement('script');
script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
script.onload = function() {
    AOS.init({
        offset: 10,       // Offset value for animation triggers
        duration: 2000    // Duration of the animation
    });
};
document.head.appendChild(script);
// This script dynamically loads AOS and initializes it after it has loaded
