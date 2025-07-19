// Write a function called canVote that returns true or false 
// if the age of a user is > 18

const canVote = (ageOf) => {
    if (ageOf > 18) {
        console.log(`Eligible to vote!!`);
    } else {
        console.log(`Not eligible!!`);
    }
};

let ageBe = Number(prompt("Enter your age."));
canVote(ageBe);