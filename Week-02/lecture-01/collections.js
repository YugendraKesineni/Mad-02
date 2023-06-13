let x = [1,2,3]
console.log( `${typeof(x)} : ${x} with length = ${x.length}`);
console.log(x[0])


let y = [1, 'b', a => a + 1];
console.log(`${typeof(y)} : ${y} with length = ${y.length}`);
console.log(x.length, y.length);

// To delete an array
x = [];

// Holes in an array
y.length = 10;
console.log(`${typeof(y)} : ${y} with length = ${y.length}`);

// y[4] = undefined

