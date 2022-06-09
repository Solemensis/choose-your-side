"use strict";

const halflings = document.querySelector(".halflings");
const elves = document.querySelector(".elves");
const body = document.querySelector("body");
const halflingsText = document.querySelector(".halflingsText");
const elvesText = document.querySelector(".elvesText");

halflings.addEventListener("mouseover", function () {
  elves.style.width = "35vw";
  body.style.backgroundColor = "#9dacff";
  elves.style.filter = "grayscale(1)";
  halflings.style.filter = "grayscale(0)";

  halflingsText.style.opacity = "0.8";
});

halflings.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "#7c7c7c";
  elves.style.width = "50vw";
  halflings.style.filter = "grayscale(0.7)";
  elves.style.filter = "grayscale(0.7)";
  halflingsText.style.opacity = "0";
});

elves.addEventListener("mouseover", function () {
  halflings.style.width = "35vw";
  halflings.style.filter = "grayscale(1)";
  elves.style.filter = "grayscale(0)";
  body.style.backgroundColor = "#FFCC8F";
  elvesText.style.opacity = "0.8";
});

elves.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "#7c7c7c";
  halflings.style.width = "50vw";

  elves.style.filter = "grayscale(0.7)";

  halflings.style.filter = "grayscale(0.7)";
  elvesText.style.opacity = "0";
});
