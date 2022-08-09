//1.insertAdjacentText
const h3 = document.querySelector("h3");
const text = document.createTextNode("Hello");
//h3.insertAdjacentText("position", "text");
//position: beforebegin, afterbegin, beforeend, afterend
h3.className = "title";
//2. insertAdjacentElement
const span = document.createElement("span");
h3.insertAdjacentElement("afterbegin", span);
span.textContent = "Hello everyone!";
//3. insertAdjacentHTML
const template = `
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`;

const div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);
const divSelector = document.querySelector(".wrapper");
console.log("divSelector: ", divSelector);
divSelector.insertAdjacentHTML("afterbegin", template);

//insertBefore --> khá giống với insertAdjacentElement. Nhưng iAE chỉ dùng được cho 4 vị trí.
// còn iB lại dùng được cho nextElementSibling
//syntax: parentNode.insertBefore(newnode, existingnode)
// document.body.insertBefore(newnode, existingnode);

//node.replaceChild(newnode, oldnode);
