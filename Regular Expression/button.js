const boxed = document.querySelector(".boxed");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  console.log("click button");
});

boxed.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click boxed");
});

function HandleButtonCancel(e) {
  e.preventDefault();
  console.log("click button");
}
