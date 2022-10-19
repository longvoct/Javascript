//1. parentNode, parentElement, removeChild
/* const span = document.querySelector("span");
console.log(span.parentElement);
console.log(span.parentNode);
console.log(span.parentNode.parentNode); */
// span.parentNode.removeChild(span);
//span.remove
//2.nextElementSibling vs previousElementSibling: chọn đến phần tử kế tiếp hoặc đứng sau nó
/* const nextSpan = span.nextElementSibling;
console.log(nextSpan); */
//3.childNodes: trả về (1 mảng)hết các node bên trong bao gồm textNode vs children trả về các node không bao gồm textNode --> children[index]
// --> thằng trả về NodeList thằng trả về HTMLCollection
//4. firstChild vs firstElementChild
//--> trả về phần tử đầu tiên
//5. lastChild vs lastElementChild
//6.nextSibling, previousSibling (có text)

const divContainer = document.querySelector(".top");
console.log("divContainer: ", divContainer);

console.log(divContainer.parentElement);
