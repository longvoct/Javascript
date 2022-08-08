function createNotification() {
  const body = document.body;
  const notif = document.createElement("div");
  notif.className = "notif-container";
  body.appendChild(notif);

  const img = document.createElement("img");
  img.setAttribute("src", "https://source.unsplash.com/random");
  img.className = "notif-img";
  notif.appendChild(img);
  const template = `      <div class="content">
<span class="heading">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</span>
<p class="desc">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
  nisl sit risus nulla. Tortor etiam ac tortor, varius suscipit ipsum leo.
  Adipiscing lacus, facilisis dapibus morbi volutpat tristique erat massa
  viverra. Auctor
</p>
</div>`;
  const notifImg = document.querySelector(".notif-img");
  notifImg.insertAdjacentHTML("afterend", template);
}
const timer = setInterval(() => {
  const notifTime = document.querySelector(".notif-container");
  if (notifTime) notifTime.parentNode.removeChild(notifTime);
  createNotification();
}, 5000);
