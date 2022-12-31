// "use strict";

const menuBtn = document.querySelector(".menu-btn");
backBtn = document.querySelector(".back-btn");
menu = document.querySelector("nav");
list = document.querySelector(".active");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 870) {
    menu.style.transform = "translateX(0)";
  }
});

backBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
});

list.addEventListener("click", () => {
  list.style.background = "#2485ff";
});
