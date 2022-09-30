const sec = document.querySelector(".sechand");
const min = document.querySelector(".minhand");
const hour = document.querySelector(".hourhand");

let num = 0;
let num1 = 0;
let num2 = 0;

function getDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 24) * 360 + 90;

  if (seconds === 0) {
    num += 360;
  }
  if (minutes === 0) {
    num1 += 360;
  }
  if (hours === 0) {
    num2 += 360;
  }

  sec.style.transform = `rotate(${num + secondsDegrees}deg)`;
  min.style.transform = `rotate(${num1 + minutesDegrees}deg)`;
  hour.style.transform = `rotate(${num2 + hoursDegrees}deg)`;
}

setInterval(getDate, 1000);
