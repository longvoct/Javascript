const tagItem = document.querySelectorAll("div .tag");
const tagDesc = document.querySelectorAll(".tag-desc");
const tagIcon = document.querySelectorAll("li i");

tagItem.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < tagDesc.length; i++) {
      if (item.dataset.name === tagDesc[i].dataset.desc) {
        tagDesc[i].classList.toggle("is-show");
        tagIcon[i].classList.toggle("is-ac");
        break;
      }
    }
  });
});
