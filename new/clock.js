const clock = document.querySelector(".status-bar__clock");

function paintTime(hour, minute) {
  clock.textContent = `${hour}:${minute}`;
}

function getTime() {
  const timeStamp = new Date();
  console.log(timeStamp);
  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  paintTime(hours, minutes);
}

function init() {
  setInterval(getTime, 1000);
}
init();
