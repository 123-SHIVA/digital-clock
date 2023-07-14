// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  console.log(time);

  let hour = (document.getElementById("hours").innerHTML = time.getHours());
  console.log(hour);

  let minutes = (document.getElementById("minutes").innerHTML =
    time.getMinutes());
  let second = (document.getElementById("second").innerHTML =
    time.getSeconds());

  am_pm = "AM";
}

showTime();
