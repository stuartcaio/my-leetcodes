function findEvenNumbers(numbers = []){
    return numbers.filter((number) => !(number & 1));
};

console.log(findEvenNumbers([0,1,3,4,6,7,9,10]));