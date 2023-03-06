const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});

