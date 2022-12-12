const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const winloginform = document.getElementById("win-login-form");
const errorElement = document.getElementById("error");

winloginform.addEventListener("submit", (e) => {
  e.preventDefault()
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Name ist required");
  }

  if (username.value === "susan" && password.value === "random123") {
    document.getElementById("laptop").style.backgroundImage =
      "url(./coding/desktop.png)";
    username.style.display = "none";
    password.style.display = "none";
    submit.style.display = "none";
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Nice, you logged into the laptop!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }

  if (messages.length > 0) {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Nice, you logged into the laptop!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
    errorElement.innerText = messages.join(", ");
  }
  e.preventDefault();
});
