const modalWindow = document.querySelector(".modal");
const btns = document.querySelectorAll(".button-play");
const youtubeVideo = document.querySelector(".modal__inner iframe");
const dateEl = document.querySelector(".header__date");

btns.forEach((el) =>
  el.addEventListener("click", () => {
    modalWindow.classList.add("active");
    youtubeVideo.src = el.dataset.src;
  })
);

modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  youtubeVideo.src += "?enablejsapi=1";
});

const curTime = new Date().toLocaleTimeString().split(":");
let timerValue = curTime.at(-1);
timerValue = 60 - (timerValue[0] === "0" ? timerValue.at(-1) : timerValue);
dateEl.children[0].textContent = `${curTime[0]}:${curTime[1]}`;
