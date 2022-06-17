//1. selector.classList.add("abc")
const h1Style = document.querySelector("h1");
h1Style.classList.add("is-active");

//2.selector.classList.remove("abc")
h1Style.classList.remove("is-active");

//3.selector.classList.contains("container")

//4. className
const select = document.querySelector(".container");
console.log(select.className);
