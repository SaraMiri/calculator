const container = document.querySelector(".container");
container.addEventListener("click", onClick);

function onClick (event) {
  const operating = event.target.innerText;
  const result = document.querySelector(".result");
  result.innerText = operating;
}