const numbers = [4, 7, 3, 5, 8, 2, 1, 6];

function QuickSort(numbers = [], start, end){
    if(start < end){
        const pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
        const pivot = numbers[pivotIndex];
    
        [numbers[pivotIndex], numbers[end]] = [numbers[end], numbers[pivotIndex]];
    
        let x = start - 1;

        for(let y = start; y < end; y++){
            if(numbers[y] < pivot){
                x++;
                [numbers[x], numbers[y]] = [numbers[y], numbers[x]];
            };
        };

        [numbers[x+1], numbers[end]] = [numbers[end], numbers[x+1]];

        QuickSort(numbers, start, pivot - 1);
        QuickSort(numbers, pivot + 1, end);
    };
};

const newSort = QuickSort(numbers, 0, numbers.length - 1);
console.log(numbers);