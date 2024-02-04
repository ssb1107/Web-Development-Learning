console.log("Testing if javascript is working or not.");
// To create a ecommerce website i want to store the data for a user.
// Let's see how we can do this in JS
// Variable name should be meaningful
// Avoid using var as it have scope issues.

const account_Id = 151226;
let user_name = "Batul";
var city = "Hyderabad";
state = "Telangana"; // This should be avoided at all
// account_Id = 151227;
user_name = "Murtaza";
city = "Pune";
state = "Maharashtra";
let accountState;
console.log(account_Id);
console.table([user_name , city , state , accountState]);