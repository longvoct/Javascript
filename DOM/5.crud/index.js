/* //thêm xóa sửa node trong Javascript
//1. Tạo ra Element trong Js: document.createElement("tag")
const div = document.createElement("div");
//2. selector.appendChild
//document.body --> thẻ body
//document.querySelector("body")
const body = document.body;
body.appendChild(div);

div.classList.add("container");
div.innerHTML = `<p class="name">Vo Long</p>`;
div.className = "container wrapper is-show";
// div.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi possimus odit numquam quos officiis tenetur dicta velit, atque qui iure quod assumenda, obcaecati asperiores explicabo voluptatibus, deserunt quaerat ducimus!";

const user = document.querySelector(".name");
user.setAttribute("style", "color:red;font-weight:bold");

console.log(user.getAttribute("style")); */

/* const card = document.createElement("div");
card.className = "card";
const body = document.body;
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-image");
// cardImage.className = "card-image cardItem";
card.appendChild(cardImage);
body.appendChild(card);
 */
//học về createTextNode
const body = document.querySelector("body");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.className = "heading";
const text = document.createTextNode("Hello my name is Long");
h1.appendChild(text);

//4. cloneNode
// const h1Clone = h1.cloneNode(true);
// body.appendChild(h1Clone);
// console.log(h1Clone);
console.log(h1.hasChildNodes());
//5.element.hasChildNode -->kiểm tra có phần tử con hay không, có --> true, không thì trả về false
