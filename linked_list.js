console.info('Linked list');

// an object to store a single node of a linked list
//two oattributes data and the next to represent the next node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node('nisan');
let node2 = new Node("jahid");
node1.next = node2
console.log(node1, node2);