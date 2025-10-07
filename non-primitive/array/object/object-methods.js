// you can store functions inside objrct are called object methods

//".this"-keyword = its refers the object itself.(used to accesss properties and methods)

const car={
    brand:"Toyota",
    start:function(){
       // console.log('car started');
        console.log(`${this.brand} is started`);

        
    }
}
car.start();
