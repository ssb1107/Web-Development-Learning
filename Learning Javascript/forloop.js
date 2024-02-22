// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 2){
        console.log('I will skip 2');
        continue;
    }
    if(element == 5){
        console.log("5 is best number");
        break;
    }
    console.log(element);
}