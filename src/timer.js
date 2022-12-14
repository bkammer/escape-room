function removeTimer() {
  window.localStorage.removeItem("startDate");
  document.getElementById("timer").innerHTML = "--d --h --m --s";
}

function setStartTimeNow() {
  window.localStorage.setItem("startDate", new Date().getTime());
}

// Update the count down every 1 second
var x = setInterval(function () {
  if (window.localStorage.getItem("startDate") === null) {
    return;
  }
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance
  var distance = now - window.localStorage.getItem("startDate");

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Building time string
  var time = "";
  if (days > 0) {
    time = time + days + "d ";
  }
  if (hours > 0 || days > 0) {
    time = time + hours + "h ";
  }
  if (minutes > 0 || hours > 0 || days > 0) {
    time = time + minutes + "m ";
  }
  time = time + seconds + "s ";

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = time;
}, 1000);
