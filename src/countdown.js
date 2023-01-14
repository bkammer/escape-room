function removeCountdown() {
  window.localStorage.removeItem("endDate");
  document.getElementById("countdown").innerHTML = "--d --h --m --s";
}

function setEndTime() {
  var endDate = new Date().getTime() + 60 * 60 * 1000;
  window.localStorage.setItem("endDate", endDate);
}

// Update the count down every 1 second
var x = setInterval(function () {
  if (window.localStorage.getItem("endDate") === null) {
    return;
  }
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance
  var distance = window.localStorage.getItem("endDate") - now;

  if (distance < 0) {
    // If time is up
    window.location.assign("/end.html");
    window.localStorage.removeItem("endDate");
  }

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

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = time;
}, 1000);
