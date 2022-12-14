// Check status of all rooms
for (let i = 0; i < rooms.length; i++) {
  room = document.getElementById("icon-room" + i);
  console.log(i + " " + room);
  console.log(getRoomStatus(i));
  if (getRoomStatus(i)) {
    room.style.visibility = "visible";
  }
}
