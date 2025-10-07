//function passing another function as an argument
//features */
//1-asynchronous operations 
//2-customize behaviour of general purpose functions
//3-avoid blocking code execution


//this is our callback function
function greetUser(name) {
    console.log(`hello ${name} `);

}

//this function takes another function (callback function) as an parameter
function getUserInput(callback) {
    const name = "mufeed";
    callback(name) //calling the callback  function with the user's  name 
}

getUserInput(greetUser); // passing greetuser as an argument



//callback hell or pyramid of boom---multiple nested callbacks make the code difficult to read and maintain