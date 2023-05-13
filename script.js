const toggleButton = document.getElementById("dark-light-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.querySelector("i").classList.toggle("fa-sun");
  toggleButton.querySelector("i").classList.toggle("fa-moon");
});
