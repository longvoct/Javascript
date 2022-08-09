//1. Sự kiện là gì
//2. Thêm 1 sự kiện: selector.addEventListener("eventName", handle, [options])
//click, keydown,keypress, keyup, mouseover, mouseleave, mousmove, load, DOMContentLoaded,...
//handler: function
//capture, bubbling

//bubbling: nổi bọt
const button = document.querySelector(".btn");
const span = document.querySelector(".btn span");

button.addEventListener("click", function () {
  console.log("click button");
});

span.addEventListener("click", function (e) {
  e.stopPropagation();
  //mạnh tay hơn:
  e.stopImmediatePropagation();
  console.log("click span");
});

//--> nổi bọt từ trong ra ngoài: span -> button
//--> để ngăn chặn điều này --> dùng: e.stopPropagation();
// --> , capture: true (ngược lại)

//target vaf currentTarget
//e.target (chọn chính xác đối tượng click) và e.currentTarget (nó chọn phần tử mà mình click)

//preventDefault() --> ngăn chặn cái gì đó
