// Object literals
const mysym1 = Symbol("key1");
const jsuser = {
    naam : "Sherebano" ,
    "full name" : "Sherebano Shabbir Burhani",
    age : 18 , 
    location : "Hyderabad",
    email :"sherebanoburhani6@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays : ["Mon",'Tue'],
    [mysym1] : 1050
};
console.log(jsuser["naam"]);
console.log(jsuser.email);
console.log(jsuser["full name"]);
console.log(typeof jsuser[mysym1]);
console.log(typeof mysym1);
jsuser.age = 22;
console.log(jsuser);
jsuser.greeting = function(){
 console.log(`Hello ${this["full name"]} . Your age is ${this.age}`);
}
console.log(jsuser.greeting());
Object.freeze(jsuser);
jsuser.email = "jamilashab@attalim.net";
console.log(jsuser);