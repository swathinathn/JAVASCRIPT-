const prompt = require('prompt-sync')();            // require -- to import prompt



let temperature = prompt("enter the temperature: ");

//let temperature = 15;

if (temperature > 20) {
    console.log("its warm outside");

} else {
    console.log("its cool outside");

}