// console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href='https://google.com'

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://linkedin.com';

//ADD AN ELEMENT
//1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.text = 'This link leads to Google!'

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
//1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

//2. Remove the element

firstH1Element.remove(); //better and shorter
//Alternative way
// firstH1Element.parentElement.removeChild(firstH1Element); //for older browsers

//MOVE EXISTING ELEMENT AROUND
//we will use the first variable above
firstParagraph.parentElement.append(firstParagraph);

//innerHTML change element only to innerHTML element
//addes a mixure of text and html elements

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi this is <strong>important!</strong>' + ' ' +
'add another value string';