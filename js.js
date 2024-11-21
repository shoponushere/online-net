document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Gather form data
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();

  // Basic validation
  if (!firstName || !lastName || !email || !cardNumber) {
    alert("Please fill out all required fields.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Final submission action
  alert("Order placed successfully!");
});
