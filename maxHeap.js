class MaxHeap {
    constructor(array) {
        if (array) {
            this.heap = array
        } else {
            this.heap = []
        }
    }
    shiftUp(currentIndex) {
        let parentIndex = this.parent(currentIndex)
        while (currentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex
            parentIndex = this.parent(currentIndex)
        }
    }
    shiftDown(currentIndex){
        let leftChild = this.leftChild(currentIndex)
        let rightChild = this.rightChild(currentIndex)
        while(currentIndex < this.heap.length){
            let indexToShift
            if(this.heap[rightChild]>this.heap[leftChild]){
                indexToShift = rightChild
            }else{
                indexToShift = leftChild
            }
            if(this.heap[indexToShift]>this.heap[currentIndex]){
                this.swap(indexToShift, currentIndex)
                currentIndex = indexToShift
                leftChild = this.leftChild(currentIndex)
                rightChild = this.rightChild(currentIndex)
            }else{
                return
            }
        }
    }
    insert(node) {
        this.heap[this.heap.length] = node
        this.shiftUp(this.heap.length - 1)
    }
    delete() {
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.length--
        this.shiftDown(0)
    }
    parent(i) {
        return parseInt((i - 1) / 2)
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    }
    swap(indexOne, indexTwo) {
        let temp = this.heap[indexTwo]
        this.heap[indexTwo] = this.heap[indexOne]
        this.heap[indexOne] = temp
    }
    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }
}

const array = [70, 60, 40, 45, 50, 39, 16, 10, 9, 35, 5]
const heap = new MaxHeap()
heap.insert(9)
heap.insert(40)
heap.insert(80)
heap.insert(84)
heap.insert(60)
heap.insert(50)
heap.insert(70)
heap.insert(16)
heap.insert(5)
heap.insert(39)
heap.insert(45)
heap.insert(10)
heap.insert(35)

heap.delete()

heap.display()
