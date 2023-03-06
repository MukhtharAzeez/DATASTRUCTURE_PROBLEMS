function findPairs(arr, target) {
    const results = [];
    function findSubsets(startIndex, subset) {
        let sum = 0;
        for(let i = 0; i < subset.length; i++) {
            sum = sum + subset[i];
        }
        if (target === sum) {
            results.push(subset);
        }
        for (let i = startIndex; i < arr.length; i++) {
            findSubsets(i + 1, [...subset, arr[i]]);
        }
    }
    findSubsets(0, []);
    return results;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pairs = findPairs(arr, 10);
console.log(pairs);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getten(arr, n, sum, selected) {
//     if (sum === 10) {
//         console.log(`Elements ${selected} ===  10`);
//     } else if (sum < 10 && selected.length < n) {
//         for (let i = 0; i < arr.length; i++) {
//             let takeArr = arr.slice(i + 1);
//             getten(takeArr, n, sum + arr[i], selected.concat(arr[i]));
//         }
//     }
// }
// let selected = []
// getten(arr, arr.length - 1, 0, selected);