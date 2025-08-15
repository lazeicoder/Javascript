// 1. Select element h4 which holds text of 'Red' by using getElementsByTagName
const h4Element = document.getElementsByTagName('h4');
console.log(`Selected h4 tag element, length is : ${h4Element.length}`);


// 2. Select div with the class of 'green' which holds text (Green) by using getElementsByClassName
const greenDiv = document.getElementsByClassName('green');
console.log(greenDiv[0].innerHTML);


// 3. Select div with the id of 'blue' which holds text (Blue) by using getElementById
const blueDiv = document.getElementById('blue');
console.log(blueDiv.innerHTML);


// 4. Select div which has the class & id of 'yellow' by using querySelector
const yellowClassDiv = document.querySelector('.yellow');
const yellowIdDiv = document.querySelector('#yellow');

console.log(yellowClassDiv.innerHTML);
console.log(yellowIdDiv.innerHTML);


// 5. Select all the elements which has the class of 'teal' by using querySelectorAll

const tealElement = document.querySelectorAll('.teal');
console.log(tealElement);