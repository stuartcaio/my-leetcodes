class Node{
    current;
    left;
    right;

    constructor(current = null, left = null, right = null){
        this.current = current;
        this.left = left;
        this.right = right;
    };
};

class BinaryTree{
    root;
    
    constructor(){
        this.root = new Node();
    };
    
    create(list = []){
        const leftTree = new BinaryTree();
        const rightTree = new BinaryTree();

        if(!rightTree.root.current){
            rightTree.root.current = list[0].count + list[1].count;
        };

        if(!leftTree.root.current){
            leftTree.root.current = list[2].count + list[3].count;
        };

        for(let i = 4; i < list.length - 1; i++){
            if(i % 2 == 0){
                leftTree.root = new Node(list[i].count + leftTree.root.current, list[i].item, leftTree.root);
            } else{
                rightTree.root = new Node(list[i].count + rightTree.root.current, rightTree.root, list[i].item);
            };
        };

        this.root = new Node(leftTree.root.current + rightTree.root.current, leftTree.root, rightTree.root);

        console.log(this.root);
    };
};

function orderByRepeat(letters = []){
    const newArray = [];

    letters.forEach((letter) => {
        const newArrayItems = newArray.map((item) => item.item);

        if(!newArrayItems.includes(letter)){
            newArray.push({item: letter, count: 1});
        } else{
            const indexOfRepeatedItem = newArrayItems.findIndex((item) => item == letter);
            newArray[indexOfRepeatedItem].count++;
        };
    });

    return newArray.sort((a, b) => a.count - b.count);
};


const letters = "AAABBCDDEFFFGHHHHHIJJJJKKLMMNOOPQQQQR".split("");
const binaryTree = new BinaryTree();
binaryTree.create(orderByRepeat(letters));