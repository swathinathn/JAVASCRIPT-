const person={
    name:'akash', 
    age:22,
    isstudent:false
}
console.log(person.name);
console.log(person.age);

// add or modify
person.city="new york";

person.age=31;
console.log(person);


// delete city from person details


delete person.city;
console.log('final person details is : ',person);