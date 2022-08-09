const atag = document.querySelector(".link");

atag.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(atag.dataset.name);
});
