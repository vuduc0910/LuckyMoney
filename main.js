const rotation = document.getElementById("rotation");
const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
var target = 0;
var array = [];
for (i = 0; i < 100; i++) {
  array.push(i);
}
function rotationDuration() {
  setTimeout(() => {
    rotation.style.setProperty("animation-duration", `1000ms`);
  }, 5000);
  setTimeout(() => {
    rotation.style.setProperty("animation-duration", `1500ms`);
  }, 11000);
  setTimeout(() => {
    rotation.style.setProperty("animation-duration", `2000ms`);
  }, 17000);
  setTimeout(() => {
    rotation.style.setProperty("animation-duration", `2500ms`);
  }, 23000);
  setTimeout(() => {
    rotation.style.setProperty("animation-duration", `0ms`);
  }, 33000);
}
btn.addEventListener("click", (e) => {
  if (target == 0) {
    rotation.style.setProperty("animation-duration", `500ms`);
    modal.style.setProperty("display", "none");
    // let x = e.clientX - e.target.offsetLeft;
    // let y = e.clientY - e.target.offsetTop;
    let x = e.layerX;
    let y = e.layerY + 20;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px ";
    btn.appendChild(ripples);
    target = 1;
    setTimeout(() => {
      ripples.remove();
    }, 1000);
    setTimeout(() => {
      target = 0;
    }, 33000);
    rotationDuration();
    setTimeout(() => {
      modal.style.setProperty("display", "block");
      handleRotation();
    }, 32500);
  }
});

function randomRotation() {
  const location = Math.floor(Math.random() * (array.length - 1));
  const result = array[location];
  array[location] = array.pop();
  if (result < 60) {
    return "Trượt rồi";
  } else if (result > 60 && result < 80) {
    return "10000";
  } else if (result < 95) {
    return "20000";
  } else if (result < 98) {
    return "100000";
  } else if (result < 99) {
    return "200000";
  } else {
    return "500000";
  }
}
function handleRotation() {
  const result = randomRotation();
  const p = document.createElement("p");
  p.classList = "modalContent";
  p.innerText = `${result} nè`;
  modal.appendChild(p);
}
btnClose.addEventListener("click", () => {
  children = modal.children;
  children[1].remove();
  modal.style.setProperty("display", "none");
});
