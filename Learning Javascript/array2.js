const like = ["Panipuri" , "Noodles" , "Pasta" , "Manchurian"];
const unlike = ["biryani" , "Khurdi" , "Akhni"]
// console.log(like.push(unlike));
console.log(like);
// console.log(like[4][2]);
let all = like.concat(unlike)
console.log(all);
console.log(all[5]);

let food = [...like , ...unlike];
console.log(food);
const arr = [1,2,3,[4,5,6],7,[8,9,[54,49]],[4,5]];
const use = arr.flat(Infinity);
console.log(use);

console.log(Array.isArray("hitesh"));
// converting to array
console.log(Array.from("Sherebano")); 
console.log(Array.from({name : "sherebano" , age : 17})); // It gives an empty object

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));