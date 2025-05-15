const numbers = [4, 7, 3, 5, 8, 2, 1, 6];

function MergeSort(numbers = []){
    if(numbers.length > 1){
        const middle = parseInt(numbers.length / 2);
        const leftArray = numbers.slice(0, middle);
        const rightArray = numbers.slice(middle, numbers.length);
    
        MergeSort(leftArray);
        MergeSort(rightArray);
        newMerge(numbers, leftArray, rightArray);
    };

    return numbers;
};

function newMerge(numbers = [], leftArray = [], rightArray = []){
    let x = 0;
    let y = 0;
    let currentIndex = 0;

    while(x < leftArray.length && y < rightArray.length){
        if(leftArray[x] < rightArray[y]){
            numbers[currentIndex] = leftArray[x];
            x++;
        } else{
            numbers[currentIndex] = rightArray[y];
            y++;
        };

        currentIndex++;
    };

    while(x < leftArray.length){
        numbers[currentIndex] = leftArray[x];
        x++;
        currentIndex++;
    };

    while(y < rightArray.length){
        numbers[currentIndex] = rightArray[y];
        y++;
        currentIndex++;
    };
};

const newSort = MergeSort(numbers);
console.log(newSort);