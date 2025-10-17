const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function() {
  let currentValue = parseInt(counterEl.textContent);

  // Show alert with only the number (expected by test)
  alert(currentValue);

  counterEl.textContent = currentValue + 1;
});
