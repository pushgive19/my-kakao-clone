const clock = document.querySelector(".status-bar__clock"),
  kakaoCal = document.querySelector(".js-timestamp");

function paintTime(hour, minute) {
  clock.textContent = `${hour}:${minute}`;
}
function paintKakaoTime(y, m, date, d) {
  const month = [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septembre",
    "October",
    "November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const day =
  //   d == 1
  //     ? "Monday"
  //     : d == 2
  //     ? "Tuesday"
  //     : d == 3
  //     ? "Wednesday"
  //     : d == 4
  //     ? "Thursday"
  //     : d == 5
  //     ? "Friday"
  //     : d == 6
  //     ? "Saturday"
  //     : "Sunday";
  // const month =
  //   m == 0
  //     ? "January"
  //     : m == 1
  //     ? "Fabruary"
  //     : m == 2
  //     ? "March"
  //     : m == 3
  //     ? "April"
  //     : m == 4
  //     ? "May"
  //     : m == 5
  //     ? "June"
  //     : m == 6
  //     ? "July"
  //     : m == 7
  //     ? "August"
  //     : m == 8
  //     ? "September"
  //     : m == 9
  //     ? "October"
  //     : m == 10
  //     ? "November"
  //     : "December";
  kakaoCal.innerText = `${day[d]}, ${month[m]} ${date}, ${y}`;
}

function getTime() {
  const timeStamp = new Date();
  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  const year = timeStamp.getFullYear();
  const month = timeStamp.getMonth();
  const date = timeStamp.getDate();
  const day = timeStamp.getDay();
  // const day - ;
  paintTime(hours, minutes);
  paintKakaoTime(year, month, date, day);
}

function init() {
  setInterval(getTime, 1000);
}
init();
