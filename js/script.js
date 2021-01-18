const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const maxInput = document.getElementById("maxInput")
const singleStep = document.getElementById("singleStep")
const clearBtn = document.getElementById("clearBtn");
const sierpCarpetBtn = document.getElementById("sierpCarpetBtn");
const sierpTriangleBtn = document.getElementById("sierpTriangleBtn");

window.onload = () => singleStep.checked = true; maxInput.value = 6;




sierpCarpetBtn.addEventListener("click", sierpCarpet)
sierpTriangleBtn.addEventListener("click", sierpTriangle)

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  carpetSize = canvas.width;
  carpetIter = 0;
  triangleSize = canvas.width;
  triangleIter = 0;
  canvas.style.outline = "solid black"
}

clearBtn.addEventListener("click", clear)
