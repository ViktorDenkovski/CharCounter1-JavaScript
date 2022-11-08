let inputElement = document.querySelector("input");
// console.dir(inputElement);

let spanElementCounter = document.querySelector(".counter").textContent;
// console.dir(spanElementCounter);

let spanElementPara = document.querySelector('.counter');
// console.dir(spanElementPara);

function retreiveUserInput(event) {
  let enteredText = event.target.value;
  
  let count = spanElementCounter - enteredText.length;
  //   console.log(count);
  document.querySelector(".counter").textContent = count;

  if (count <= 10) {
    inputElement.style.backgroundColor = "rgb(250, 127, 127)";
    spanElementPara.style.color = "rgb(250, 127, 127)";
  } else {
    inputElement.style.backgroundColor = "";
    spanElementPara.style.color = "";
  }
}

inputElement.addEventListener("input", retreiveUserInput);
