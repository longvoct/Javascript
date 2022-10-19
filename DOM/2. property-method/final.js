const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
link.setAttribute("href", "link");
link.setAttribute("class", "link");
const li = document.querySelectorAll("li");
li.forEach((item) => {
  item.setAttribute("target", "_item");
});

const p = document.querySelector("p");
// p.removeAttribute("style");

console.log(p.hasAttribute("style"));
