console.info('Linked list');

//an object to store a single node of a linked list
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
        // if(typeof head === 'object'){
        //     this.head = head; 
        // } else {
            this.head = new Node(head);
        // }
    }
    
    is_empty = () => {
        return this.head == null
    }

    size = () => {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // search for the first node containing data that matches the input
    // return the node or null
    //takes O(n) time
    search = (data => {
        let current = this.head;
        while(current){
            if(current.data == data){
                return current;
            } else{
                current = current.next;
            }
        }
        return null;
    })

    //add a new node in the haed
    //contastant time O(1) operation
    prepend = (data) => {
        let node = new Node(data)
        node.next = this.head;
        this.head = node
    }

    //add a new node in the tail
    //contastant time O(1) operation
    apend = (data) => {
        let node = new Node(data)
        let current = this.head;
        if (current == null) {
          this.head = node;
          return;
        }
        while (current !== null && current.next !== null) {
          current = current.next;
        }
        current.next = node;
    }

    //inserts a new node containing data at index position
    // insertion takes constant O(1) time but finding the node at index takes O(n) linear time
    //takes overall O (n) time
    insert = (data, index) => {
        if(index == 0){
            this.prepend(data)
        }
        if(index > 0){
            let new_node = new Node(data)
            let current = this.head
            let position = index
            while(position > 1){
                if(current.next){
                    current = current.next;
                    position --
                } else {
                    return null
                }
            }
            let prev = current
            let next = current.next
            prev.next = new_node
            new_node.next = next
        }
    }

    deleteByValue = (val) => {
        return this.search(val);
    }

}

let node1 = new Node('nisan');
let node2 = new Node("jahid");
let node3 = new Node("salman");
node2.next = node3
node1.next = node2
let linkedList = new LinkedList(node1)
linkedList.apend('SOikat')
console.log(JSON.stringify(linkedList));
// console.log(linkedList.size());
// console.log(linkedList.prepend("a"));
// console.log(JSON.stringify(linkedList));
// console.log(linkedList.size());
// console.log(linkedList.prepend("ab"));
// console.log(JSON.stringify(linkedList));
// console.log(linkedList.size());
// console.log(linkedList.prepend("abc"));
// console.log(JSON.stringify(linkedList));
// console.log(linkedList.size());
// console.log(linkedList.is_empty());

let linkedList1 = new LinkedList();
linkedList1.insert('a', 5)
console.log(JSON.stringify(linkedList1));
linkedList1.insert('0a', 0);
console.log(JSON.stringify(linkedList1));
linkedList1.insert("0aa", 1);
console.log(JSON.stringify(linkedList1));
linkedList1.insert("0aaa", 2);
console.log(JSON.stringify(linkedList1));
linkedList1.apend('assa')
console.log(JSON.stringify(linkedList1));
console.log(linkedList1.insert("0aaa20", 20))
console.log(linkedList1.search('0a'));
