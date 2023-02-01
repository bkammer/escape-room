function checkcoinnumber() {
  if (getCoins() >= 1000) {
    var oldAlert = document.getElementById("alert");
    var leaveSuccess = document.getElementById("leave-success");
    var leaveFail = document.getElementById("leave-fail");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert(
      "Glückwünsch! Du hast genügend Coins gesammelt und kannst das Haus der Rätsel verlassen.",
      "success"
    );
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 10000);
    leaveSuccess.style.display = "block";
    leaveFail.style.display = "none";

  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert(
      "Es tut mir leid, du hast noch nicht genüngend Coins! Versuche durch das Lösen weiterer Räume mehr Coins zu erhhalten.",
      "danger"
    );
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 10000);
  }
}
