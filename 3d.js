const pencil = document.querySelector('.pencil'); // Select the pencil element from the DOM
const button = document.getElementById('moveButton'); // Select the button element by its ID

let isMoving = false; // Flag to control whether the pencil is moving
let movementInterval; // Variable to store the interval ID for the movement

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Check if the pencil is currently moving
    if (isMoving) {
        clearInterval(movementInterval); // Stop the movement by clearing the interval
        isMoving = false; // Update the flag to indicate the pencil has stopped moving
        button.innerText = 'Start Moving'; // Change the button text to indicate that it can start moving again
    } else {
        // Start moving the pencil
        movementInterval = setInterval(() => {
            // Generate random values for X and Y movement
            const randomX = Math.random() * 200 - 100; // Random X movement within the range [-100, 100]
            const randomY = Math.random() * 200 - 100; // Random Y movement within the range [-100, 100]
            // Apply the translation to the pencil using CSS transform
            pencil.style.transform = `translate(${randomX}px, ${randomY}px)`; 
        }, 1000); // Set the movement to occur every 1 second
        isMoving = true; // Update the flag to indicate the pencil is moving
        button.innerText = 'Stop Moving'; // Change the button text to indicate that it is now moving
    }
});
