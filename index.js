const container = document.querySelector(".container");
container.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON"){
  const operating = event.target.innerText;
  const result = document.querySelector(".result");
  result.innerText = operating;
  
  switch (operating) {
    case '1':
      result.innerText <= 1;
      break;
    case '2':
      result.innerText = operating;
      // expected output: "Mangoes and papayas are $2.79 a pound.";
      case '3':
      //result.innerText = operating;
      break;
    default:
     // result.innerText = operating;
  }
}
}