// Create a variable for the subtotal and make a calculation
let subtotal = (14) * 5; // Subtotal is 70

// Create a variable for tWhe shipping and make a calculation
let shipping = 0.2 * 14; // Shipping is 2 = not the rounding error

// Create the total by combining the subtotal and shipping values
let total = subtotal + shipping; // Total is 72.8


// don't worry about formatting yet


// note getElementById  and textContent

// Write the results to the screen
elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML but beware of security issues 
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/