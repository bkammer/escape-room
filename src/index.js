function startTimer() {
  localStorage.clear();
  initCoins();
  setStartTimeNow();
  window.location.assign("/home.html");
}

function reset() {
  removeTimer();
  removeCoins();
}
