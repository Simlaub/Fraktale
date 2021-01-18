let carpetSize = canvas.width;
let carpetIter = 0;


function sierpCarpet() {
  if (carpetIter < maxInput.value) {

    function drawFirst() {
      canvas.height = 1000;
      canvas.style.outline = "none"
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

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

    if (carpetIter == 0) {
      clear();
      drawFirst();
    }

    carpetSize /=3;
    cutMidlle(carpetSize);
    carpetIter++;

    if (!singleStep.checked) {
      sierpCarpet();
    }
  }
}
