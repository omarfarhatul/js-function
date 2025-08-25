function doubleIt(num){
    const doubled = num*2;
    console.log(num, doubled);
}
console.log('I will call the function')
doubleIt(64);
console.log('---------')
doubleIt(87);
console.log('---------')
doubleIt(23);

const num = 33;
doubleIt(num);
const money=145;
doubleIt(money);


// difference
function difference(n1, n2){
    const diff = n1-n2;
    console.log(n1, n2, 'difference is: ', diff);
}
const fatherAge=50;
const myAge=25;
difference(fatherAge, myAge);