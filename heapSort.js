const arr = [8, 20, 2, 4, 6, 88];
heapSort(arr, arr.length);
console.log(arr);
function heapSort(arr, n) {
    for(i = parseInt(n / 2 -1); i>= 0 ; i--) {
        maxHeapify(arr, n , i);
    }
    for(i = n-1;i>= 0; i--) {
        swap(arr, 0 , i);
        maxHeapify(arr, i , 0)
    }
}
function maxHeapify(arr, n, i) {
    let largest = i;
    let leftIndex = i * 2 + 1;
    let rightIndex = i * 2 + 2;
    if (leftIndex < n && arr[leftIndex] > arr[largest]) {
        largest = leftIndex;
    }
    if (rightIndex < n && arr[rightIndex] > arr[largest]) {
        largest = rightIndex;
    }
    if (i != largest) {
        swap(arr, i, largest)
        maxHeapify(arr, n, largest)
    }
}
function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}