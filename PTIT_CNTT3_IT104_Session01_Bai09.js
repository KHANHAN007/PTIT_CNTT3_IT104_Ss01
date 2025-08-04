const mergeSortedArrays = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
};
console.log(mergeSortedArrays([1, 2, 3, 5, 9], [4, 6, 7, 8]));
