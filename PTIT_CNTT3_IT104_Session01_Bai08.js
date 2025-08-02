const insertArrayAtPosition = (arr1, arr2, position) => {
    if (position < 0 || position > arr1.length) {
        console.log("Invalid position");
        return;
    }
    const result = [
        ...arr1.slice(0, position),
        ...arr2,
        ...arr1.slice(position)
    ];
    console.log("Resulting array:", result);
};

insertArrayAtPosition([1,2,3,7,8], [4,5,6], 3);
insertArrayAtPosition(['a','b','e','f'], ['c','d'], 2);
insertArrayAtPosition([1,2], [3,4], 5);