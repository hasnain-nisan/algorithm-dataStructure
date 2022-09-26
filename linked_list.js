console.info('Linked list');

// an object to store a single node of a linked list
//two oattributes data and the next to represent the next node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    //singly linked list
    constructor(head){
        this.head = head; 
    }
    is_empty = () => {
        return this.head == null
    }
    size = () => {
        this.current = this.head;
        this.count = 0;
        while (this.current) {
            this.count++;
            this.current = this.current.next;
        }
        return this.count;
    }
}

let node1 = new Node('nisan');
let node2 = new Node("jahid");
let node3 = new Node("salman");
node2.next = node3
node1.next = node2
let linkedList = new LinkedList(node1)
console.log(JSON.stringify(linkedList));
console.log(linkedList.size())
console.log(linkedList.is_empty());