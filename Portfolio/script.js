// let year;
// year = document.getElementById('year');
// year.innerHTML = new Date().getFullYear();
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
// Get a reference to your navbar element
const navbar = document.querySelector('.navbar');
// Function to add the "sticky" class to the navbar when scrolled
function handleScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
const menu = document.querySelector('.menu');
// Function to add the "sticky" class to the navbar menu when scrolled
function handleScroll() {
  if (window.scrollY > 100) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);


// dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownTrigger = document.querySelector(".dropdownTrigger");
  const navbarList = document.querySelector("ul.menu");

  dropdownTrigger.addEventListener("click", function () {
    navbarList.classList.toggle("show-list");
  });
});