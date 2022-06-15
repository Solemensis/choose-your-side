"use strict";

const halflings = document.querySelector(".halflings");
const elves = document.querySelector(".elves");
const body = document.querySelector("body");
const halflingsText = document.querySelector(".halflingsText");
const elvesText = document.querySelector(".elvesText");
const choose1 = document.querySelector(".choose1");
const choose2 = document.querySelector(".choose2");
let halflingCounter = 0;

halflings.addEventListener("mouseover", function () {
  elves.style.width = "35vw";
  body.style.backgroundColor = "#8a7a95";
  elves.style.filter = "grayscale(1)";
  halflings.style.filter = "grayscale(0)";

  halflingsText.style.opacity = "0.8";
  choose1.style.opacity = "0.8";
});

halflings.addEventListener("mouseleave", function () {
  if (halflingCounter === 0) {
    body.style.backgroundColor = "#7c7c7c";
    elves.style.width = "50vw";
    halflings.style.filter = "grayscale(0.7)";
    elves.style.filter = "grayscale(0.7)";
    halflingsText.style.opacity = "0";
    choose1.style.opacity = "0";
  }
});

// halflings.addEventListener("mouseleave", function () {
//   if (halflingCounter === 0) {
//     body.style.backgroundColor = "#7c7c7c";
//     elves.style.width = "50vw";
//     halflings.style.filter = "grayscale(0.7)";
//     elves.style.filter = "grayscale(0.7)";
//     halflingsText.style.opacity = "0";
//   } else if (halflingCounter === 1) {
//   }
// });

// halflings.addEventListener("click", function () {
//   if (halflingCounter === 0) {
//     this.classList.add("border");
//     halflingsText.style.opacity = "0.8";
//     this.style.width = "65vw";

//     halflingCounter = 1;
//   } else if (halflingCounter === 1) {
//     this.classList.remove("border");
//     halflingCounter = 0;
//   }
// });

elves.addEventListener("mouseover", function () {
  halflings.style.width = "35vw";
  halflings.style.filter = "grayscale(1)";
  elves.style.filter = "grayscale(0)";
  body.style.backgroundColor = "#e6b881";
  elvesText.style.opacity = "0.8";
  choose2.style.opacity = "0.8";
});

elves.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "#7c7c7c";
  halflings.style.width = "50vw";

  elves.style.filter = "grayscale(0.7)";

  halflings.style.filter = "grayscale(0.7)";
  elvesText.style.opacity = "0";
  choose2.style.opacity = "0";
});
