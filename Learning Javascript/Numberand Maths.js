const score = 400;
// Explicitly Describe datatype of nummber
const balance = new Number(5000);
let another_num = 128.75;
console.log(balance);

console.log(balance.toString()); // Now we get additional properties also
console.log(balance.toFixed(3));
console.log(another_num.toPrecision(4));
const hundred = 10000000;
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));






// Maths - Library default
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.round(5.7));
console.log(Math.floor(3.8));
console.log(Math.sqrt(256));
console.log(Math.min(5,7,8,9));
console.log(Math.max(5,7,8,9));
console.log(Math.random());
console.log((Math.floor(Math.random() * 6)) + 1);
