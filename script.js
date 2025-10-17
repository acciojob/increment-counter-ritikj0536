//your JS code here. If required.
// Get references to the DOM elements
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// Add a click event listener
incrementBtn.addEventListener("click", function() {
  // Get the current counter value (before incrementing)
  let currentValue = parseInt(counterEl.textContent);

  // Show alert with the un-incremented value
  alert("Current Value: " + currentValue);

  // Increment the value
  counterEl.textContent = currentValue + 1;
});
