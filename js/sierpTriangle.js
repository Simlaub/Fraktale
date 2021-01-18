let triangleSize = canvas.width;
let triangleIter = 0;
let triangleHeight = eqlTriangleHeight(canvas.width);

function sierpTriangle() {

  function drawFirst(){
    canvas.height = triangleHeight
    eqlTriangle(0, canvas.height, canvas.width, "fill", "black", -1)
    canvas.style.outline = "none"
  }

  function cutMiddle(s) {
    eqlTriangle(s/4, triangleHeight/2, s/2, "fill", "white");
  }

  if (triangleIter == 0) {
    clear();
    drawFirst();

  }

  cutMiddle(canvas.width);
}
