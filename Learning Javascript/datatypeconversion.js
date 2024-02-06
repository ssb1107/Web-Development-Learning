let score = 5;
let game_point = "5abc";
console.log(typeof score);
console.log(typeof(score));
console.log(typeof game_point);
console.log(typeof(game_point));
// Convert string to number
let value = Number(game_point);
console.log(value);
console.log(typeof value);
console.log(typeof NaN);
console.log(NaN);
let valueone = null;
let valuetwo = Number(valueone);
console.log(valuetwo);
console.log(typeof valuetwo);
console.log(typeof valueone);
let valuethree = undefined;
let valuefour = Number(valuethree);
console.log(valuefour);
let valuefive = true;
let valuesix = Number(valuefive);
console.log(valuesix);

// converting boolean to string
let boolean = -985;
let another_bool = Boolean(boolean);
console.log(another_bool);

// converting number to string
let num = 33;
let store = String(num);
console.log(store);
console.log(typeof store);