function duplicateNumber(numbers = []){
    return numbers.map((number) => number <<= 1);
};

console.log(duplicateNumber([0,1,3,4,6,7,9,10]));