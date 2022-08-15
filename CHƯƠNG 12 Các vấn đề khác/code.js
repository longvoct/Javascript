//7. Cách sử dụng arrowFunction hiệu quả
//-- Những trường hợp không nên sử udnjg arrowFuntion
//7.1 Event handlers
/* const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
}); //==> không hiểu this là gì

//7.2 Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
}; //==> không hiển thị
console.log(student.increment()); */

//debug trong VSCode
//Browser Object Model: alert, prompt, confirm, window
console.log(location);
console.log(window.location);
/* setTimeout(function () {
  location.href = "https://www.w3schools.com";
}, 1000);
 */
// lấy cái params
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.has("page"));
params.set("page", 10);
console.log(params.get("page"));
params.set("type", "long");
console.log(params.keys());

for (let it of params.keys()) {
  console.log(it);
}

for (let it of params.values()) {
  console.log(it);
}

//2. History
console.log(window.history);
history.back(); // qua laị trang trước đó <--
/* history.forward(); */ // quay lại trang kế tiếp -->
/* history.go(-2); // -2,-3,... */
//3. Navigator --> check giao diện chúng ta đang dùng
console.log(window.navigator.userAgent);
