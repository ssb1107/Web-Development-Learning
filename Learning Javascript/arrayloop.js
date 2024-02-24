// for of loop
let arr = ["panipuri" , "noodles" , "pasta" , "manchurian"];
const user = {name : "sherebano" , age: 18 , married : true}; 
for (const key of arr) {
    console.log(key);
}
// for (const [key,value] of object) {
//     console.log(`${key}  : ${value}`);
// }
const map = new  Map();
map.set('IN' , "India");
map.set('US' , 'United States of America');
map.set('Fr' , "France");
console.log(map);
for(const [key , value] of map){
    console.log(`${key}  : ${value}`);
}
// for in loop
for (const key in user) {
    console.log(`${key}  : ${user[key]}`);
}
for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}
// for(const key in map){
//     console.log(key);
// }
// for each loop
arr.forEach(element => {
    console.log(element);
});
function printMe(item){
    console.log(item);
}
arr.forEach(printMe);
arr.forEach((item , index , arr) => {
    console.log(item , index , arr);
})

const coding = [{name : "Js" , year : 2003} , {name : "Python" , year : 2004} , {name : "ruby" , year : 2022}];
coding.forEach((item) => {
  console.log(item.name);
  console.log(item.year);
});