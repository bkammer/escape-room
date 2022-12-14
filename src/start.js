function startTimer() {
    localStorage.clear();
    // Set the date we're counting down to
    window.localStorage.setItem("startDate", new Date().getTime());
    console.log("Start timestamp set.")
    window.location.assign("../index.html");
  }
  
  function reset() {
    localStorage.clear();
  }
  