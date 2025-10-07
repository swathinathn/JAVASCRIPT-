function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("**data loaded**");
            reject(" Failed to load data"); 
        }, 2000)
    })
}

async function getData() {
    console.log("start");

    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error caught:", error);
    } finally {
        console.log("This always  (cleanup code).");
    }

    console.log("end");
}

getData();
