// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a 
// number and see what happens?

function sum (num1, num2) {
    let val = num1+num2;
    console.log(val);
}

const sum2 = (num1, num2) => {
    let val = num1+num2;
    console.log(val);
};

let n1 = Number(prompt("Enter 1st number"));
let n2 = Number(prompt("Enter 2nd number"));

sum2(n1, n2);

