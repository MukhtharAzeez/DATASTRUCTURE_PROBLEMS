class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    addNode(node) {
        let newNode = new Node(node);
        let temp = this.head;
        if (temp == null) {
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    displayList() {
        if (!this.head) return console.log("The linked list is empty");
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    displayReverse() {
        if (!this.head) return console.log("The linked list is empty");
        let currentNode = this.tail;
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.prev
        }
    }
    deleteNode(node){
        if(!this.head) return console.log("The linked list is empty");
        if(this.head.data == node){
            this.head.next.prev = null
            this.head = this.head.next
        }
        let currentNode = this.head
        while(currentNode && currentNode.data!=node){
            currentNode = currentNode.next
        }
        if(!currentNode) return console.log("There is no value present in the list")
        if(!currentNode.next){
            this.tail = currentNode.prev
            currentNode.prev.next = null
            return
        }
        currentNode.prev.next = currentNode.next
        currentNode.next.prev = currentNode.prev
    }

    removeDuplicates() {
        if(!this.head || !this.head.next) return console.log("There is no elements in the list or There is only one element in the list")
        let visited = {}
        visited[this.head.data] = true
        let current = this.head.next;
        
        while (current != null) {
            if(visited[current.data] && current.next){
                current.prev.next = current.next
                current.next.prev = current.prev
            } else if (visited[current.data]){
                this.tail = current.prev
                current.prev.next = null
                current = null
                continue;
            }
            else {
                visited[current.data] = true
            }
            current = current.next
        }
    }
}

const list = new DoublyLinkedList()
list.addNode(1)
list.addNode(4)
list.addNode(9)
list.addNode(10)
list.addNode(9)
list.addNode(10)
list.addNode(1)
list.addNode(4)
list.addNode(9)
list.addNode(1)
list.addNode(4)
list.addNode(9)
list.addNode(1)
list.addNode(4)
list.addNode(9)
// list.deleteNode(9)
list.removeDuplicates()
list.displayList()
console.log("----------------")
list.displayReverse()

