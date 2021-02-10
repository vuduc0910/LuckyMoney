const rotation = document.getElementById("rotation");
const btn = document.getElementById('btn');
function rotationDuration() {
  var i = 2;
  while (i <= 10) {
    (function (i) {
      setTimeout(function () {
        rotation.style.setProperty("animation-duration", `${i * 500}ms`);
      }, 3000 * i);
    })(i++);
  }
}
btn.addEventListener("click",(e)=>{
    rotation.style.setProperty("animation-duration", `${1 * 500}ms`);
    console.log(e);
    // let x = e.clientX - e.target.offsetLeft;
    // let y = e.clientY - e.target.offsetTop;
    let x = e.layerX;
    let y = e.layerY+20;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px ";
    btn.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove();
    },1000);
    rotationDuration();
});

