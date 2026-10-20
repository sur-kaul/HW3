const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});