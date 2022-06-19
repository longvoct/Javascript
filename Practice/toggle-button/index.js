const active = document.querySelector(".button-outside");

active.addEventListener("click", () => {
  const change = document.querySelector(".button-inside");
  change.classList.toggle("active");
  console.log("click me");
});
