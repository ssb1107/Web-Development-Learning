const user = new Object();
console.log(user);
user.id = 1548756;
user.name = "Sam";
user.isLoggedIn = true;
console.log(user);
const dailyuser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
        name : "Sam",
        surname : "Paul"
        }
    }
}
console.log(dailyuser.fullname.userfullname.name);
console.log(dailyuser);
console.log(dailyuser.fullname);
console.log(dailyuser.fullname.userfullname);
// combining objects
const obj1 = {1 : "a" , 2 : "b" , 3 : "c"};
const obj2 = {4 : "d" , 5 : "e" , 6 : "7"};
const obj3 = {obj1 , obj2};
console.log(obj3);
const obj4 = Object.assign({} , obj1 , obj2);
console.log(obj4);
const obj5 = {...obj1 , ...obj2};
console.log(obj5);

const users = [{
    name : "sherebano" , email : "some@gmail.com"
} , {
    name : "batul " , email: "batul@gmail.com"
}]
console.log(users[0].email);
console.log(Object.keys(dailyuser));
console.log(Object.values(dailyuser));
console.log(Object.entries(dailyuser));
console.log(dailyuser.hasOwnProperty("age"));
console.log(dailyuser.hasOwnProperty("email"));
