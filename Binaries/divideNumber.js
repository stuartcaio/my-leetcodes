function divideNumber(numbers = []){
    return numbers.map((number) => number >>= 1);
};

console.log(divideNumber([0,2,4,6,8,10]));