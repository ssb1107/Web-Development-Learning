function addTwoNumbers(num1,num2){
       return num1 + num2;
}
console.log(addTwoNumbers(5,undefined));
const result = addTwoNumbers(5,9);
console.log(result);
function greeting(username = "batul"){
    console.log(`${username} just logged in`);
}
greeting();
greeting("sherebano");