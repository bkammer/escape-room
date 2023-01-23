const physikform = document.getElementById("physikform");
const kronenNrLoesung = document.getElementById("loesung");

const kronenNr = document.getElementById("crownNr");
const placingPos = document.getElementById("placingPosition");
const physikcalculateform = document.getElementById("physikcalculateform");

physikcalculateform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(placingPos.value);
  if (kronenNr.value === "Wähle eine Nummer" || placingPos.value === "Wähle") {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Keine Auswahl bei der Kronennummer oder der Ablage", "warning");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
    return;
  } else if (placingPos.value === "waage") {
    var weight;
    switch (kronenNr.value) {
      case "1":
        weight = 1.83;
        break;
      case "2":
        weight = 1.52;
        break;
      case "3":
        weight = 1.28;
        break;
      case "4":
        weight = 2.3;
        break;
      case "5":
        weight = 1.63;
        break;
      case "6":
        weight = 1.34;
        break;
      default:
        weight = "error";
    }
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    var message = `Die Krone wiegt ${weight} kg.`;
    alert(message, "secondary");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
    return;
  } else if (placingPos.value === "badewanne") {
    var volume;
    switch (kronenNr.value) {
      case "1":
        volume = 93.85;
        break;
      case "2":
        volume = 79.53;
        break;
      case "3":
        volume = 75.29;
        break;
      case "4":
        volume = 104.54;
        break;
      case "5":
        volume = 84.37;
        break;
        case "6":
        volume = 74.44;
        break;
      default:
        volume = "error";
    }
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    var message = `Das Volumen der Krone beträgt ${volume} cm³.`;
    alert(message, "secondary");
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

  if (kronenNrLoesung.value === "5") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(4);
    addCoins(200);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Du hast die Krone aus Gold gefunden!", "success");
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
