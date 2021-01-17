const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const clearBtn = document.getElementById("clearBtn")
const sierpCarpetBtn = document.getElementById("sierpCarpetBtn")

let size = canvas.width;
let iter = 0;





function sierpCarpet() {
  if (iter < 6) {
    size /=3

    cutMidlle(size);

    function cutMidlle(s) {
      ctx.save();
      for (var i = 0; i < Math.pow(3, iter) ; i++) {
        for (var j = 0; j < Math.pow(3, iter) ; j++) {
          ctx.fillStyle = "white";
          ctx.fillRect(s, s, s, s);
          ctx.translate(s*3, 0)
        }
        ctx.translate(-s*3*Math.pow(3, iter), s*3)
      }
      ctx.restore();
    }
    iter++;
  }
}

sierpCarpetBtn.addEventListener("click", sierpCarpet)
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    size = canvas.width;
    iter = 0;
  }
)
