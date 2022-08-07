"use strict";

var wrapperToggle = document.querySelector(".wrapper");
var barToggle = document.querySelector(".icon-bar");
var timesToggle = document.querySelector(".icon.times");
barToggle.addEventListener("click", function () {
  console.log("click");
  wrapperToggle.classList.add("is-show");
  timesToggle.classList.add("active");
});
timesToggle.addEventListener("click", function (e) {
  console.log("click me");
  wrapperToggle.classList.remove("is-show");
  timesToggle.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (!wrapperToggle.contains(e.target) && !e.target.classList.contains("icon-bar")) {
    wrapperToggle.classList.remove("is-show");
  }
});
var menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    menuItem.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});