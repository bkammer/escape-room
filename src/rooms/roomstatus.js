const rooms = [];
rooms.length = 6;

function initRoomStatus() {
  for (let i = 0; i < rooms.length; i++) {
    window.localStorage.setItem("statusRoom" + i, false);
  }
}

function getRoomStatus(roomnumber) {
  return window.localStorage.getItem("statusRoom" + roomnumber) === "true";
}

function setRoomStatusDone(roomnumber) {
  window.localStorage.setItem("statusRoom" + roomnumber, true);
}
