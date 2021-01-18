const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const singleStep = document.getElementById("singleStep")
const clearBtn = document.getElementById("clearBtn");
const sierpCarpetBtn = document.getElementById("sierpCarpetBtn");
const sierpTriangleBtn = document.getElementById("sierpTriangleBtn");

let carpetSize = canvas.width;
let carpetIter = 0;

let triangleSize = canvas.width;
let triangleIter = 0;

let max = 6;

window.onload = () => singleStep.checked = false;

function sierpCarpet() {
  if (carpetIter < max) {
    carpetSize /=3;

    cutMidlle(carpetSize);

    function cutMidlle(s) {
      ctx.save();
      for (var i = 0; i < Math.pow(3, carpetIter) ; i++) {
        for (var j = 0; j < Math.pow(3, carpetIter) ; j++) {
          ctx.fillStyle = "white";
          ctx.fillRect(s, s, s, s);
          ctx.translate(s*3, 0);
        }
        ctx.translate(-s*3*Math.pow(3, carpetIter), s*3);
      }
      ctx.restore();
    }
    carpetIter++;

    if (singleStep.checked == false) {
      sierpCarpet();
    }
  }
}

function drawTriangle(ax, ay, bx, by, cx, cy) {
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.lineTo(cx, cy);
  ctx.lineTo(ax, ay);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function eqlTriangle(x, y, s, inv) {
  if (inv == null) {
    inv = 1;
  }
  let ax = x;
  let ay = y;
  let bx = x+s;
  let by = y;
  let cx = x+s/2;
  let cy = y+inv*(Math.sqrt(Math.pow(s, 2)-Math.pow(s/2, 2)));
  drawTriangle(ax, ay, bx, by, cx, cy);
}

function sierpTriangle() {
  triangleSize /=3;
  eqlTriangle(triangleSize, triangleSize, triangleSize);
}

sierpCarpetBtn.addEventListener("click", sierpCarpet)
sierpTriangleBtn.addEventListener("click", sierpTriangle)

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    size = canvas.width;
    iter = 0;
  }
)
