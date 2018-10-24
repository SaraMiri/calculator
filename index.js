const container = document.querySelector(".container");
container.addEventListener("click", onClick);

let num1 = "";
let num2 = "";
let operator = "";

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    const operating = event.target.innerText;
    const result = document.querySelector(".result");
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
        result.innerText = operating;
        num1 = operating;
        console.log(`Num1: ${num1}`);
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
