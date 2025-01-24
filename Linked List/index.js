class Node{
    value;
    previous;
    next;

    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    };
};

class DoublyLinkedList{
    head;
    tail;

    constructor(){
        this.head = null;
        this.tail = null;
    };

    addItemInStart(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        
        if(this.head){
            this.head.previous = newNode;
        } else{
            this.tail = newNode;
        };

        this.head = newNode;
    };

    addItemInEnd(value){
        const newNode = new Node(value);
        newNode.previous = this.tail;

        if(this.tail){
            this.tail.next = newNode;
        } else{
            this.head = newNode;
        };

        this.tail = newNode;
    };
    
    removeItemInStart(){
        this.head = this.head.next;
        this.head.previous = null;
    };

    removeItemInEnd(){
        this.tail = this.tail.previous;
        this.tail.next = null;
    }
};

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.addItemInEnd(1);
doublyLinkedList.addItemInEnd(2);
doublyLinkedList.addItemInEnd(3);
doublyLinkedList.addItemInStart(4);
doublyLinkedList.addItemInStart(5);
doublyLinkedList.removeItemInStart();
doublyLinkedList.removeItemInEnd();

console.log(doublyLinkedList.head.value, doublyLinkedList.head.next.value, doublyLinkedList.head.next.next.value);
console.log(doublyLinkedList.tail.value, doublyLinkedList.tail.previous.value, doublyLinkedList.tail.previous.previous.value);