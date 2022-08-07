const wrapperToggle = document.querySelector(".wrapper");
const barToggle = document.querySelector(".icon-bar");
const timesToggle = document.querySelector(".icon.times");

barToggle.addEventListener("click", () => {
  console.log("click");
  wrapperToggle.classList.add("is-show");
  timesToggle.classList.add("active");
});

timesToggle.addEventListener("click", (e) => {
  console.log("click me");
  wrapperToggle.classList.remove("is-show");
  timesToggle.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (
    !wrapperToggle.contains(e.target) &&
    !e.target.classList.contains("icon-bar")
  ) {
    wrapperToggle.classList.remove("is-show");
  }
});

const menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuItem.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
