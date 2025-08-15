/*
    ****************DOM SELECTORS******************
    1. getElementsByTagName
    2. getElementById
    3. getElementsByClassName
    4. querySelector
    5. querySelectorAll
    ***********************************************

    Storing data in variables
*/

// 1. getElementsByTagName
const tagElement = document.getElementsByTagName('h1');
console.log(tagElement.length);

// 2. getElementById
const idElement = document.getElementById('main');
console.log(idElement.innerHTML);

// 3. getElementsByClassName
const classElement = document.getElementsByClassName('cls');
console.log(classElement);
console.log(classElement.length);

// 4. querySelector 
const selectElement = document.querySelector('.cls-1');
console.log(selectElement);
console.log(selectElement.innerHTML);

// If we use to select any same tag or class or id element then, if we have multiple of those elements, only the first one of them will be selected.

const tagSelector = document.querySelector('h1');
console.log(tagSelector);
console.log(tagSelector.innerHTML);

const idSelector = document.querySelector('#main-1');;
console.log(idSelector);
console.log(idSelector.innerHTML);

// 5. querySelectorAll

const allClassSelector = document.querySelectorAll('.cls');
console.log(allClassSelector);

const h1TagSelector = document.querySelectorAll('h1');
console.log(h1TagSelector);
console.log(h1TagSelector.length);

for (let i = 0; i < h1TagSelector.length; i++) {
    console.log(h1TagSelector[i].innerText);
}