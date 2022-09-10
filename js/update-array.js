// Create the array and assign it values
const colors = ['white', 'black', 'red'];

// Update the third item in the array
colors[2] = 'beige';

// Get the element with an id of colors
let elColors = document.getElementById('colors');
// Replace element with third item from the array
elColors.textContent = colors[2];

