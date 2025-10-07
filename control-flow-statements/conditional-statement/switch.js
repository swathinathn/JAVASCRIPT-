const prompt = require('prompt-sync')();            // require -- to import prompt

let day = prompt("enter the day: ");

//let day = "monday";

switch (day) {
    case "monday":
        console.log("start of a week");
        break;

    case "friday":
        console.log("end of  working week");
        break;

    case "sunday":
        console.log("**weekend**");
        break;



    default:
        console.log("ss");
        
        break;
}