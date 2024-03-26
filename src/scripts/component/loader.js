document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }, 1500);
});
