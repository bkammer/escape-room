var canvas, ctx;
var pimg, pattern;
var curr_color, dctrl;

function init() {
  dctrl = { drawing: false };

  canvas = document.getElementById("chalkboard");
  canvas.addEventListener("mousedown", canvas_mousedown);
  canvas.addEventListener("mousemove", canvas_mousemove);
  canvas.addEventListener("mouseout", canvas_mouseout);
  canvas.addEventListener("mouseup", canvas_mouseup);

  ctx = canvas.getContext("2d");
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  pattern = ctx.createPattern(pimg, "repeat");

  curr_color = "#6FC";

  var message = "JUST DRAW";

  ctx.font = "bold 36px sans-serif";
  ctx.textAlign = "center";

  ctx.globalCompositeOperation = "source-over";
  ctx.strokeStyle = curr_color;
  ctx.strokeText(message, 320, 40);

  ctx.globalCompositeOperation = "destination-out";
  ctx.strokeStyle = pattern;
  ctx.strokeText(message, 320, 40);
}

function draw_line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.globalCompositeOperation = "source-over";
  ctx.strokeStyle = curr_color;
  ctx.stroke();

  ctx.globalCompositeOperation = "destination-out";
  ctx.strokeStyle = pattern;
  ctx.stroke();
}

function draw_line_ev(ev) {
  var rect = ev.target.getBoundingClientRect();
  var mousex = ev.clientX - rect.left;
  var mousey = ev.clientY - rect.top;
  draw_line(dctrl.prevx, dctrl.prevy, mousex, mousey);
  dctrl.prevx = mousex;
  dctrl.prevy = mousey;
}

function canvas_mousedown(ev) {
  var rect = ev.target.getBoundingClientRect();

  dctrl.drawing = true;

  draw_line();

  dctrl.prevx = ev.clientX - rect.left;
  dctrl.prevy = ev.clientY - rect.top;
}

function canvas_mousemove(ev) {
  if (dctrl.drawing) {
    draw_line_ev(ev);
  }
}

function canvas_mouseout(ev) {
  if (dctrl.drawing) {
    draw_line_ev(ev);
  }
  dctrl.drawing = false;
}

function canvas_mouseup(ev) {
  dctrl.drawing = false;
}

