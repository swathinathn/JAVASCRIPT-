/*a promise in js is an object that represent the eventual compeletion or 
failure of an asynchronus operation and it's resulting values*/
//resolve- called when the operation is successfull. 
//reject- called when the operation  fails

// .then - executes if  the promise is resolved
// .catch-- executes when the promise is rejected.
// .finally-- executes regardless wheather the promise is resolved or rejected.

//creating promise

let myPromise = new Promise((resolve, reject) => { //creating promise object
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("promise resolved successfully")
        } else {
            reject("promise rejected")
        }

    }, 1000)
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("promise execution finished"))