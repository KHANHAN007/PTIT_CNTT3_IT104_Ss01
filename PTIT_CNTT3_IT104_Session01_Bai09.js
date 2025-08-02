const mergeSort = (arr1, arr2) => {
    const result = [];
    let i = 0, j = 0;

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
console.log(mergeSort([1, 2, 3, 5, 9], [4, 6, 7, 8]));
console.log(mergeSortedArrays([1, 2, 3, 5, 9], [4, 6, 7, 8]));
