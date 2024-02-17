function calculateCartPrice(...num){
        return num;
}
function totalCart(...num){
    let items = [...num]
    let sum = 0;
    for(let i = 0 ; i < items.length ; i++){
        sum += items[i];
    }
    return sum;
}
console.log(calculateCartPrice(500,800,7600,85,41));
console.log(totalCart(500,800,56,74,799));
const user = {
    username : "hitesh",
    price : 5000000
}
function handleObject(obj){
     console.log(`Username is ${obj.username}`);
}
console.log(handleObject(user));