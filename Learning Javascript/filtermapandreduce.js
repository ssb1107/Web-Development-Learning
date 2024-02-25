let arr = ["panipuri" , "noodles" , "pasta" , "manchurian"];
const values = arr.forEach((item) => {
    console.log(item);
    return item;
});
console.log(values);
const nums = [1,2,3,4,5,6];
let bigNums = nums.filter((num) => {
     return num > 2;
})
console.log(bigNums);
const coding = [{name : "Js" , year : 2003} , {name : "Python" , year : 2004} , {name : "ruby" , year : 2022} , {name : "Js" , year : 2010} , {name: "JS" , year : 2022}];
const codingLang = coding.filter((lang) => {
    return lang.name == "Js"
}).filter((year) => {
    return ((year.year) > 2005);
});
console.log(codingLang);


const add = nums.map((num) => {
     return num + 10;
}).filter((num) => num % 2 == 0);
console.log(add);


const mynums = [1,2,3,4];
let ans = mynums.reduce((acc,currval) => {
    console.log(`${acc} : ${currval}`);
   return acc + currval;
} , 0);
console.log(ans);