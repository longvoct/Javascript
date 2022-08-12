//create div - modal
const body = document.body;
const modal = document.createElement("div");
modal.className = "modal";

//create div - modal-content
const modalContent = document.createElement("div");
modalContent.setAttribute("class", "modal-content");
modal.appendChild(modalContent);

//create i - close
const modalClose = `<i class="fa-solid fa-circle-xmark modal-close"></i>`;
modalContent.insertAdjacentHTML("afterbegin", modalClose);

const pDesc = document.createElement("p");
const text = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ab aperiam nam eligendi dignissimos voluptatibus sed mollitia, sapiente, neque alias magni repellendus esse necessitatibus delectus porro minus pariatur at quod."
);
// pDesc.textContent = "Hello world!";
pDesc.appendChild(text);
pDesc.classList.add("modal-desc");
modalContent.appendChild(pDesc);
const modalAction = document.createElement("div");
modalContent.appendChild(modalAction);
modalAction.classList.add("modal-action");

//create button accept
const buttonAccept = document.createElement("button");
modalAction.appendChild(buttonAccept);
buttonAccept.classList.add("modal-btn_accept");
buttonAccept.textContent = "Accept";
//create button cancel
const buttonCancel = document.createElement("button");
modalAction.appendChild(buttonCancel);
buttonCancel.classList.add("modal-btn_cancel");
buttonCancel.textContent = "Cancel";

body.appendChild(modal);

const modalDisabled = document.querySelector(".modal");
// const modalIsRun = document.querySelector(".modal");
if (modalDisabled) {
  setInterval(function () {
    modalDisabled.classList.add("is-show");
  }, 3000);
}

const modalBtnClose = document.querySelector(".modal-close");
modalBtnClose.addEventListener("click", () => {
  modalDisabled.classList.remove("is-show");
});
