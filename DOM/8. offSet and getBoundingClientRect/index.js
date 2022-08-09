//1. offsetWidth, offsetHeight, offsetLeft,   offsetParent, offSetTop

const boxed = document.querySelector(".boxed");
// console.log(boxed.offsetWidth);
// console.log(boxed.offsetHeight);
// console.log(boxed.offsetParent);
// console.log(boxed.offsetTop);

//2. clientWidth, clientHeight, clientLeft, clientTop
// console.log(boxed.clientWidth);
// console.log(boxed.clientLeft);

//3. window.inner/outerWidth, window.inner/outerHeight
/* console.log("innerHeight", window.innerHeight);
console.log("outerHeight", window.outerHeight);
console.log("innerWidth", window.innerWidth);
console.log("outerWidth", window.outerWidth); */

//4. selector.getBoundingClientRect() --> lấy ra tọa độ, kích thước của phần tử
console.log(boxed.getBoundingClientRect());

console.log(document.title);
document.title = "Welcome to Javascript";
