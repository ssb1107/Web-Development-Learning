const gameName ="        shere-b-a-n-o                     ";
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
const newstr = gameName.substring(5,8);
console.log(newstr);
console.log(gameName.slice(-9,5));
// console.log(gameName.trim());
let trimmed = gameName.trim();
console.log(trimmed);
console.log(gameName.replace("ere" , "ERE"));
console.log(gameName.includes('z'));
console.log(gameName.split('-'));