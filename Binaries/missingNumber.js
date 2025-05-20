function missingNumber(numbers = []){
    let missedNumber = 0;

    for(let x = 0; x < numbers.length; x++){
        missedNumber ^= numbers[x];
    };

    for(let y = 0; y <= numbers[numbers.length - 1]; y++){
        missedNumber ^= y;
    };
    
    return missedNumber;
};

console.log(missingNumber([0,1,2,4]));
console.log(missingNumber([0,1,2,3,5]));
console.log(missingNumber([0,1,2,3,4,5,7,8]));