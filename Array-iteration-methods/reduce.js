//It goes through all elements of an array and reduces them to a single value (like sum, product, average, etc.).
let numbers =[1,2,3,4]
let sum = numbers.reduce((acc,num) => acc + num,0);
console.log(sum);

//acc=accumalator(0)
//num =each elements in the array