const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("biologieroom-form");

cform.addEventListener("submit", (e) => {
  e.preventDefault();
  input1.value = input1.value.toLowerCase();
  console.log(input1.value);
  console.log(getRoomStatus(1));

  // Check if room is already done
  if (getRoomStatus(0)) {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Dieser Raum wurde bereits von dir gelöst!", "warning");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 10000);
    return;
  }

  if (input1.value === "2937") {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    setRoomStatusDone(0);
    addCoins(200);
    alert("Code akzeptiert!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 10000);

  } else {
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, falscher Code!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 10000);
  }
});

function zimmer1(){
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    alert("Das Ende des Codes lautet: 37", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 10000);
}

function zimmer2(){
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    alert("Der Anfang des Codes lautet: 29", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 10000);
}

function zimmer3(){
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    alert("Hier befindet sich nichts.", "warning");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 10000);
}

function zimmer4(){
    var oldAlert = document.getElementById("alert");
    if (oldAlert !== null) oldAlert.remove();
    alert("Das war die Türe des Mörders! Du bist gestorben! Fange von neuem an!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/rooms/room-0.html");
    }, 10000);
}
