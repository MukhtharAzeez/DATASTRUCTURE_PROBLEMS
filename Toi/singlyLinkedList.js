class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    displayList(){
        if(!this.head) return console.log("The linked list is empty");
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    insertNextTo(data, element){
        const newNode = new Node(data)
        if(!this.head) return console.log("The linked list is empty");
        let currentNode = this.head;
        while (currentNode && currentNode.data != element){
            currentNode = currentNode.next
        }
        if(!currentNode) return console.log("The element that you gave is not in the linked list");
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    deleteNode(data){
        if(!this.head) return console.log("The Linked List is empty");
        let currentNode = this.head;
        let prev
        while (currentNode && currentNode.data != data){
            prev = currentNode
            currentNode = currentNode.next
        }
        if(!currentNode) return console.log("The element that you gave is not in the linked list");
        if(currentNode.data == this.head.data){
            this.head = null;
            this.tail = null
            return
        }
        if(currentNode.data == this.tail.data){
            this.tail = prev
            this.tail.next = null
            return
        }
        prev.next = currentNode.next
        currentNode = null
    }
}
const linkedList = new LinkedList();
linkedList.addNode(4)
linkedList.addNode(5)
linkedList.addNode(8)
linkedList.addNode(9)
// linkedList.insertNextTo(10, 4)
// linkedList.insertNextTo(11, 5)
// linkedList.insertNextTo(14, 8)
linkedList.deleteNode(5)
linkedList.displayList()
