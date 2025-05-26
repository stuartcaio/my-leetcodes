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

    insert(value){
        if(this.root.current == null){
            this.root = new Node(value);
        } else{
            this.#insertInBranch(value, this.root);      
        };
    };

    #insertInBranch(value, current){
        if(value < current.current){
            if(current.left != null){
                this.#insertInBranch(value, current.left);
            } else{
                current.left = new Node(value);
            }
        } else{
            if(current.right != null){
                this.#insertInBranch(value, current.right);
            } else{
                current.right = new Node(value);
            };
        };
    };

    search(value, current = null){
        if(current == null){
            current = this.root;
        };

        console.log(current)

        if(value > current.current && current.right != null && current.current != value){
            this.search(value, current.right);
        };

        if(value < current.current && current.left != null && current.current != value){
            this.search(value, current.left);
        };
    };

    listItems(currentNode = this.root, result = []){
        if(currentNode){
            result.push(currentNode.current);
            this.listItems(currentNode.left, result);
            this.listItems(currentNode.right, result);
        };

        return result;
    };
};

const numbers = [43, 17, 86, 91, 28, 35, 59, 3, 69, 76, 13, 97, 52, 22, 60, 6, 33, 88, 71, 11];
const binaryTree = new BinaryTree();

for(let i = 0; i < numbers.length; i++){
    binaryTree.insert(numbers[i]);
};

// binaryTree.search(52);
console.log(binaryTree.listItems());