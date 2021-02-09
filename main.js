const rotation = document.getElementById("rotation");
function rotationDuration() {
  var i = 1;
  while (i <= 10) {
    (function (i) {
      setTimeout(function () {
        rotation.style.setProperty("animation-duration", `${i * 500}ms`);
      }, 3000 * i);
    })(i++);
  }
}
rotationDuration();
