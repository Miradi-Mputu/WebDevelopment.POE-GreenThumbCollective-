// --- Gallery Lightbox Functionality ---
function setupLightbox() {
    // Get the modal, image, and caption elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("modal-close")[0];

    // Get all images in the gallery layout
    const images = document.querySelectorAll(".picture-layout img");

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            // Use the image's alt text as the caption
            captionText.innerHTML = this.alt || "Gallery Image";
        }
    });

    // Close the modal when the close button (x) is clicked
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // Close the modal when the user clicks anywhere outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// --- Contact Form Validation Functionality ---
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return; // Exit if the form doesn't exist on the page

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        let isValid = true;

        // Function to validate an input field
        const validateInput = (input, errorMessageElement, validationFn) => {
            const messageElement = document.getElementById(errorMessageElement);
            if (validationFn(input.value)) {
                messageElement.style.display = 'none';
            } else {
                messageElement.style.display = 'block';
                isValid = false;
            }
        };

        // 1. Name Validation (Required)
        const nameInput = document.getElementById('name');
        validateInput(nameInput, 'nameError', (value) => value.trim() !== '');

        // 2. Email Validation (Required and Format)
        const emailInput = document.getElementById('email');
        validateInput(emailInput, 'emailError', (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return value.trim() !== '' && emailRegex.test(value);
        });

        // 3. Message Validation (Required)
        const messageInput = document.getElementById('message');
        validateInput(messageInput, 'messageError', (value) => value.trim() !== '');

        if (isValid) {
            // If all fields are valid, you can proceed with form submission
            // For a real-world scenario, you'd use fetch() or an AJAX call here.
            alert('Form submitted successfully! We will get back to you soon.');
            form.reset(); // Clear the form
        }
    });
}

// Run all setup functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupLightbox();
    setupFormValidation();
});