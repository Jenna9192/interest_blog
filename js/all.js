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

document.addEventListener('DOMContentLoaded', function() {
    // Number of circles to create
    const numberOfCircles = 10; // Adjust this number as needed

    for (let i = 0; i < numberOfCircles; i++) {
        // Create a new div element for each circle
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Set random size, position, and animation duration
        const size = Math.floor(Math.random() * (200 - 30 + 1)) + 30; // Random size between 30px and 100px
        const posX = Math.random() * window.innerWidth; // Random position X
        const posY = Math.random() * document.documentElement.scrollHeight;; // Random position Y
        const duration = Math.floor(Math.random() * (15 - 8 + 1)) + 8; // Random animation duration between 8s and 15s
        
        // Apply the random styles
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.animationDuration = `${duration}s`;
        
        // Append the circle to the body
        document.body.appendChild(circle);
    }
});




