const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);

function onBlur(e) {
  const input1 = e.currentTarget;
  const inputLength = Number(input1.dataset.length);

  // Ustawienie minimalnej wartości czcionki
  input1.style.fontSize = "16px";

  // Ustawienie wartości czcionki na podstawie wartości inputa
  const textElement = document.querySelector("#text");
  textElement.style.fontSize = input1.value + "px";

  if (input1.value.length === inputLength) {
    input1.classList.remove("invalid");
    input1.classList.add("valid");
  } else {
    input1.classList.remove("valid");
    input1.classList.add("invalid");
  }
}
