// Write a function that takes an array of numbers as input, and 
// returns a new array with only even values. Read about filter in JS

let nums = [];
for(let i = 0; i < 6; i++) {
    let val = prompt("Enter number");
    if (val) {
        nums.push(val);
    }
}

console.log(nums);

let even = nums.filter(num => num%2 === 0);
console.log(even);