const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const finalDate = "31 Dec 2023";

function countdown() {
  const countdownDate = new Date(finalDate);
  const currentDate = new Date();

  const totalSeconds = (countdownDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;
  printTime(days, hours, mins, seconds);
}
// The 0 is present if the number
function formatTime(time) {
  return time < 10 ? `0${time}` : "" + time;
}

// show the time on screen
function printTime(days, hours, mins, seconds) {
  animationFlip(daysEl, formatTime(days));
  animationFlip(hoursEl, formatTime(hours));
  animationFlip(minsEl, formatTime(mins));
  animationFlip(secondsEl, formatTime(seconds));
}

function animationFlip(element, value) {
  const valueInDom = element.querySelector(".bottom-back").innerText;
  const currentValue = value;
  if (valueInDom === currentValue) return;

  element.querySelector(".top-back span").innerText = currentValue;
  element.querySelector(".bottom-back span").innerText = currentValue;

  gsap.to(element.querySelector(".top"), 0.7, {
    rotationX: "-180deg",
    transformPerspective: 300,
    ease: Quart.easeOut,
    onComplete: () => {
      element.querySelector(".top").innerText = currentValue;
      element.querySelector(".bottom").innerText = currentValue;
      gsap.set(element.querySelector(".top"), { rotationX: 0 });
    },
  });

  gsap.to(element.querySelector(".top-back"), 0.7, {
    rotationX: "0",
    transformPerspective: 300,
    ease: Quart.easeOut,
    clearProps: "all",
  });
}

//initial call
countdown();

setInterval(countdown, 1000);
