const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("chemieform");

cform.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if room is already done
  if (getRoomStatus(3)) {
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

  input1.value = input1.value.toLowerCase();
  console.log(input1.value);

  if (input1.value === "scary") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(3);
    addCoins(200);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Gut gemacht!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);
  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, falsche Lösung!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
