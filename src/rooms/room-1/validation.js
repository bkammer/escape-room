const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("informatikroom-form");

cform.addEventListener("submit", (e) => {
  e.preventDefault();
  input1.value = input1.value.toLowerCase();
  console.log(input1.value);
  console.log(getRoomStatus(1));

  // Check if room is already done
  if (getRoomStatus(1)) {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Dieser Raum wurde bereits von dir gelöst!", "warning");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);
    return;
  }

  if (input1.value === "brutus") {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    setRoomStatusDone(1);
    addCoins(200);
    alert("Sehr gut!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);

  } else {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, falsche Antwort!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