pimg = new Image();
pimg.onload = init;
pimg.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGoklEQVRYhU3Xe/TX8x0H8I/coo5ZWa2ZDqGtTVgXWlvZFk2mmKWxCEOTS9pKvyMayRAll1pYLjNbZ5y0mZI2t4y2LDPZkhJLzaXMihVjHvvj+erYH7/zO7/z/b7f79freXu9fg1ORAt+gL2xHreiT/3MwB9xGEbiGvwdz6EN/op+OB4bsAq74ws4AjvidTyPDpiFxeiB9g32xNEYgcOxAKfj6/XgndiEoRiPk/EB7sZw7IP22BWdcTteRDvshnH1+wjMwUxsrbcuaHAW/owJVcQSXFZdfAIn4Xz8vAr5Lg7Bt7EQp9XDc9GxGphTBd+G1oXWGBxT338Wm9G9wUp0xccxEKPxcHU+FbtgciHyn4L5rXr0/oJ2Js6rs+sxveA+qSgYiOvQF6NwEA7FXU3B2q/4/glOxf64GB/iXfyuDv2iOni6qJiHafVgP9HLdaKpzTgK/8aXCoGdCvFBhWpLg7GYUpBfJyLbv7p8qC5/GH8TIf4Fe+HIomJ28fuxoqxv3flp3IxuRcksPFmFHlDN7tDgDPTCvuiOe6qDJ6qgiZjWNE1TCNxdD/TFN0R8LaKR8fWd97ER/xCd7FjotBGHzRHxXtzgpyK8+6uA74mK1+G/WIQt9TMLP8JqUfY3Re2bREvdCt7rcQ6+LC7bFefiO3i8ipiLJQ1OwPexswhnTvG3s4hwcVU+ovh+vSAfWb/HVXe3SV6srkd2EtGuxqN4re5cjwdwA6Y0xfPA6rx9Vf9edb8d3qjLO2MNfly0TRfrHoeX8Eh1+qyIbhCeEc+3VPeXigumi/MOabAfvlKPd0Z/PCgW2q4e2V5sMxhni7j2qjPb/h4lFl1YSA3E5/Av0cLLuK8KPrZo6NBgfsHaQ6x4Kw4uDn+DSXizaJopArwdy8UVM+p8q3r0gHpkaUE9vM6eUIX2Ere8iAlNcf6AiOpiyfnH6vK5dfgPovBH6uBimQHz6syxwv9Nwv/gQu4zeKocNFOcsUAsPQwHNQXdiDp4swhv7/q7VXG5BleKyn9ZD08pfjuIM6bgArHgANHKjGposAynXvinOOohrGskQCbjZ8V7i6TWMInnp6rIC6v6PWTy9cQV4pC2kpALRBPPSe4PqW5vkah+XjRxDDrhsAbL8MXieox4vT/WinJ/KPa5E/eKRu6vR2aLW0bW40slNbfNltGSeGtFgKfL+H+ikG7TSIi8LMJ4TGz0QT20vqqdVHR0wo0yC1ZJarYT1Q8Qsd5YnZ8tWukt+jqtKNhclC/Hpqa4niE2a1WcvopPSjZsj7er4/HF3/lVxA5VyF51fp8S3PxCrX193kdG9UQR7EBcjlGNiOS+gmQJrhL1z68DR0swTSwo++EUEeLuItz9cKboZwOuxTtFwUsiyBdkeL0uzhqNjU3B3kESb6TYa6hMxIWygKwvmtoWx7fIOJ4l4t1anQ0pJM4ppK4W90yQFFwpsfyCiHdMUxdNFa8/KWLqWl98EAcWHVcWb6vxSvE4uH7OxR3VyLx6YKWEzxuFwFlFZUsVdAVOaYqbybL5DMCvZJEYWzxeji4ioD2KhnPEFZfU+RskSbfK8rJWdPVMPdwZvxV3fa3uOhknbLPhGhHe1fhsUfDVuvCSurR/fX6wuOImCZ6OMrIfk11gUdHVU4JrosTzkELnWhHwErRtJCC2VTyyKpxVMD0vuf+khE9nSbJRMsA6Cvcn4ltYIXY7sijYDhdVUYvqnqli1Q+xtMFdkgELJIKvESFNK9jWiQaOwu+LqtZ14UKx8afq4qHioh6ikV6SAWfIqL5IMmazBNwZjViuvYjiGhFjVx/N8Rv/r8NlYp/z6vNukhOj6swwWdcPLySniW3vEG0tF9tfJcvK8Y3E4jhR9mbRwiuynk2Q4bJY1D9JlP6uCPdAUfpQ2XhmSPJdWEVdKlOwUyHUTobS5GpieCOROVZCZTdxwoPV3ZaC+0wR3En1nc2FQG/Z+3qKPo4qBMbIv3pPF219xMZDJEcOkJwZ0xTMw8XPXUSAmyReV0kQLa4H+tbFr8pAek9Euaq6fLMK3rce3mbjYwqdFbKs9K2iz27w+er0UBkucwquqTLnLxORdfDRFOyOPSv3t4g2jpNV++2C9y3JgSGymCyThWaQhFxHdNm2Fb9W0Lwv8/ve+j1RbHWsiKa37HkbJILfkX9UeorYFskCO72Qe1QWlWdkZgyovyeLS85tZDK9LcL5Nf5UnN0ja9b1kmaPF/+zZettXZCPkIEzvYptI7bbIENno4h8nmhtRd1/Knb5Hw9P4P4XMJmbAAAAAElFTkSuQmCC";
