function eat(){
    console.log('Please, hand wash.');
    console.log('I eat rice.');
}
eat();


// square function
function square (number){
    console.log(number);
    console.log('value of the number parameter: ', number);
    const squ = number*number;
    console.log('Square of the number is: ', squ);
}
square(6);
console.log('------------');
square(34);

// 2 number add
function add(n1, n2){
    const sum=n1+n2;
    console.log(sum);
}
add(6, 99);


// 5 number add
function addall(a, b, c, d, e){
    const sum=a+b+c+d+e;
    console.log(sum);
}
addall(6, 99, 44, 2, 65);
