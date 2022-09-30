const sec = document.querySelector(".sechand");
const min = document.querySelector(".minhand");
const hour = document.querySelector(".hourhand");

function getDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 24) * 360 + 90;

  sec.style.transform = `rotate(${secondsDegrees}deg)`;
  min.style.transform = `rotate(${minutesDegrees}deg)`;
  hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(getDate, 1000);
