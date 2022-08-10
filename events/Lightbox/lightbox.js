const imgItems = document.querySelectorAll(".img-item");
// console.log(imgItems[0].getAttribute("src"));
const body = document.body;
imgItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const imgSrc = item.getAttribute("src");
    const template = `
    <div class="light-box">   
        <i class="fa-solid fa-chevron-left icon-left"></i>
       <img src=${imgSrc} alt="" class="light-box_img">
         <i class="fa-solid fa-chevron-right icon-right"></i>

    </div>  
    `;
    document.body.insertAdjacentHTML("beforeend", template);
  });
});

let index = 0;
document.addEventListener("click", (e) => {
  const lightImg = document.querySelector(".light-box_img");
  const lightBox = document.querySelector(".light-box");
  if (!lightImg) return;
  if (lightImg) {
    for (let i = 0; i < imgItems.length; i++) {
      if (imgItems[i].getAttribute("src") === lightImg.getAttribute("src")) {
        index = i;
        break;
      }
    }
    console.log(index);
    if (e.target.classList.contains("icon-left")) {
      for (let i = 0; i < imgItems.length; i++) {
        if (index === i) {
          index = index - 1;
          lightImg.setAttribute("src", imgItems[index - 1].getAttribute("src"));
        } else if (index === 0) {
          index = imgItems[imgItems.length - 1];
          console.log(index);
          lightImg.setAttribute("src", imgItems[index].getAttribute("src"));
        }
      }
    } else if (e.target.classList.contains("icon-right")) {
      // console.log();
    } else if (!lightImg.contains(e.target))
      lightBox.parentNode.removeChild(lightBox);
  }
});
