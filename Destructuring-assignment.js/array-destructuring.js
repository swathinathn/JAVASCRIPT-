const numbers = [10, 20, 30, 40];

//basic destructuring

const [a, b] = numbers;
console.log(a);
console.log(b);

//skipping values

//const[, , c]= numbers;
//console.log(c);


//using speard operator 
const[x,...rest]= numbers;
console.log(x);
console.log(rest);