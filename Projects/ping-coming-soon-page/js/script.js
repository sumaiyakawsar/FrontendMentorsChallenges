const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
 
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    emailInput.setCustomValidity(" ");
    errorMsg.innerHTML = "Please provide a valid email address";
    errorMsg.style.display = "block";
    emailInput.style.borderColor = "#ff4c4c";
  } else {
    errorMsg.style.display = "none";
    emailInput.style.borderColor = "#ccc";
    alert("Thank you for subscribing!");
    contactForm.reset();
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}