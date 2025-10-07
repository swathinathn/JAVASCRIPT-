const prompt = require('prompt-sync')();   
function askAge() {
    return new Promise((resolve, reject) => {
        let age =prompt("Enter your age:");

        if (age === null) {
            reject("User cancelled the input.");
        } else if (isNaN(age)) {
            reject(" Please enter a valid number.");
        } else {
            resolve(" promise resolved successfully");
        }
    });
}

// Using the promise
askAge()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("promise execution finished"));node 