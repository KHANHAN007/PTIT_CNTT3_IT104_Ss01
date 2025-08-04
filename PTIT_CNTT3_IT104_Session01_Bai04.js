const checkParity = (a) => {
  if (typeof a !== 'number') {
    console.log(`${a} khong phai la so`);
  } else if (a % 2 === 0) {
    console.log(`${a} la so chan`);
  } else {
    console.log(`${a} la so le`);
  }
};

checkParity("hello");
checkParity(10);
checkParity(7); 
