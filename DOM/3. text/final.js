//1.textContent
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent);
//lấy tất cả các text có trong thẻ trên cho dù có một thẻ nào chèn trong, lấy tất. display:none thì vẫn hiện
//2.innerText
console.log(spinner.innerText);
// lệnh này xóa tất cả các khoảng trắng, cho text nằm trên một dòng. display:none thì ko hiện
//3.innerHTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">Hello HTML</div>`;
