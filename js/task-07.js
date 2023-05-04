const myInput = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");

function onInput() {
  myText.style.fontSize = myInput.value + "px";
}

window.onload = function () {
  myText.style.fontSize = myInput.value + "px";
  myInput.addEventListener("input", onInput);
};
