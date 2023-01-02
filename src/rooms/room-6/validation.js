const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("loesungform");

cform.addEventListener("submit", (e) => {
  e.preventDefault();
  var checkResult = input1.value.toLowerCase();
  checkResult = checkResult.replace(/\s/g, '');
  console.log(checkResult);

  if (checkResult === "789629465") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(6);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Well done!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);
  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, wrong solution!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
