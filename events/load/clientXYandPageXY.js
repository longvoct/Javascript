//pageX, pageY, clientX, clientY

document.addEventListener("mousemove", function (event) {
  console.log("event.clientY: ", event.clientX);
  console.log("event.pageY: ", event.pageX);
});

//clientY: lấy tọa độ theo viewport
//pageY: lấy theo document
