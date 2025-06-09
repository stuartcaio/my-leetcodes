const BLACK = 0;
const RED = 1;

class Node{
    current;
    color;
    parent;
    left;
    right;

    constructor(current = null, color = BLACK, parent = null, left = null, right = null){
        this.current = current;
        this.color = color;
        this.parent = parent;
        this.left = left;
        this.right = right;
    };
};

class RedBlackTree{
    root;

    constructor(){
        this.root = new Node();
    };

    insert(value){
        if(this.root.current == null){
            this.root = new Node(value, BLACK);
        } else{
            this.#insertInBranch(value, this.root);      
        };
    };

    #insertInBranch(value, current){
        if(value < current.current){
            if(current.left != null){
                this.#insertInBranch(value, current.left);
            } else{
                current.left = new Node(value, RED, current);

                if(current.color == RED && current.parent.right == null){
                    this.#rotateLeft(current)
                };

                if(current.color == RED && current.parent.right.color == RED){
                    current.color = BLACK;
                    current.parent.right.color = BLACK;
                };
            };
        } else{
            if(current.right != null){
                this.#insertInBranch(value, current.right);
            } else{
                current.right = new Node(value, RED, current);

                this.#changeColors(current);

                if(current.color == RED && current.parent.left == null){
                    this.#rotateRight(current)
                };
            };
        };
    };

    #changeColors(currentNode){
        const parentHasTwoChilds = ![currentNode.parent.left, currentNode.parent.right].includes(null);

        if(currentNode.color == RED && (parentHasTwoChilds && currentNode.parent.left.color == RED && currentNode.parent.right.color == RED)){
            currentNode.parent.right.color = BLACK;
            currentNode.parent.left.color = BLACK;
            currentNode.parent.color = RED;

            if(currentNode.parent.parent.color == RED){
                this.#changeColors(current.parent)
            }
        };
    };

    #rotateLeft(node){        
        const parent = node.parent;

        node.parent = {...node, color: BLACK};
        node.parent.right = {...parent, parent: node.parent, color: RED};
        node.parent.left = {...node.left, left: null, right: null, color: RED};

        if(node.parent.color == RED && (node.parent.parent != null && node.parent.parent.color == RED)){
            this.#rotateLeft(node);
        };
    };

    #rotateRight(node){        
        const parent = node.parent;

        node.parent = {...node, color: BLACK};
        node.parent.left = {...parent, parent: node.parent, color: RED};
        node.parent.right = {...node.right, left: null, right: null, color: RED};
        
        if(node.parent.color == RED && (node.parent.parent != null && node.parent.parent.color == RED)){
            this.#rotateRight(node);
        };
    };

    search(value, current = null){
        if(current == null){
            current = this.root;
        };

        console.log(value, current.current)

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
const redBlackTree = new RedBlackTree();

for(let i = 0; i < numbers.length; i++){
    redBlackTree.insert(numbers[i]);
};

redBlackTree.search(52);
// console.log(redBlackTree.listItems());