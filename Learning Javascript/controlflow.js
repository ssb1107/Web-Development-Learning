// if statement
const temperature = 50
if(temperature <= 50){
   console.log(`Less than 50`);
}
else {
   console.log(`temperature is greater than 50`);
}

const score = 200;
if(score > 100){
     const power = "fly"
     console.log(`User power is ${power}`);
}
// console.log(`User power is ${power}`); It will not execute because of scope.
// But if we use var then it will execute because var is global.
const balance = 400;
if(balance >= 500)
    console.log(`Your balance is greater than 500`);
if(balance >= 500){
    console.log(`Congratulations!`);
}
else if(balance > 800){
    console.log(`Double Congratulations`);
}
else {
    console.log(`Oh no!`);
}

const userLoggedIn = true;
const debitCard = false;
if(userLoggedIn && debitCard){
    console.log(`You can start shopping!`);
}
else { 
    console.log(`You can not shop!`);
}

if(userLoggedIn || debitCard){
    console.log(`You can start shopping!`);
}
else { 
    console.log(`You can not shop!`);
}

// switch case statement
const month = 6;
switch(month){
   case 1: 
   console.log("January");
   break;
   case 2: 
   console.log("February");
   break;
   case 3: 
   console.log("March");
   break;
   case 4: 
   console.log("April");
   break;
   default : console.log("Unknown Month");
}

const userEmail = "hitesh@email.com";
let useremail = []
if(userEmail){
    console.log(`I got user email`);
}
else{
    console.log(`I dont got email`);
}
if(useremail.length === 0){
    console.log(`Array is empty`);
}

let val1;
// Nullish coercion opertor
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = null ?? undefined;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15;
console.log(val1);


// Ternary operator
// condition ? true : false
const iceteaPrice = 150;
(iceteaPrice >= 100) ? console.log(`You cant buy`) : console.log(`You can buy`);