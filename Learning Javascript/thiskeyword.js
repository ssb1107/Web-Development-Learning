const user = {
    username : "Sherebano",
    price : 999,
    welcome : function(){
          console.log(`Hello ${this.username}`);
          console.log(this);
    }
}
console.log(user.welcome());
console.log(this);
function chai(){
    this.username = "hitesh";
    console.log(this.username);
    console.log(this);
}
chai();
const tea = () => {
 console.log(this);
}
tea();