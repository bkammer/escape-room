const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("loesungform");

cform.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if room is already done
  if (getRoomStatus(7)) {
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

  var checkResult = input1.value.toLowerCase();
  checkResult = checkResult.replace(/\s/g, '');
  console.log(checkResult);

  if (checkResult === "katze") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(7);
    addCoins(200);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Wunderbar!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);
  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, das Tier ist falsch!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
