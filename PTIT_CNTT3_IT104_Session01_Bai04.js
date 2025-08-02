const checkParity = (a) => {
    if (typeof a !== 'number' || isNaN(a)) {
        console.log(`${a} not is number`);
        return;
    }
    else {
        console.log(`${a} is ${a % 2 === 0 ? 'even' : 'odd'}`);
    }
}

checkParity("abc");
checkParity(4);
checkParity(9);    