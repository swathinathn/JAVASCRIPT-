const students=[
    {name:'ali', age:20,grade:'A'},
    {name:'shine' ,age:21,grade:'B+'},
    {name:'naveen', age:32,grade:'C'},
    
]
//accessing datas
console.log( students[0].name);
console.log( students[1].grade);
console.log( students[1].age);


//looping  through object array.
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})
