document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  toggle.addEventListener("click", function (e) {
    e.preventDefault(); // empêche le #
    dropdown.classList.toggle("active");
  });

  // Fermer le menu si on clique ailleurs
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});
