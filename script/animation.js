var images = ["images/img_1.jpg","images/img_house2.jpeg", "images/img_3.JPG", "images/img_house.jpeg"];
var i = 0;
var sliderImage = document.getElementById("sliderimage");
var personalImage = document.getElementById("personal_image")
var scale = 1.0;
var isFirstLoad = true;

function slideImage() {
    if (isFirstLoad) {
        isFirstLoad = false;
        sliderImage.style.opacity = 0; // Fade out the initial image
        setTimeout(function() {
            sliderImage.src = images[i]; // Change the image source
            sliderImage.style.opacity = 1; // Fade in the new image
            i = (i + 1) % images.length; // Move to the next image
            setTimeout(slideImage, 100); // Set a 1-second delay for the first image
        }, 10); // Adjust the delay to match the transition duration
    } else {
        sliderImage.style.opacity = 0; // Fade out the current image
        setTimeout(function() {
            sliderImage.src = images[i]; // Change the image source
            sliderImage.style.opacity = 1; // Fade in the new image
            i = (i + 1) % images.length; // Move to the next image
            setTimeout(slideImage, 3000); // Set a 4-second delay for the rest of the images
        }, 10); // Adjust the delay to match the transition duration
    }
}

// Start the initial slide after a short delay (e.g., 500 milliseconds)
setTimeout(slideImage, 500);

// Listen for the scroll event
window.addEventListener("scroll", function() {
    // Calculate the scale based on the scroll position
    var scrollY = window.scrollY;
    scale = 1 + scrollY * 0.0009; // Adjust the multiplier for the desired zoom effect

    // Apply the scale transformation to the image
    sliderImage.style.transform = "scale(" + scale + ")";
    
});





// Get the header element
const header = document.querySelector('header');

let hasInteracted = false;

// Function to handle scroll events
const handleScroll = () => {
    if (window.scrollY > 0 && !hasInteracted) {
        hasInteracted = true;
        observer.observe(header);
    }
};

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
    // Check if the header is intersecting with the viewport
    if (entries[0].isIntersecting) {
        // Add a delay of 2 seconds before adding the class
        setTimeout(() => {
            header.classList.add('restart-animation');
        }, 10); // 2000 milliseconds = 2 seconds
    } else {
        // If it's not, remove the class immediately
        header.classList.remove('restart-animation');
    }
});

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const imgSrc = item.getAttribute('data-img');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.width = '50px'; // Change the width as needed
        img.style.height = '50px'; // Change the height as needed
        img.style.opacity = '0'; // Start with opacity 0
        img.style.transition = 'opacity 0.4s ease-in-out'; // Add transition for opacity
        img.style.display = 'block'; // Make the image a block element
        img.style.position = 'absolute'; // Ensure the image is positioned correctly
        img.style.top = '42%'; // Move the image 50% down from the top
        img.style.left = '50%'; // Move the image 50% from the left
        img.style.transform = 'translate(-50%, -50%)'; // Center the image horizontally and vertically
        item.appendChild(img);
        // Trigger the animation by changing the opacity to 1 after a short delay
        setTimeout(() => {
            img.style.opacity = '1';
        }, 10);
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        img.style.opacity = '0'; // Fade out the image
        // Remove the image element after the animation is complete
        setTimeout(() => {
            img.remove();
        }, 10); // Wait for the animation duration (0.3s) before removing the image
    });
});


