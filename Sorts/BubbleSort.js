function bubbleSort(arr){
    let currentSize = arr.length;

    for(let x = 0; x < currentSize; x++){
        let isSorted = true;

        for(let y = 0; y < currentSize - x - 1; y++){
            if(arr[y] > arr[y + 1]){
                [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]];
                isSorted = false;
            };
        };

        if(isSorted){
            return arr;
        };
    };

    return arr;
};

const numbers = [5, 3, 8, 4, 2];

console.log(bubbleSort(numbers))