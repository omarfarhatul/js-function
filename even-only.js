// create function that will return only the even numbers
// return the sum of even numbers

function evenNumbersOnly(numbers){
    for(const number of numbers){
        if(number % 2 ===0){
            console.log(number);
        }
    }
}
const numbers =[3, 5, 23, 21, 6];
evenNumbersOnly(numbers);

// sum of even number
function sumOfevenNumbers(nums){
    let sum=0;
    for(const num of nums){
        if(num%2===0){
            console.log(num);
            sum=sum+num;
        }
    }
    return sum;
}

const nums=[3, 6, 290, 8, 13];
const sum= sumOfevenNumbers(nums);
console.log('sum of the even number is: ', sum);