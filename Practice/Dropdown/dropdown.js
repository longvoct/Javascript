const caretIcon = document.querySelector(".caret-icon");
const selections = document.querySelector(".selections");
const listBox = document.querySelector(".list-box");
const headerContent = document.querySelector(".header-content");

selections.addEventListener("click", (e) => {
  caretIcon.classList.toggle("fa-caret-up");
  listBox.classList.toggle("is-active");
});

const itemBox = document.querySelectorAll(".item-box");

itemBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    headerContent.innerHTML = item.innerHTML;
    listBox.classList.remove("is-active");
    item;
  });
});

document.addEventListener("click", (e) => {
  if (!selections.contains(e.target)) {
    listBox.classList.remove("is-active");
  }
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  console.log("click me");
});
