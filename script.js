// Simple JavaScript to show alert on form submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon.");
});
