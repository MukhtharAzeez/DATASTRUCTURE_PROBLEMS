class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
   
    // constructor(){
    //     let head = null;
    //     let tail = null;
    // }

    addNode(data){
        let newNode = new Node(data)
        if(this.head==null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail=newNode;
    }

    displayList(){
        if(this.head==null){
            console.log("Linked List is empty")
        }

        let temp = this.head;
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next;
        }
    }

    deleteNode(data){
        let temp = this.head;

        if(temp==null){
            console.log("The linked list is empty");
            return;
        }else if(temp.data==data){
            this.head = this.head.next;
            return;
        }

        let prev
        while(temp!=null && temp.data!=data){
            prev=temp
            temp=temp.next;
        }

        if(temp!=null && temp.next==null){
            this.tail= prev;
            this.tail.next=null;
        }else if(temp!=null){
            prev.next=temp.next;
        }else{
            console.log("The entered element is not in the list");
        }
        
    }

    insertNode(nextTo,data){
        let newNode = new Node(data)
        let temp = this.head;
        if(temp==null){
            console.log("The list is empty");
            return;
        }
        while(temp!=null && temp.data!=nextTo){
            temp = temp.next;
        }
        if(temp==null){
            console.log("There is no data that matches the data you passed");
            return;
        }
        if(temp.next==null){
            temp.next = newNode;
            this.tail = newNode;
            return;
        }
        
        newNode.next = temp.next;
        temp.next = newNode;
    }
}

let l = new LinkedList()
l.addNode(10)
l.addNode(20)
l.addNode(30)
l.addNode(40)

// l.deleteNode(40)
l.insertNode(40,40)
l.displayList()
