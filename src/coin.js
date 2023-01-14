function initCoins() {
  window.localStorage.setItem("coins", 0);
}

function removeCoins() {
  window.localStorage.removeItem("coins");
  document.getElementById("coins").innerHTML = "--";
}

function getCoins() {
  return window.localStorage.getItem("coins");
}

function setCoins(coins) {
  window.localStorage.setItem("coins", coins);
}

function addCoins(coins) {
  window.localStorage.setItem(
    "coins",
    parseInt(window.localStorage.getItem("coins")) + coins
  );
}

// Update the count down every 1 second
var coinUpdate = setInterval(function () {
  if (window.localStorage.getItem("coins") === null) {
    return;
  }
  // Display the result in the element with id="coins"
  document.getElementById("coins").innerHTML = getCoins();
}, 1000);
