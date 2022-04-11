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

const setDate = () => {
  const curTime = new Date().toLocaleTimeString().split(":");
  const curDay = new Date().toLocaleDateString().split(".");
  dateEl.children[0].textContent = `${curTime[0]}:${curTime[1]}`;
  dateEl.children[1].textContent = `${months[curDay[1] - 1]} ${curDay[0]}`;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let timerValue = new Date().toLocaleTimeString().split(":").at(-1);
timerValue = 60 - (timerValue[0] === "0" ? timerValue.at(-1) : timerValue);
setDate();

const updateDate = () => {
  let timer = setInterval(() => {
    setDate();
  }, 60 * 1000);
};

setInterval(() => {
  setDate();
  updateDate();
}, timerValue * 1000);
