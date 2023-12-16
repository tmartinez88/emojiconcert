// Array of emojis
const emojis = ['😀', '😄', '😊', '😎', '🤩', '😍', '🥳', '😇', '🤓', '🤪'];

// Number of divs to create
const numDivs = 10;

function randomIndex() {
    return Math.floor(Math.random() * emojis.length);
} 

// Get the container element
const container = document.getElementById('container');

// Generate divs with random emojis
for (let i = 0; i < numDivs; i++) {
    // Create a new div element
    const divvy = document.createElement('div'); 
    // Set the div's content to a random emoji  
    divvy.textContent = emojis[randomIndex()];
    divvy.classList.add('emoji');
    // Set the height of the div to the window height
    divvy.style.height = `${window.innerHeight}px`;
    // Append the div to the container
    container.appendChild(divvy);
}
