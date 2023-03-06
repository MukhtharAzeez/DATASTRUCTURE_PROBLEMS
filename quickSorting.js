let array = [12, 23, 12, 34, 3, 34, 23, 5, 43, 3, 53, 54, 43, 54, 3, 42, 4, 6, 7, 45, 7564, 65, 543, 7, 6554, 7, 34, 35, 756, 456, 34, 24, 64, 4, 32, 24, 5, 4]
function quickSort(array) {
    quickSortHelper(array, 0, array.length - 1)
}
function quickSortHelper(array, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return
    }
    let pivotIndex = startIndex
    let leftIndex = startIndex + 1
    let rightIndex = endIndex
    while (leftIndex <= rightIndex) {
        if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) {
            swap(array, leftIndex, rightIndex)
            leftIndex++;
            rightIndex--;
        } else if (array[leftIndex] <= array[pivotIndex]) {
            leftIndex++
        } else if (array[rightIndex] >= array[pivotIndex]) {
            rightIndex--
        }
    }
    swap(array, pivotIndex, rightIndex)
    quickSortHelper(array, startIndex, rightIndex - 1)
    quickSortHelper(array, rightIndex + 1, endIndex)
}
function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
quickSort(array)
console.log(array)