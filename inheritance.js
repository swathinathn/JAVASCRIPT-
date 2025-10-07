//one class can inherit properties and methods from another class (by using 'extend' keywords)
//base class
class Animal {
    constructor(name){
        this.name = name; //intialization

    }

    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

//derived class inherits from animal
class Dog extends Animal{
      constructor(name,breed){
        super(name);//calls the parent constructor
        this.breed = breed;
      }

      //override speak method
      speak(){
        console.log(`${this.name}-${this.breed} barks`);
      }
}

const dog = new Dog("Rex","German shepherd");
dog.speak()