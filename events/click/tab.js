const tabItem = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content_item");

// console.log(template);
tabItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.preventDefault;
    tabItem.forEach((item) => {
      if (item.matches(".active")) item.classList.remove("active");
    });
    item.classList.add("active");
    console.log(item.dataset.item);
    for (let i = 0; i < tabContentItem.length; i++) {
      if (item.dataset.item === tabContentItem[i].dataset.value) {
        tabContentItem.forEach((item) => {
          if (item.matches(".is-active")) item.classList.remove("is-active");
        });
        tabContentItem[i].classList.add("is-active");
        break;
      }
    }
  });
});
