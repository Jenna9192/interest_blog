document.addEventListener('DOMContentLoaded', function() {
    const locationButtons = document.querySelectorAll('.location-btn');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            locationButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add 'selected' class to the clicked button
            this.classList.add('selected');
            
            const location = this.getAttribute('data-location');
            const travelImages = document.querySelectorAll('.travel-img');
            
            // Filter the images based on the clicked location
            travelImages.forEach(image => {
                if (location === "All") {
                    image.style.display = 'block';
                } else if (image.getAttribute('data-location') === location) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});
