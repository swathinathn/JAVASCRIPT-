//aync marks a function that will return a promise.


/*async function hello() {
    //function decleration
}

const saybye = async function() {
    //function expression
}

const sayHello = async ()=> {
    // using arrow function
}


//await- posses the function execution until a promise is resolved(or rejected).
// it makes asynchronous code look and behave like synchronous code
*/


function fetchData(){
    return new Promise((resolv)=> {
        setTimeout(()=>{
            resolv("**data loaded**")
        },2000)
    })
}
async function getData(){
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
    
    
}
getData()

// task -
//* async function hi(){
//try{
 //success code
//} catch(error){

//Error
//}
//} 
