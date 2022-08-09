const arrowRight = document.querySelector(".arrow-right");

const arrowLeft = document.querySelector(".arrow-left");

arrowRight.addEventListener("click", function () {
  const span = document.querySelector(".number");
  const numberText = span.textContent;
  const number = parseInt(numberText) + 1;
  if (number > 0 && !arrowLeft.classList.contains("is-show")) {
    arrowLeft.classList.add("is-show");
  }
  span.textContent = number;
});

arrowLeft.addEventListener("click", function () {
  const span = document.querySelector(".number");
  const numberText = span.textContent;
  const number = parseInt(numberText) - 1;
  if (number == 0) {
    arrowLeft.classList.remove("is-show");
  }
  span.textContent = number;
});
