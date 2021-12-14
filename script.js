const days_El = document.getElementById("days");
const hour_El = document.getElementById("hour");
const min_El = document.getElementById("min");
const sec_El = document.getElementById("sec");

function TimerToNY() {
  const dest = new Date("January 01 2022 00:00:00");
  const today = new Date();
  const subTime = Math.abs(dest.getTime() - today.getTime());
  console.log(subTime);

  var day = Math.floor(subTime / (24 * 60 * 60 * 1000));
  var hours = Math.floor(subTime / (60 * 60 * 1000));
  var min = Math.floor(subTime / (60 * 1000));
  var sec = Math.floor(subTime / 1000);

  var d = day;
  var h = hours - day * 24;
  var m = min - hours * 60;
  var s = sec - min * 60;

  console.log(`${d} : ${h} : ${m} : ${s}`);
  days_El.innerText = `${d} days`;
  hour_El.innerText = `${h} hours`;
  min_El.innerText = `${m} mins`;
  sec_El.innerText = `${s} secs`;
}

setInterval(TimerToNY, 1000);
