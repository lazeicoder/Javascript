let user = {
    userName: "",
    age: 0,
    gender: "", 
    maritalStat: false
};

user.userName = prompt("Enter your name: ");
user.age = prompt("Enter your age: ");
user.gender = confirm("Male denotes Ok\nFemale denotes Cancel");

if (user.gender === true) {
    console.log(`Hello Mr.${user.userName}, congrats on turning ${user.age} years!!`);
}else {
    user.maritalStat = confirm("Married === true\nSingle === false");
    if (user.maritalStat === true) {
        console.log(`Hello Mrs.${user.userName}, congrats on turning ${user.age} years!!`);
    }else {
        console.log(`Hello Ms.${user.userName}, congrats on turning ${user.age} years!!`);
    }
}

if (user.age >= 18) {
    console.log(`Eligible for vote!!`);
}else {
    console.log(`Not Eligible!!`);
}

