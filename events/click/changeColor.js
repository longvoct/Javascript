const button2 = document.querySelector(".btn-change");
console.log(button2);

const colors = [
  "#fde045",
  "#803ad2",
  "#f15162",
  "#07fa89",
  "#d6d6d6",
  "#6eaef3;",
];
let temp;
button2.addEventListener("click", function () {
  let color = colors[Math.floor(Math.random() * colors.length)];
  while (temp == color) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  document.body.setAttribute("style", `background-color: ${color}`);
  temp = color;
});

//event.target.style
//background-color -->backgroundColor
//event.target.style.color = red;
