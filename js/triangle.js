function drawTriangle(ax, ay, bx, by, cx, cy, style, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.lineTo(cx, cy);
  ctx.lineTo(ax, ay);
  if (style == "fill") {
    ctx.fill();
  } else if (style == "stroke") {
    ctx.stroke();
  } else {
    console.log("style has to be 'stroke' or 'fill'");
  }
  ctx.closePath();
}

function eqlTriangle(x, y, s, style, color, inv) {
  if (inv == null) {
    inv = 1;
  }
  let ax = x;
  let ay = y;
  let bx = x+s;
  let by = y;
  let cx = x+s/2;
  let cy = y+inv*(Math.sqrt(Math.pow(s, 2)-Math.pow(s/2, 2)));
  drawTriangle(ax, ay, bx, by, cx, cy, style, color);
}

function eqlTriangleHeight(s) {
   return (Math.sqrt(Math.pow(s, 2)-Math.pow(s/2, 2)));
}
