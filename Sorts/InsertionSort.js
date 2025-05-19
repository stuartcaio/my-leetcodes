const numbers = [4, 7, 3, 5, 8, 2, 1, 6];

function InsertionSort(numbers = []){
    for(let x = 1; x < numbers.length; x++){
        const currentXValue = numbers[x];

        let y = x - 1;

        while(y >= 0 && numbers[y] > currentXValue){
            [numbers[y + 1], numbers[y]] = [numbers[y], numbers[y + 1]];
            y--;
        };
    };
};

const newSort = InsertionSort(numbers);
console.log(numbers);