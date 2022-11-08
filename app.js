//Changing paragraph text on click

let paragraphElement = document.querySelector("p");
console.dir(paragraphElement);

function changeParagraphText(event) {
  if (paragraphElement.textContent == "Click me!") {
    paragraphElement.textContent = "Clicked";
    console.log("Paragraph clicked!");
  } else {
    paragraphElement.textContent = "Click me!";
    console.log("Paragraph clicked again!");
  }
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");
console.dir(inputElement);

function retreiveUserInput(event) {
  //   let enteredText = inputElement.value; //always gives the full value that is entered
  let enteredText = event.target.value; //same as above, but extracting the data value from the input
  //   let enteredText = event.data; //=> different thant both above - returns single keystroke value character input
  console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener("input", retreiveUserInput);
