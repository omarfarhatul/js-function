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