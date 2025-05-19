const numbers = [4, 7, 3, 5, 8, 2, 1, 6];

function SelectionSort(numbers = []){
    for(let x = 0; x < numbers.length - 1; x++){
        let smallerNumber = undefined;

        for(let y = x; y < numbers.length; y++){
            if(numbers[y] < numbers[smallerNumber] || smallerNumber == undefined){
                smallerNumber = y;
            };
        };

        if(smallerNumber){
            [numbers[x], numbers[smallerNumber]] = [numbers[smallerNumber], numbers[x]];
        };
    };
};

const newSort = SelectionSort(numbers);
console.log(numbers);