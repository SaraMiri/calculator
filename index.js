const container = document.querySelector(".container");
container.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON"){
  const operating = event.target.innerText;
  const result = document.querySelector(".result");
  result.innerText = operating;

  console.log(`pulsado un ${operating}`);

  switch (operating) {
    case '∁':
    //result.innerText = delete.result;
    break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    
    
   // result.innerText = operating + result;
    break;
    case '+':
    case '÷':
    case '-':
    case '=':
    case '×':
    
   // result.innerText = operating + result;
    break;
    case '∁':
    break;
    case '←':
    break;
     
  }
}
}