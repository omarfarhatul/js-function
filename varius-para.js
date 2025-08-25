// for a given string tell me whether it has even number of characters or not
function evenSizeString(str){
    const size = str.length;
    if(size %2 ===0){
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
    console.log(str, size);
}
evenSizeString('Dhaka');
evenSizeString('faka');


// double
function doubleOrTriple(num, doDouble){
    if(doDouble === true){
        const result = num*2;
        return result;
    }
    else{
        const result = num*3;
        return result;
    }
}
console.log(doubleOrTriple(3, true));
console.log(doubleOrTriple(3, false));


function numOfElements(numbers){
    const len=numbers.length;
    return len;
}
numOfElements([12, 34, 54, 6, 234]);

function getAge(person){
    const age=person.age;
    return age;
}