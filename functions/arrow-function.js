//---function declaration
//function add(a,b){
//return a+b;
//}

//console.log(add(2,4))

// arrow function is a short term syntax for writing functions in JS,indroduced in ES6.(ECMA SCRIPT 6)
//shorter syntax
//using arrow function.
const add = (a, b) => a + b;
console.log(add(2, 2));



//-------single parameters(no parantheses needed)---

const square = x => x * x;
console.log("square of 4:", square(4));

//-----no parameters(empty parathesis)
const greet =()=> console.log("hlo");

greet()

// multiline --function
const divide =(a,b)=> {
   const result=a/b;
   return result;

}
console.log(divide(10,2));

