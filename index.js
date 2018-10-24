const container = document.querySelector(".container");
container.addEventListener("click", onClick);

const result = document.querySelector(".result");

let num1 = "";
let num2 = "";
let operator = "";

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    const operating = event.target.innerText;
    console.log(`pulsado un ${operating}`);

    switch (operating) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleNumbers(operating);
        break;
      case "+":
      case "÷":
      case "-":
      case "×":
        break;
      case "∁":
        break;
      case "←":
        break;
      case "=":
        break;
    }
  }
}

function handleNumbers(numberString) {
  num1 = numberString;
  result.innerText = numberString;
  console.log(`Num1: ${num1}`);
}
