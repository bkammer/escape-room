const physikform = document.getElementById("physikform");
const kronenNrLoesung = document.getElementById("loesung");

const kronenNr = document.getElementById("crownNr");
const placingPos = document.getElementById("placingPosition");
const physikcalculateform = document.getElementById("physikcalculateform");


physikcalculateform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(kronenNr.value)
    console.log(placingPos.value)
    if (kronenNr.value === "Wähle eine Nummer" || placingPos.value === "Wähle"){
        var oldAlert = document.getElementById("alert");
        if (oldAlert !== null) oldAlert.remove();
        // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
        alert("Keine Auswahl bei der Kronennummer oder der Ablage", "warning");
        var currentAlert = document.getElementById("alert");
        setTimeout(() => {
          currentAlert.remove();
        }, 5000);
        return;
    }

});

physikform.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if room is already done
  if (getRoomStatus(4)) {
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

  if (kronenNrLoesung.value === "2") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(4);
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
