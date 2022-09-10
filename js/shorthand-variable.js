// METHOD 1
let price = 5;
let quantity = 14;
let total = price * quantity;

/* METHOD 2
let price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* METHOD 3
let price = 5, quantity = 14;
let total = price * quantity;
*/

// Write the total into the element with id of cost
var elCost = document.getElementById('cost');  // Gets the element with an id of cost
elCost.textContent = '$' + total;              // Replaces the content of this element

