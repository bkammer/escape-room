const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const winloginform = document.getElementById("win-login-form");

winloginform.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if room is already done
  if (getRoomStatus(2)) {
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

  // Check if username is empty and return aleart.
  if (username.value === "" || username.value == null) {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Ein Name ist notwendig!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);

  // Check if the right credentials are given
  } else if (username.value === "tom" && password.value === "zufall123") {
    // Change background image
    document.getElementById("laptop").style.backgroundImage =
      "url(/rooms/room-2/desktop.png)";
    // Remove login form
    username.style.display = "none";
    password.style.display = "none";
    submit.style.display = "none";

    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(2);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Nice, du hast dich in den Laptop gehackt!", "success");

    window.localStorage.setItem("coding-finish", true);
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);

  // Wrong credentials were inserted
  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Falscher Benutzername oder Passwort!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
