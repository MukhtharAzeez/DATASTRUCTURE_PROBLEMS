class Node{
    constructor(data,next = null,prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;   
    };
}

class LinkedList{
    addNode(data){
        let newNode = new Node(data);
        let temp = this.head;
        if(temp==null){
            this.head = newNode;
        }else{
            newNode.prev=this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    displayList(){
        let temp = this.head;
        if(temp==null){
            console.log("Linked List is empty");
            return;
        }
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next;
        }
    }
    
    displayReverse(){
        let temp = this.tail;
        if(temp==null){
            console.log("Linked List is empty");
            return;
        }
        
        while(temp!=null){
            console.log(temp.data)
            temp=temp.prev;
        }
    }

    deleteNode(data){
        let temp = this.head;

        if(temp==null){
            console.log("The linked list is empty");
            return;
        }else if(temp.data==data){
            this.head.next.prev = null;
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
            temp.next.prev=prev;
            prev.next=temp.next;
        }else{
            console.log("The entered element is not in the list");
        }
        
    }

    insertAfter(nextTo,data){
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
            newNode.prev=this.tail;
            this.tail = newNode;
            return;
        }
        
        newNode.next = temp.next;
        newNode.prev=temp;
        temp.next.prev=newNode;
        temp.next = newNode;
    }

    insertBefore(beforeTo,data){
        let newNode = new Node(data)
        let temp = this.head;
        if(temp==null){
            console.log("The list is empty");
            return;
        }
        while(temp!=null && temp.data!=beforeTo){
            temp = temp.next;
        }
        if(temp==null){
            console.log("There is no data that matches the data you passed");
            return;
        }
        if(temp.prev==null){
            temp.prev = newNode;
            newNode.prev=null;
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        
        temp.prev.next = newNode;
        newNode.prev = temp.prev;
        newNode.next=temp;
        temp.prev=newNode;
    }

    removeDuplicates(){
        let current = this.head;

        while(current!=null){
            let next = current.next;
            while( next!=null && current.data == next.data ){
                next = next.next;
            }
            if(next==null){
                this.tail = current;
                this.tail.next=null;
                current = null;
                return;
            }
            current.next=next;
            current.next.prev = current;
            if(current==this.tail){
                this.tail = current;
                this.tail.next=null;
            }
            current = next;
        }
    }
}

let l = new LinkedList();
l.addNode(10);
l.addNode(20);
l.addNode(30);
l.addNode(40);
// l.addNode(20)


// l.insertAfter(20,50)
// l.displayList();
// l.deleteNode(30)
// console.log("-----------List After Deleting------------");
// l.displayList();
// l.removeDuplicates();
// l.displayList();

// l.insertAfter(20,40)
// console.log('------------------------')
l.displayList();
console.log('------------List Printing in Reverse Order------------')
l.displayReverse();