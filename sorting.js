// Selection Sorting



let a = [12, 23, 12, 34, 3, 34, 23, 5, 43, 3, 53, 54, 43, 54, 3, 42, 4, 6, 7, 45, 7564, 65, 543, 7, 6554, 7, 34, 35, 756, 456, 34, 24, 64, 4, 32, 24, 5, 4]
let time = new Date();

for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[j] < a[i]) {
            let temp = a[j]
            a[j] = a[i]
            a[i] = temp
        }
    }
}
console.log(a, '----', new Date() - time)

// Bubble Sorting

a = [12, 23, 12, 34, 3, 34, 23, 5, 43, 3, 53, 54, 43, 54, 3, 42, 4, 6, 7, 45, 7564, 65, 543, 7, 6554, 7, 34, 35, 756, 456, 34, 24, 64, 4, 32, 24, 5, 4]
let b = [4, 2, 3, 1, 5]
time = new Date();
let length = a.length


for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < length; j++) {
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
    length--;
}

console.log(a, '----', new Date() - time)



// Insertion Sorting


a = [12, 23, 12, 34, 3, 34, 23, 5, 43, 3, 53, 54, 43, 54, 3, 42, 4, 6, 7, 45, 7564, 65, 543, 7, 6554, 7, 34, 35, 756, 456, 34, 24, 64, 4, 32, 24, 5, 4]
time = new Date();

for (var i = 1; i < a.length; i++) {
    let current = a[i]
    let index = i - 1
    while (index >= 0 && current < a[index]) {
        a[index + 1] = a[index]
        index--
    }
    a[index + 1] = current

}

console.log(a, '----', new Date() - time)

//   https://www.figma.com/file/y9umZDOpyjtXI22nCzBX1P/Untitled?node-id=0%3A1&t=vUSRTR2IQUM9jId8-1