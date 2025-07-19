// Write a function that takes an array of users as inputs and 
// returns only the users who are more than 18 years old

let users = [];

for(let i = 0; i < 5; i++) {
    let nameIs = prompt("Enter your name");
    let ageIs = prompt("Enter your age");

    users.push({userName: `${nameIs}`, userAge: `${ageIs}`});
}

console.log(users);

let eligible = users.filter(user => user.userAge >= 18);

console.log(eligible);