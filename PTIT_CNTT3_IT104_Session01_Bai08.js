const insertArrayAt = (arr1, arr2, position) => {
  if (position < 0 || position > arr1.length) {
    console.log("Vị trí chèn không hợp lệ!");
    return;
  }
  const result = [
    ...arr1.slice(0, position),
    ...arr2,
    ...arr1.slice(position)
  ];
  console.log(result);
  return result;
};
