const container = document.querySelector(".container");
container.addEventListener("click", onClick);

const result = document.querySelector(".result");

let num1 = "";
let num2 = "";
let operator = "";

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    const operating = event.target.innerText;
    //console.log(`pulsado un ${operating}`);

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
      case "−":
      case "×":
        handleOperators(operating);
        break;
      case "∁":
        operatorC();
        break;
      case "←":
        arrow();
        break;
      case "=":
        equalButton();
        break;
    }
  }
}

function handleNumbers(numberString) {
  if (operator === "") {
    num1 = num1 + numberString;
    result.innerText = num1;
  } else {
    num2 = num2 + numberString;
    result.innerText = num2;
  }

  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);
}

function handleOperators(operatorString) {
  operator = operatorString;
  console.log(`operator: ${operator}`);
}

function equalButton() {
  let numberResult;

  switch (operator) {
    case "+":
      numberResult = parseInt(num1) + parseInt(num2);
      break;
    case "−":
      numberResult = parseInt(num1) - parseInt(num2);
      break;
    case "×":
      numberResult = parseInt(num1) * parseInt(num2);
      break;
    case "÷":
      numberResult = parseInt(num1) / parseInt(num2);
      break;
  }

  result.innerText = String(numberResult);
  num1 = String(numberResult);
  num2 = "";
  operator = "";
}

function operatorC() {
  num1 = "";
  num2 = "";
  operator = "";
  result.innerText = "0";
}

function arrow() {
  if (operator === "") {
    num1 = deleteLastCharFrom(num1);
    if (num1 === "") {
      result.innerText = "0";
    } else {
      result.innerText = num1;
    }
  } else {
    num2 = deleteLastCharFrom(num2);
    if (num2 === "") {
      result.innerText = "0";
    } else {
      result.innerText = num2;
    }
  }
}

function deleteLastCharFrom(numberString) {
  return numberString.slice(0, numberString.length - 1);
}
